from fastapi import APIRouter
from datetime import datetime
from app.core.config import settings

router = APIRouter()


@router.get("/")
async def root():
    """API 루트 엔드포인트"""
    return {
        "message": "Firewall Log Monitor API",
        "version": settings.APP_VERSION,
        "docs_url": "/docs"
    }


@router.get("/health")
async def health_check():
    """헬스체크 엔드포인트"""
    return {
        "status": "healthy",
        "app_name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "timestamp": datetime.utcnow().isoformat()
    }
