from pydantic import BaseModel
from typing import Optional, Literal


class UserLogin(BaseModel):
    username: str
    password: str

class UserCreate(BaseModel):
    username: str
    full_name: str
    email: Optional[str] = None
    password: str
    role: Literal["admin", "sales", "technician"] = "sales"

class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    role: str
    full_name: str
    user_id: int

class ClientCreate(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    address_street: Optional[str] = None
    address_city: Optional[str] = None
    address_state: Optional[str] = "CA"
    address_zip: Optional[str] = None
    notes: Optional[str] = None

class ProjectCreate(BaseModel):
    name: str
    address_street: Optional[str] = None
    address_city: Optional[str] = None
    address_state: Optional[str] = "CA"
    address_zip: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    notes: Optional[str] = None
    expiry_days: Optional[int] = 30
    client_id: Optional[int] = None
    assigned_to: Optional[int] = None

class ProjectUpdate(BaseModel):
    name: Optional[str] = None
    address_street: Optional[str] = None
    address_city: Optional[str] = None
    address_state: Optional[str] = None
    address_zip: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    notes: Optional[str] = None
    status: Optional[str] = None
    expiry_days: Optional[int] = None
    discount_type: Optional[str] = None
    discount_value: Optional[float] = None
    tax_rate: Optional[float] = None
    assigned_to: Optional[int] = None

class ShadeCreate(BaseModel):
    label: Optional[str] = "Room"
    width: float
    height: float
    treatment: str
    fabric_code: Optional[str] = "TBD"
    fabric_price: Optional[float] = 0.0
    operation: Literal["manual", "motorized", "cordless"] = "manual"
    cassette_with_fabric: bool = False
    remove_old: bool = False
    haul_away: bool = False
    reverse_roll: bool = False
    notes: Optional[str] = None

class ShadeUpdate(BaseModel):
    label: Optional[str] = None
    width: Optional[float] = None
    height: Optional[float] = None
    fabric_code: Optional[str] = None
    fabric_price: Optional[float] = None
    operation: Optional[str] = None
    cassette_with_fabric: Optional[bool] = None
    remove_old: Optional[bool] = None
    haul_away: Optional[bool] = None
    reverse_roll: Optional[bool] = None
    notes: Optional[str] = None
    status: Optional[str] = None

class QuoteRequest(BaseModel):
    width: float
    height: float
    treatment: str
    fabric_code: Optional[str] = "TBD"
    fabric_price: Optional[float] = 0.0
    operation: str = "manual"
    cassette_with_fabric: bool = False
    remove_old: bool = False
    haul_away: bool = False
