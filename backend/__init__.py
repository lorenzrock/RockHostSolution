from flask import Flask, jsonify
from flask_cors import CORS
from .config import Config
from dotenv import load_dotenv
from .models import db, Users
from flask_bcrypt import Bcrypt
from flask_login import LoginManager



#loads the .env file
load_dotenv()
# add password cryptonig
bcrypt = Bcrypt()
# add LoginManager from flask
login_manager = LoginManager()




def create_app():


    app = Flask(__name__)

    #adding Flask Configs

    app.config.from_object(Config)
    # Enable CORS for all routes
    CORS(app)

    # For sercure storege of the PW
    bcrypt.init_app(app)
    app.bcrypt = bcrypt

    # init LoginManager
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        return Users.query.filter_by(id=user_id).first()
    
    @login_manager.unauthorized_handler
    def unauthorized():
    # Return a 401 status with a custom message
        return jsonify({"error": "User is not authenticated"}), 401





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








