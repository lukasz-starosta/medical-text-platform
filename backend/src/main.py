from flask import Flask, request, jsonify
from flask_cors import CORS
from services.database_service import setup_db
from services.auth_config_service import setup_auth
from services.login_service import token_required
from controllers.entry_controller import create_entry, get_entry
from controllers.search_controller import search
from controllers.login_controller import check, register_user, login, logout
from controllers.account_controller import fetch_user_info, change_password


app = Flask(__name__)
CORS(app)
setup_db(app)
setup_auth(app)


############### AUTH ###############
@app.route('/login', methods=['POST'])
def login_endpoint():
    return login(request)


@app.route('/register', methods=['POST'])
def register_endpoint():
    return register_user(request.json)


@app.route('/check', methods=['GET'])
@token_required
def check_endpoint(current_user):
    check(request)
    return jsonify(message = "OK")
    

############### BROWSER ###############
@app.route('/search', methods=['GET'])
@token_required
def browse_endpoint(current_user):
    return search(request.args.get('query'))


# ############### ACCOUNT ###############
@app.route('/user-info', methods=['GET'])
@token_required
def user_info_endpoint(current_user):
    return fetch_user_info(current_user)


@app.route('/change-password', methods=['POST'])
@token_required
def change_password_endpoint(current_user):
    change_password(current_user, request.json)
    return jsonify(message = "OK")


# ############### ENTRY ###############
@app.route('/entry', methods=['POST'])
@token_required
def create_endpoint(current_user):
    create_entry(request.json)
    return jsonify(message = "OK")


@app.route('/entry', methods=['GET'])
@token_required
def get_entry_endpoint(current_user):
    return get_entry(request.args.get("postId"))
