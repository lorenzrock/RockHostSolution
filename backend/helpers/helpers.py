from flask import jsonify

def generate_response(code, error, massage, url): 
    response = {
        "code": code,
        "error": error,
        "message": massage,
        "url": url
    }
    return jsonify(response)