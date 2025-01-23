app = FastAPI()

app.include_router(zeroda_kite_service.router, prefix="/api", tags=["zeroda_kite_service"])
