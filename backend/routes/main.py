from flask import Blueprint, jsonify


bp = Blueprint("main", __name__)


@bp.route("/")
def main():
    return jsonify({"main": "main routes"})