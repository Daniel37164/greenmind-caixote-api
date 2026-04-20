from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 🔥 ADICIONA ISTO (CORS FIX)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # permite qualquer frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "ok"}

@app.get("/status")
def status():
    return {
        "lixo": "plastico",
        "acao": "separado"
    }