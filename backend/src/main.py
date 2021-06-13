from flask import Flask, request, abort
from flask.json import jsonify
from flask_cors import CORS
import jwt
import datetime
from services.database_service import setup_db, execute_post
from controllers.entry_controller import create_entry
from controllers.search_controller import search
from controllers.login_controller import loginAndGenerateToken
from controllers.account_controller import fetch_user_info, change_password
from logs.emit_log import emit_log


app = Flask(__name__)
CORS(app)
setup_db(app)

message_ok = {'message': 'OK'}
message_todo = {'message': 'TODO'}

############### AUTH ###############
@app.route('/login', methods=['POST'])
def login_endpoint():
    return loginAndGenerateToken()

@app.route('/register', methods=['POST'])
def register_endpoint():
    return jsonify(message_todo)

@app.route('/check', methods=['POST'])
def check_endpoint():
    return jsonify(message_todo)

@app.route('/logout', methods=['POST'])
def logout_endpoint():
    return jsonify(message_todo)

############### BROWSER ###############
@app.route('/search', methods=['GET'])
def browse_endpoint():
    content = request.args.get('query', type=str)
    emit_log(content)
    return search(content)

############### ACCOUNT ###############
@app.route('/user-info', methods=['GET'])
def user_info_endpoint():
    return fetch_user_info(request.json)

@app.route('/change-password', methods=['POST'])
def change_password_endpoint():
    if change_password(request.json):
        return jsonify(message_ok)
    else: abort(406)

############### ENTRY ###############
@app.route('/create', methods=['POST'])
def create_endpoint():
    if create_entry(request.json):
        return jsonify(message_ok)
    else: abort(406)
