from typing import Optional
from pydantic import BaseModel, EmailStr
from datetime import datetime


class UserOut(BaseModel):
    id: Optional[int]
    username: str
    email: EmailStr
    created_at: Optional[datetime]

    class Config:
        orm_mode = True
