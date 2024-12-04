from sqlalchemy.sql import func
from . import db
from flask_login import UserMixin
from flask import current_app



class Users(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    birthday = db.Column(db.Integer)
    consent = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    
    
    # Password security stuffff
    password_hash = db.Column(db.String(256))

    @property
    def password(self):
        raise AttributeError("password is not a readable attribute!")
    
    @password.setter
    def password(self, password):
        self.password_hash = current_app.bcrypt.generate_password_hash(password).decode('utf-8')

    def verify_password(self, password):
        return current_app.bcrypt.check_password_hash(self.password_hash, password)
    
    def __repr__(self):
        return f'<Users {self.firstname}>'