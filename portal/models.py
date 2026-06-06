from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    full_name = Column(String, nullable=False)
    email = Column(String, unique=True)
    hashed_password = Column(String, nullable=False)
    role = Column(String, default="technician")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)


class Client(Base):
    __tablename__ = "clients"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String)
    phone = Column(String)
    address_street = Column(String)
    address_city = Column(String)
    address_state = Column(String, default="CA")
    address_zip = Column(String)
    notes = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    projects = relationship("Project", back_populates="client")


class Project(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True)
    estimate_number = Column(String, unique=True)
    name = Column(String, nullable=False)
    # Split address fields
    address_street = Column(String)
    address_city = Column(String)
    address_state = Column(String, default="CA")
    address_zip = Column(String)
    # Contact
    phone = Column(String)
    email = Column(String)
    notes = Column(Text)
    status = Column(String, default="draft")
    # Dates
    issue_date = Column(DateTime, default=datetime.utcnow)
    expiry_days = Column(Integer, default=30)   # admin-editable, default 30
    # Discount
    discount_type = Column(String, nullable=True)
    discount_value = Column(Float, nullable=True)
    # Tax — stored so admin can override per ZIP
    tax_rate = Column(Float, default=0.0775)
    client_id = Column(Integer, ForeignKey("clients.id"), nullable=True)
    created_by = Column(Integer, ForeignKey("users.id"))
    assigned_to = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    client = relationship("Client", back_populates="projects")
    shades = relationship("Shade", back_populates="project",
                          cascade="all, delete-orphan", order_by="Shade.id")
    creator = relationship("User", foreign_keys=[created_by])
    technician = relationship("User", foreign_keys=[assigned_to])


class Shade(Base):
    __tablename__ = "shades"
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)
    label = Column(String, default="Room")
    width = Column(Float, nullable=False)
    height = Column(Float, nullable=False)
    treatment = Column(String, nullable=False)
    fabric_code = Column(String, default="TBD")
    fabric_price = Column(Float, default=0.0)
    operation = Column(String, default="manual")  # manual|motorized|cordless
    price = Column(Float, nullable=False)
    # Pricing breakdown stored for transparency
    price_breakdown = Column(Text)  # JSON string
    status = Column(String, default="pending")
    cassette_with_fabric = Column(Boolean, default=False)
    remove_old = Column(Boolean, default=False)
    haul_away = Column(Boolean, default=False)
    reverse_roll = Column(Boolean, default=False)
    notes = Column(Text)
    created_by = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime, default=datetime.utcnow)
    project = relationship("Project", back_populates="shades")


class ZipTaxRate(Base):
    """Admin-editable ZIP → tax rate table"""
    __tablename__ = "zip_tax_rates"
    id = Column(Integer, primary_key=True, index=True)
    zip_code = Column(String, unique=True, index=True)
    city = Column(String)
    tax_rate = Column(Float, nullable=False)


class AuditLog(Base):
    __tablename__ = "audit_logs"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    action = Column(String)
    detail = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
