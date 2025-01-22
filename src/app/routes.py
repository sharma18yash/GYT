from flask import Blueprint, jsonify

main = Blueprint("main", __name__)


@main.route("/callback", methods=["GET"])
def callback():
    return jsonify({"message": "Hello from Callback"})


@main.route("/postback", methods=["POST"])
def postback():
    return jsonify({"message": "Hello from Postback"})
