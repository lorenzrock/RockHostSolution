from flask import jsonify
from flask_jwt_extended import create_access_token
from datetime import timedelta, datetime
import os
from mailjet_rest import Client




def generate_response(code, message, url=None, error=None, user=None): 
    response = {
        "code": code,
        "message": message
    }
    if error:
        response[error] = error
    if url:
        response["url"] = url

    if user:
        response["user"] = user
    return jsonify(response), code



def generate_verification_token(user_email):
    return create_access_token(identity=user_email, expires_delta=timedelta(hours=1))


def send_verification_email(user_email, user_name, verification_link):
    api_key_mj = os.environ["MJ_API_KEY"]
    api_secret_mj = os.environ["MJ_API_SECRET_KEY"]    

    
    mail_data = {
            'Messages': [
                {
                    "From": {
                        "Email": "server@lorenz-rockstuhl.de",
                        "Name": "Rockhost Solution"
                    },
                    "To": [
                        {
                            "Email": user_email,
                            "Name": user_name
                        }
                    ],
                    "Subject": "Verify Your Rockhost Solution Account",
                    "TextPart": (
                        f"Dear {user_name},\n\n"
                        "Thank you for creating an account with Rockhost Solution! "
                        "To complete your registration and start using our services, please verify your email address by clicking the link below:\n\n"
                        f"{verification_link}\n\n"
                        "If you did not sign up for a Rockhost Solution account, please ignore this email.\n\n"
                        "Best regards,\n"
                        "The Rockhost Solution Team"
                    ),
                    "HTMLPart": (
                        "<html>"
                        "<body>"
                        f"<p>Dear {user_name},</p>"
                        "<p>Thank you for creating an account with <strong>Rockhost Solution</strong>! "
                        "To complete your registration and start using our services, please verify your email address by clicking the link below:</p>"
                        f"<p><a href='{verification_link}'>Verify Your Account</a></p>"
                        "<p>If you did not sign up for a Rockhost Solution account, please ignore this email.</p>"
                        "<p>Best regards,<br>The Rockhost Solution Team</p>"
                        "</body>"
                        "</html>"
                    )
                }
            ]
        }

    try:
        mailjet = Client(auth=(api_key_mj, api_secret_mj), version="v3.1")
        result = mailjet.send.create(data=mail_data)
        if result.status_code == 200:
            return generate_response(200, "Request was successful!")
        else:
            raise Exception("Error while sending verification-Code")
    except Exception as e:
        return generate_response(400, e, e)
