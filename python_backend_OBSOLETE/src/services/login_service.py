from flask import jsonify, request, abort, make_response
from functools import wraps
from werkzeug.security import generate_password_hash, check_password_hash
from services.auth_config_service import get_secret_key
from services.database_service import execute_get
from services.repository_service import find_users_by_login
from data.user import User
import jwt
import datetime


def hash_password(password):
    return generate_password_hash(password, method='sha256')


def verify_password(db_password, password):
    return check_password_hash(db_password, password)


def check_token(request):
    token = None
    if "Authorization" in request.headers:
        header = request.headers["Authorization"]
    if not header:
        abort(make_response(jsonify(message="Token is missing"), 401))
    token = header.split(" ")[1]
    try:
        data = jwt.decode(token, get_secret_key(), algorithms="HS256")
        current_user_data = execute_get(find_users_by_login(data["login"]))
        current_user_data_json = current_user_data.json[0]
        current_user = User(current_user_data_json["login"], current_user_data_json["password"])
    except:
        abort(make_response(jsonify(message="Token is invalid"), 401))
    return current_user


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        return f(check_token(request), *args, **kwargs)
    return decorated


def generate_token(login):
    token = jwt.encode({"login": login, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)}, get_secret_key())
    return jsonify({"token": token})

