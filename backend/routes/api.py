from flask import Blueprint, jsonify



bp =Blueprint("api", __name__)


@bp.route("/")
def api():
    return jsonify({"main": "the main Route"})