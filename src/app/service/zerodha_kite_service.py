import logging
from fastapi import APIRouter


router = APIRouter(prefix="/zerodha-kite", tags=["zerodha-kite"], responses={404: {"description": "Not found"}})

_logger = logging.getLogger(__name__)


@router.get("/callback")
async def callback():
    return {"message": "Hello from Callback"}


@router.post("/postback")
async def postback():
    return {"message": "Hello from Postback"}
