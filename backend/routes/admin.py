from flask import Blueprint, jsonify



bp = Blueprint("admin", __name__)


@bp.route("/")
def admin():
    return jsonify({"adminnnnnn": "lulll"})