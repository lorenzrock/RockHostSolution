import os
from dotenv import load_dotenv
import redis
from datetime import timedelta

load_dotenv()

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:


    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    SECRET_KEY = os.getenv('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'database.db') # os.getenv("DATABASE_URL")  #### Wenn switching from sqlite to mysql watch .env
    SQLALCHEMY_TRACK_MODIFICATIONS = False



    # Basic Configuration for Flask-Session
    SESSION_TYPE = 'redis'  # Use Redis for server-side sessions
    SESSION_PERMANENT = False  # Sessions should expire
    SESSION_USE_SIGNER = True  # Sign session ID to prevent tampering
    SESSION_KEY_PREFIX = 'myapp:'  # Optional, adds a prefix to Redis keys
    SESSION_REDIS = redis.from_url('redis://localhost:6379')  # Redis connection URL
    PERMANENT_SESSION_LIFETIME = timedelta(hours=1)
