from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"status": "ok"}

@app.get("/status")
def status():
    return {
        "lixo": "plastico",
        "acao": "separado"
    }