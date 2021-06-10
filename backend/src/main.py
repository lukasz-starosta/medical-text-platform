from flask import Flask, request, abort
from flask_cors import CORS
import jwt
import datetime
from services.database_service import setup_db
from controllers.entry_controller import create_entry
from controllers.search_controller import search
from controllers.login_controller import loginAndGenerateToken


app = Flask(__name__)
CORS(app)
setup_db(app)

############### AUTH ###############
@app.route('/login', methods=['POST'])
def login():
    return loginAndGenerateToken()

@app.route('/register', methods=['POST'])
def register():
    return "work in progress"

@app.route('/check', methods=['POST'])
def check():
    return "work in progress"

@app.route('/logout', methods=['POST'])
def logout():
    return "work in progress"

############### BROWSER ###############
@app.route('/search', methods=['GET'])
def browse():
    content = request.args.get('query', type=str)
    return search(content)

############### ACCOUNT ###############
@app.route('/user-info', methods=['GET'])
def user_info():
    id = request.args.get('userId', type=int)
    return "work in progress"

@app.route('/change-password', methods=['POST'])
def change_password():
    return "work in progress"

############### ENTRY ###############
@app.route('/create', methods=['POST'])
def create():
    if create_entry(request.json):
        return "OK"
    else: abort(406)
