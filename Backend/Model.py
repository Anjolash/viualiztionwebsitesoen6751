import numpy as np
import pandas as pd
import matplotlib.pylab as plt
import seaborn as sns
from sklearn.preprocessing import QuantileTransformer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score, confusion_matrix


def getPieChartValues():
    y_test, y_pred = train()
    conf_matrix = confusion_matrix(y_test, y_pred)

    # Extracting TP, TN, FP, FN
    TN, FP, FN, TP = conf_matrix.ravel()
    categories = [ 'True Positive + True Negative','False Negative','False Positive',]
    values = [TP+TN, FN, FP]
    return categories, values
    
def train():
    df = pd.read_csv("assets/diabetes.csv")
    df = df.drop_duplicates() #dropping all the duplicate values in the dataset.
    df.isnull().sum() #provides the sum of all the null values, we can see below that this dataset has no null values. (all sum upto 0)
    
    df['Glucose']=df['Glucose'].replace(0,df['Glucose'].mean())
    df['BloodPressure']=df['BloodPressure'].replace(0,df['BloodPressure'].mean())
    df['SkinThickness']=df['SkinThickness'].replace(0,df['SkinThickness'].mean())
    df['Insulin']=df['Insulin'].replace(0,df['Insulin'].mean())
    df['BMI']=df['BMI'].replace(0,df['BMI'].mean())

    X = df.drop('Outcome', axis=1)  #the feature vector X
    y = df['Outcome']  #target/ground truth variable

    #datasplitting into train and test
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)

    classifier = GaussianNB()
    classifier.fit(X_train, y_train)
    y_pred = classifier.predict(X_test)
    correlation_matrix = df.corr()['Outcome'].drop('Outcome')
    features = correlation_matrix.index
    return y_test, y_pred