from flask import Flask, render_template, redirect, url_for, session, request
import shutil
import os
import secrets
import random
import json
from datetime import datetime, timedelta
from model2 import run_model, diff_attributes



app = Flask(__name__)
secret_key = secrets.token_hex(16)
app.config['SECRET_KEY'] = secret_key
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=60)
app.config['SESSION_REFRESH_EACH_REQUEST'] = False

@app.route('/')
def index():
    uncert = run_model()
    cert = 1 - uncert

    return render_template('index.html', uncert=uncert, cert=cert)

@app.route('/matrix')
def matrix():
    matrix, matrix_length = diff_attributes()
    return render_template('matrix.html', matrix=matrix, matrix_length=matrix_length)

@app.route('/matrix_varbal')
def matrix_varbal():
    matrix, matrix_length = diff_attributes()
    return render_template('matrix_varbal.html', matrix=matrix, matrix_length=matrix_length)


@app.route('/3d')
def matrix_3d():
    matrix, matrix_length = diff_attributes()
    return render_template('3d.html', matrix=matrix, matrix_length=matrix_length)



if __name__ == '__main__':
    app.run(debug=True)
