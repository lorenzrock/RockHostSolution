from marshmallow import fields, Schema, validates, ValidationError
from datetime import datetime, timedelta


class UserRegistrationSchema(Schema):
    username = fields.Str(required=True, error_messages={"required": "Username is required"})
    email = fields.Email(required=True, error_messages={"required": "Email is required"})
    password = fields.Str(required=True, error_messages={"required": "Password is required"})
    birthday = fields.Str(required=True, error_messages={"required": "Birthday is required"})
    consent = fields.Bool(required=True, error_messages={"required": "Consent Data is required"})

    @validates("password")
    def validate_password(self, value):
        if len(value) < 8:
            raise ValidationError("Password must be at least 8 characters long.")
        
    @validates("birthday")
    def validate_birthday(self, value):
        try:
            # Parse the birthday to check format and validity
            birth_date = datetime.strptime(value, "%Y-%m-%d")

            # Check if the date is in the future
            if birth_date >= datetime.now():
                raise ValidationError("Birthday must be a date in the past.")
            
             # Check if the user is at least 18 years old
            age_cutoff = datetime.now() - timedelta(days=18 * 365)  # Approximate 18 years
            if birth_date > age_cutoff:
                raise ValidationError("You must be at least 18 years old to register.")
        except ValueError:
            raise ValidationError("Birthday must be in the format YYYY-MM-DD.")
        
class UserLoginSchema(Schema):
    email = fields.Email(required=True, error_messages={"required": "Email is required."})
    password = fields.Str(required=True, error_messages={"required": "Password is required."})
    