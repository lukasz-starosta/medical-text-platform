from flask import Flask, jsonify, request
from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
import datetime
from services.database_service import setup_db, execute

app = Flask(__name__)
CORS(app)
import sites.login.login_mapping
if __name__ == "__main__":
    app = setup_db(app)
    app.run(host='0.0.0.0', port=8080, debug=False)
    test = execute("select * from orders")
    print(test)
