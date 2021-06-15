from flask import jsonify, abort, make_response
from services.login_service import hash_password, verify_password, generate_token, check_token
from services.database_service import execute_post, execute_get
from services.repository_service import insert_into_users, find_users_by_login
from data.user import User
import jwt
import datetime


def check(request):
    return check_token(request)


def logout(token):
    pass


def register_user(data):
    try:
        user = User(data["login"], hash_password(data["password"]))
    except:
        abort(make_response(jsonify(message="Cannot instantiate User"), 406))
    execute_post(insert_into_users(user.get_login(), user.get_password()))
    return generate_token(user.get_login())


def login(request):
    auth = request.json
    if not auth or not auth["login"] or not auth["password"]:
        abort(make_response(jsonify(message="Authorization data not complete"), 401))
    user_data = execute_get(find_users_by_login(auth["login"]))
    if not user_data.data or user_data.json == []:
        abort(make_response(jsonify(message="No such user"), 401))
    user_data_json = user_data.json[0]
    user = User(user_data_json["login"], password = user_data_json["password"])
    if verify_password(user.get_password(), auth["password"]):
        return generate_token(user.get_login())
    abort(make_response(jsonify(message="Wrong password"), 401))
