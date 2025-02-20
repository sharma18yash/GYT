from fastapi import FastAPI
from service import zerodha_kite_service
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://gyt-silk.vercel.app"], # Only allow this origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(zerodha_kite_service.router, tags=["zeroda_kite_service"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", log_level="info", reload=True, workers=1, port=8080, host="0.0.0.0")
