from flask import Flask, request, jsonify
from flask_cors import CORS
from parser import parse_text

app = Flask(__name__)
CORS(app, resources={r"/nlp/*": {"origins": "*"}})


@app.route('/nlp/parse', methods=['POST'])
def parse():
    body = request.json
    text = body['text']
    return jsonify({'result': parse_text(text)})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
