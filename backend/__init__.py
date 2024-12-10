from flask import Flask, jsonify
from flask_cors import CORS
from .config import Config
from dotenv import load_dotenv
from .models import db, Users
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_session import Session


#loads the .env file
load_dotenv()
# add password cryptonig
bcrypt = Bcrypt()
limiter = Limiter(
    get_remote_address,
    storage_uri="redis://localhost:6379"
)
session = Session()




def create_app():


    app = Flask(__name__)

    #adding Flask Configs

    app.config.from_object(Config)
    # Enable CORS for all routes
    CORS(app,supports_credentials=True, origins="http://localhost:5173")

    # For sercure storege of the PW
    bcrypt.init_app(app)
    app.bcrypt = bcrypt

    # Adding Login/Registrate/... helper / init it 
    jwt = JWTManager(app)

    # adding Flask Limmiter to limmit the exece to a cirten number
    limiter.init_app(app)


    #adding Flask Session to the app for inmemory serverside storage
    session.init_app(app)

    
    #adding the DB and createin the tables if they does not alredy exist
    db.init_app(app)
    with app.app_context():
        db.create_all()







    
    # Import Routes and add them
    from .routes.auth import bp as auth_bp
    from .routes.main import bp as main_bp
    from .routes.api import bp as api_bp
    from .routes.admin import bp as admin_bp



    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(main_bp, url_prefix="/")
    app.register_blueprint(api_bp, url_prefix="/api")
    app.register_blueprint(admin_bp, url_prefix="/admin")






    return app








