import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:


    
    SECRET_KEY = os.getenv('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'database.db') # os.getenv("DATABASE_URL")  #### Wenn switching from sqlite to mysql watch .env
    SQLALCHEMY_TRACK_MODIFICATIONS = False