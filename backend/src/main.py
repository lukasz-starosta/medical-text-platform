from flask import Flask, request
from flask_cors import CORS
import jwt
import datetime
from services.database_service import setup_db
from controllers.search_controller import search
from controllers.login_controller import loginAndGenerateToken

app = Flask(__name__)
CORS(app)
setup_db(app)

############### AUTH ###############
@app.route('/auth/login', methods=['POST'])
def run():
    return loginAndGenerateToken()

############### BROWSER ###############
@app.route('/browser/<content>', methods=['GET'])
def browse(content):
    return search(content)
