import logging
from fastapi import APIRouter, Request
from fastapi.params import Body
from kiteconnect import KiteConnect
from fastapi.responses import RedirectResponse

from app.models.execute_trade_request_body import ExecuteTradeRequestBody


api_key = "fwy2sz5ujjjctqxb"
api_secret = "p9pkueo0oco6350zajziensk8a645j6d"

router = APIRouter(prefix="/zerodha-kite", tags=["zerodha-kite"], responses={404: {"description": "Not found"}})
_logger = logging.getLogger(__name__)
kite = KiteConnect(api_key=api_key)



@router.get("/callback")
async def callback(request: Request):
    request_token = request.query_params.get("request_token")  # Extract request_token from query parameters

    if request_token:
        try:
            # Step 3: Exchange request_token for access_token
            data = kite.generate_session(request_token, api_secret=api_secret)
            access_token = data["access_token"]
            
            # Set the access_token for further API calls
            kite.set_access_token(access_token)

            redirect_url = f"https://gyt-silk.vercel.app/home"
            return RedirectResponse(redirect_url)
        except Exception as e:
            return {"error": str(e)}
    else:
        return {"error": "Request token not found!"}

@router.post("/postback")
async def postback():
    return {"message": "Hello from Postback"}

@router.get("/health")
async def health_check():
    logging.info("Health check")
    return {"status": "ok"}

@router.get("/login")
async def login():
    login_url = kite.login_url()  # Get the login URL
    return RedirectResponse(login_url)  # Redirect the user to Zerodha's login page

@router.post("/trade/execute")
async def execute_trade(
    request_body: ExecuteTradeRequestBody = Body(...),
):
    try:
        order_id = kite.place_order(
            tradingsymbol=request_body.trading_symbol,
            exchange=kite.EXCHANGE_NSE,
            transaction_type=kite.TRANSACTION_TYPE_BUY,
            quantity=request_body.quantity,
            order_type=kite.ORDER_TYPE_MARKET,
            product=kite.PRODUCT_CNC,
            validity=kite.VALIDITY_DAY,
        )
        return {"order_id": order_id}
    except Exception as e:
        return {"error": str(e)}