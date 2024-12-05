from flask import Blueprint, jsonify, request
from ..helpers import generate_response
from ..schema import UserRegistrationSchema
import logging
from marshmallow import ValidationError

bp = Blueprint("auth", __name__)





@bp.route("/registration", methods=["POST"])
def registration():

    user_Registration_schema = UserRegistrationSchema()

    
    req_data = request.get_json()
    
    # Validate data 
    try:
        validated_user_data = user_Registration_schema.load(req_data)
    except ValidationError as error:
        return generate_response()

    
    if validated_user_data:
        username = validated_user_data.get("username")
        email = validated_user_data.get("email")
        password = validated_user_data.get("password")
        birthday = validated_user_data.get("birthday")
        consent = validated_user_data.get("consent")




    print(username, email, password, birthday, consent)




    return generate_response(201, "ok", "ok", "normal url"), 201