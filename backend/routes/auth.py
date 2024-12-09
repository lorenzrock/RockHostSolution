from flask import Blueprint, jsonify, request, url_for, current_app, session
from ..helpers import generate_response, generate_verification_token, send_verification_email
from ..schema import UserRegistrationSchema, UserLoginSchema
from ..models import db, Users
import logging
from marshmallow import ValidationError
from flask_jwt_extended import create_access_token, decode_token
from flask_jwt_extended.exceptions import JWTDecodeError
from backend import limiter
from jwt import ExpiredSignatureError

bp = Blueprint("auth", __name__)





@bp.route("/registration", methods=["POST"])
def registration():

    user_Registration_schema = UserRegistrationSchema()

    
    req_data = request.get_json()

    if not req_data:
        return generate_response(400, "Request data missing.", "No JSON payload provided.")
    
    # Validate data 
    try:
        validated_user_data = user_Registration_schema.load(req_data)
    except ValidationError as error:
        return generate_response(400, "Validating Data Failed.", error.messages, "http://localhost:5173/")

    
    if validated_user_data:
        username = validated_user_data.get("username")
        email = validated_user_data.get("email")
        password = validated_user_data.get("password")
        birthday = validated_user_data.get("birthday")
        consent = validated_user_data.get("consent")

        
        if Users.query.filter_by(email=email).first():
            return generate_response(409, "The user alredy existes.", "The user alredy existes.")


        # Creating an Email Verification Link
        verification_token = generate_verification_token(email)
        verification_link = url_for("auth.verify_email", token=verification_token, _external=True)



        new_User = Users(username=username, email=email, password=password, birthday=birthday, verification_token=verification_token) # Password Hashing is definded in the Users Models module
        

    # Adding user to db
    try:
        db.session.add(new_User)
        db.session.commit()
    except:
        return generate_response(500, "Pls Try again internal Server Error", "Pls Try again internal server Error")
    
    # Sending Verification Link via Mailjet 

    try:
        send_verification_email(email, username, verification_link)
    except:
        db.session.rollback()
        generate_response(500, "Internal server Errro Pls Try again", "Internal server error")
        
    


        added_user = Users.query.filter_by(email=email).first()

    return generate_response(201, f"User {verification_link} Succesfully added. Pls Check your email and Verify your account.")

@limiter.limit("10 per minute")
@bp.route("/verify_email/<token>", methods=["GET"])
def verify_email(token):
    try:
        # Decode and validate the token
        decoded = decode_token(token)
        user_email = decoded.get("sub")

        if not user_email:
            return generate_response(400, "Invalid token payload.")

        # Fetch the user from the database
        user = Users.query.filter_by(email=user_email).first()

        if not user:
            return generate_response(404, "User not found.")

        # Check if the user is already verified
        if user.verified:
            return generate_response(400, "User already verified.")

        # Verify the user
        user.verified = True
        user.verification_token = ""  # Clear token to prevent reuse
        db.session.commit()

        return generate_response(200, "User verified successfully. You can now log in.")

    except ExpiredSignatureError:
        return generate_response(400, "The token has expired. Please request a new verification link.")

    except JWTDecodeError:
        return generate_response(400, "Invalid token. Please ensure the link is correct.")

    except Exception as e:
        # In case of any unexpected errors, perform a rollback to avoid incomplete transactions
        db.session.rollback()
        return generate_response(500, "Internal server error.")
    


@bp.route("/login", methods=["POST"])
def login():
    user_login_schema = UserLoginSchema()


    req_data = request.get_json()

    if not req_data:
        return generate_response(400, "Request data missing.", "No JSON payload provided.")

    try:
        valid_data = user_login_schema.load(req_data)    
    except ValidationError as e:
        return generate_response(400, "Validating Data Failed.", e.messages)
    

    if valid_data:

        email = valid_data.get("email")
        password = valid_data.get("password")


        user = Users.query.filter_by(email=email).first()
        if not user:
            return generate_response(400, "Username or Password are incorrect")
        
        if not user.verify_password(password):
            return generate_response(400, "Username or Password are incorrect")
        
    session["user_id"] = user.id


    return generate_response(200, session["user_id"])