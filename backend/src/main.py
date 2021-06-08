from flask import Flask, jsonify, request
from services.database_service import setup_db, execute

app = Flask(__name__)


if __name__ == "__main__":
    app = setup_db(app)
    """
    Here you can change debug and port
    Remember that, in order to make this API functional, you must set debug in False
    """
    app.run(host='0.0.0.0', port=8000, debug=False)
    test = execute("select * from dupa")
    print(test)