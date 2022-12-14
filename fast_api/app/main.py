from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.router import user, auth
from .config import settings


app = FastAPI(
    title=settings.SERVER_NAME,
    docs_url="/backend/docs",
    redoc_url="/backend/redoc",
    openapi_url="/backend/openapi.json",
)
app.include_router(user.router)
app.include_router(auth.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    SAMPLE_ENV_VAR = settings.SAMPLE_ENV_VAR
    return {"ENV": SAMPLE_ENV_VAR}
