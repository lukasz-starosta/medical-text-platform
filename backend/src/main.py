from flask import Flask, request, jsonify
from flask_cors import CORS
from services.database_service import setup_db
from services.auth_config_service import setup_auth
from services.login_service import token_required
from controllers.entry_controller import create_entry, get_entry
from controllers.search_controller import search
from controllers.login_controller import check, register_user, login, logout
from controllers.account_controller import fetch_user_info, change_password
from logs.emit_log import emit_log
import logging
import sys
from logstash_async.handler import AsynchronousLogstashHandler


app = Flask(__name__)
CORS(app)
setup_db(app)
setup_auth(app)

# host = 'logstash'
# port = 5000

# test_logger = logging.getLogger('python-logstash-logger')
# test_logger = logging.getLogger('')
# test_logger.setLevel(logging.INFO)
# test_logger.addHandler(AsynchronousLogstashHandler(host, port, database_path='logstash_test.db'))

# test_logger.error('python-logstash-async: test logstash error message.')
# test_logger.info('python-logstash-async: test logstash info message.')
# test_logger.warning('python-logstash-async: test logstash warning message.')
# test_logger.debug('python-logstash-async: test logstash debug message.')

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


@app.route('/logout', methods=['POST'])
@token_required
def logout_endpoint(current_user):
    return jsonify(message = "Not ready")


############### BROWSER ###############
@app.route('/search', methods=['GET'])
# @token_required
def browse_endpoint(current_user):
    content = request.args.get('query')
    emit_log(content)
    return search(content)

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
