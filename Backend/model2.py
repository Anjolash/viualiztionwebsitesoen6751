import numpy as np

def run_model():
    print("Running model...")
    model_unceratinty = 0.1
    print("Model uncertainty: ", model_unceratinty)
    return model_unceratinty


def diff_attributes():
    attributes_dict = {}
    print("Different attributes...")

    attributes = ["Pregnancies", "Glucose", "BloodPressure", "SkinThickness","Insulin", "BMI", "DiabetesPedigreeFunction", "Age"]

    attributes_length = len(attributes)

    random_matrix = np.random.rand(attributes_length, attributes_length)
    matrix = random_matrix.tolist()

    return matrix, attributes_length