from flask import Flask
from flask_cors import CORS
from logs.receive_logs import receive_logs
import asyncio

app = Flask(__name__)
CORS(app)

asyncio.run(receive_logs())
