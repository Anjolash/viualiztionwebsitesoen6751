from flask import Flask, send_from_directory
from flask_cors import CORS
import json
from Model import getPieChartValues

app = Flask(__name__)




@app.route('/')
def hello():
    jsonstring = '{"Image": "placeholder1.png", "Q1": "Question one", "Q2": "Question two"}'
    return jsonstring

@app.route('/images/<path:filename>')
def get_image(filename):
    return send_from_directory('assets/img', filename)

@app.route('/runtrain')
def run_train():
    categories, values = getPieChartValues()
    values = [int(x) for x in values]
    jsonstring = '{"labels": ' + json.dumps(categories) + ', "datasets": [ {"label": "# of Predictions", "backgroundColor": ["rgba(75, 192, 192, 0.9)", "rgba(255, 99, 132, 0.9)", "rgba(255, 99, 132, 0.9)"], "data": ' + json.dumps(values) +'} ] }'
    return jsonstring