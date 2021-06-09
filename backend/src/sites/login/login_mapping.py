from flask import Flask, request, jsonify
from sites.login.login_controller import encodeAuthToken, loginAndGenerateToken
from flask_cors import CORS 
import sys
import os
sys.path.insert(1, 'D:\Programowanie\medical-text-platform\\backend\src\main.py')
from main import app

print('XD')

@app.route('/auth/login', methods=['POST'])
def run():
    return loginAndGenerateToken()
