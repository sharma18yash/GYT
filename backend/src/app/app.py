from fastapi import FastAPI
from service import zerodha_kite_service


app = FastAPI()

app.include_router(zerodha_kite_service.router, tags=["zeroda_kite_service"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", log_level="info", reload=True, workers=1, port=8080, host="0.0.0.0")


# This is test comment
# This is another test comment