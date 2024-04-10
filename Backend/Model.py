import numpy as np
import pandas as pd
import matplotlib.pylab as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score, confusion_matrix
from tqdm import tqdm
import os


def getPieChartValues():
    y_test, y_pred, _ = train()
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

    classifier = GaussianNB()
    classifier.fit(X_train, y_train)
    y_pred = classifier.predict(X_test)
    correlation_matrix = df.corr()['Outcome'].drop('Outcome')
    features = correlation_matrix.index
    return y_test, y_pred, classifier


def train_simulation(arr):
    # Load the dataset, modify the file csv path  
    #############################
    diabetes_data = pd.read_csv("assets/diabetes.csv")
    ##############################
   
    # Separate features and target variable
    print (arr)
    X = diabetes_data[arr]
    y = diabetes_data['Outcome']

    # Perform Monte Carlo simulation
    num_simulations = 500
    accuracy_scores = []
    confidence_scores = []  # Store confidence scores

    # Use tqdm to add a progress bar
    for i in tqdm(range(num_simulations)):
        # Split data into train and test sets
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=i)

        # Train a Gaussian Naive Bayes classifier
        clf = GaussianNB()
        clf.fit(X_train, y_train)

        # Make predictions on the test set and get probabilities
        y_pred_proba = clf.predict_proba(X_test)

        # Extract confidence scores for positive class (1)
        confidence_scores.extend(y_pred_proba[:, 1])

        # Make predictions on the test set
        y_pred = clf.predict(X_test)

        # Calculate accuracy and store it
        accuracy = accuracy_score(y_test, y_pred)
        accuracy_scores.append(accuracy)

    # Calculate mean and standard deviation of accuracy scores
    mean_accuracy = np.mean(accuracy_scores)
    std_dev_accuracy = np.std(accuracy_scores)

    # Calculate mean and standard deviation of confidence scores
    mean_confidence = np.mean(confidence_scores)
    std_dev_confidence = np.std(confidence_scores)

    gradient(mean_confidence)
    bubble(mean_confidence)

    return mean_accuracy, std_dev_accuracy, mean_confidence, std_dev_confidence


def gradient(mean_confidence):
    
    gradiant = np.linspace(1,0,256)[None, :,None]
    fig, ax = plt.subplots(figsize = (6,1))
    ax.imshow(gradiant, aspect='auto',cmap= 'gray')
    ax.get_xaxis().set_visible(False)
    ax.get_yaxis().set_visible(False)

    gradiant_width = gradiant.shape[1]
    x_coordinate = (1 - mean_confidence) * gradiant_width
    ax.scatter(x_coordinate, 0, color = 'red',s=40)

    plt.tight_layout()


    save_path = "./assets"

    filename = "grad.png"
    full_path = os.path.join(save_path, filename)

    plt.savefig(full_path)



def bubble(mean_confidence):
    print(mean_confidence)
    color = 'forestgreen'

    fig, ax = plt.subplots(figsize=(5, 5))  
    fig.patch.set_facecolor('white')

    # Outer black bubble (for comparison)
    outer_circle = plt.Circle((0.5, 0.5), 0.5, color='black')
    ax.add_artist(outer_circle)

    # Inner colored bubble based on mean_confidence
    inner_circle = plt.Circle((0.5, 0.5), 0.5 * mean_confidence, color=color)
    ax.add_artist(inner_circle)

    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')  

    plt.tight_layout()

    save_path = "./assets"

    filename = "bubble.png"
    full_path = os.path.join(save_path, filename)

    plt.savefig(full_path)

    




def prepare3DBarData(X, Y, Z, dx, dy, dz, height=600, xlabel="X", ylabel="Y", zlabel="Z", initialCamera=None):
    options = {
        "width": "100%",
        "style": "bar",
        "showPerspective": True,
        "showGrid": True,
        "showShadow": False,
        "keepAspectRatio": True,
        "verticalRatio": 1.0,
        "height": str(height) + "px"
    }

    if initialCamera:
        options["cameraPosition"] = initialCamera

    data = []
    for x, y, z, dxi, dyi, dzi in zip(X, Y, Z, dx, dy, dz):
        data.append({"x": x + dxi / 2, "y": y + dyi / 2, "z": z + dzi})

    return {"data": data, "options": options}
