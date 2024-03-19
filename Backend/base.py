from flask import Flask, send_from_directory
from flask_cors import CORS
import json
from Model import train

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

@app.route('/')
def hello():
    jsonstring = '{"Image": "placeholder1.png", "Q1": "Question one", "Q2": "Question two"}'
    return jsonstring

@app.route('/images/<path:filename>')
def get_image(filename):
    return send_from_directory('assets/img', filename)

@app.route('/runtrain')
def run_train():
    categories, values = train()
    values = [int(x) for x in values]
    jsonstring = '{"labels": ' + json.dumps(categories) + ', "datasets": [ {"data": ' + json.dumps(values) +'} ] }'
    return jsonstring