from flask import Blueprint, jsonify


bp = Blueprint("auth", __name__)



@bp.route("/registration", methods=["POST"])
def registration():
    return jsonify({"message": "test", "url:": ""}), 400