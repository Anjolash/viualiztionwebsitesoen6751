from flask import Flask, send_from_directory, request
from flask_cors import CORS
import json
from Model import getPieChartValues
from Model import train
import numpy as np


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
    categories, values, _ = getPieChartValues()
    values = [int(x) for x in values]
    jsonstring = '{"labels": ' + json.dumps(categories) + ', "datasets": [ {"label": "# of Predictions", "backgroundColor": ["rgba(75, 192, 192, 0.9)", "rgba(255, 99, 132, 0.9)", "rgba(255, 99, 132, 0.9)"], "data": ' + json.dumps(values) +'} ] }'
    return jsonstring

@app.route('/predict')
def prediction_outcome():
    _, _, classifier = train()
    data = request.json
    
    # Extract required features
    glucose = data['Glucose']
    blood_pressure = data['BloodPressure']
    skin_thickness = data['SkinThickness']
    insulin = data['Insulin']
    bmi = data['BMI']
    DiabetesPedigreeFunction = data['DiabetesPedigreeFunction']
    Age = data['Age']
    Outcome = data['Outcome']
    X_input = np.array([[glucose, blood_pressure, skin_thickness, insulin, bmi, DiabetesPedigreeFunction, Age, Outcome]])

    classification = classifier.predict(X_input)

    return classification