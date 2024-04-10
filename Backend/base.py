from flask import Flask, send_from_directory, request
from flask_cors import CORS
import json
import numpy as np
from Model import getPieChartValues, prepare3DBarData
from Model import train, train_simulation
import numpy as np


app = Flask(__name__)

CORS(app)



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

@app.route('/predict', methods=['POST'])
def prediction_outcome():
    try:
        _, _, classifier = train()
        data = request.json
        
        # Extract required features
        glucose = float(data['glucose'])
        blood_pressure = float(data['bloodPressure'])
        skin_thickness = float(data['skinThickness'])
        insulin = float(data['insulin'])
        bmi = float(data['bmi'])
        DiabetesPedigreeFunction = float(data['diabetesPedigreeFunction'])
        Age = float(data['age'])
        pregnancies = float(data['pregnancies'])
        X_input = np.array([[pregnancies,glucose,blood_pressure,skin_thickness,insulin,bmi,DiabetesPedigreeFunction,Age]])

        classification = classifier.predict(X_input)
        return str(classification)  # Convert classification to string for response
    except Exception as e:
        return str(e), 500  # Return error message and HTTP status code 500 (Internal Server Error)

@app.route('/3dbar')
def plot_data():
    # Assume `data_array` is available, or retrieve it accordingly
    # You need to adjust how `data_array` is obtained, here's an example placeholder:
    data_array = np.random.rand(5, 5)
    
    X, Y = np.meshgrid(range(data_array.shape[1]), range(data_array.shape[0]))
    Z = np.zeros_like(X)
    dx = np.ones_like(X) * 0.1
    dy = np.ones_like(Y) * 0.1
    dz = data_array.flatten()

    # Flatten X, Y, Z for plotting
    X_flat, Y_flat, Z_flat = X.flatten(), Y.flatten(), Z.flatten()

    plotData = prepare3DBarData(X_flat, Y_flat, Z_flat, dx.flatten(), dy.flatten(), dz)
    return jsonify(plotData)


@app.route('/simulation', methods=['POST'])
def run_simulation():
    data = request.json
    mean_accuracy, std_dev_accuracy, mean_confidence, std_dev_confidence = train_simulation(data['features'])
    