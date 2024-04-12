# Visualizing Unceratinty of a Machine Learning Model

## Abstract
<div style="text-align: justify"> 
The widespread utilization of machine learning (ML) models in healthcare presents challenges regarding interpretability and trust. This project introduces a machine learning explanation interface tailored for medical professionals. While healthcare has become an attractive arena for machine learning due to its widespread adoption in various sectors, the complexity and opaque nature of machine learning hinders doctors from accurately interpreting and trusting its outputs within healthcare settings. Patients with diseases like diabetes, necessitating regular monitoring of parameters such as sugar and blood pressure levels, would greatly benefit from doctors giving immediate feedback and being able to provide timely comments. We have developed an interactive interface specifically for doctors seeking to utilize machine learning in diabetes diagnosis. This interface aims to enhance trust and decision-making by offering clear visualizations of Predicted outcomes, Uncertainty, and Feature importance. It presents the model's diabetes risk prediction along with visual cues indicating the confidence level associated with the prediction, aiding doctors in comprehending potential limitations and relationships within variables. By providing decision-makers with transparent visual representations of results, our visualization techniques empower them to make more informed decisions, thereby facilitating better risk assessment.


### To Run:
1. Make sure you have npm installed along with the requirements in the "requirements.txt"  
  
2. cd to the "/Backend" folder and run
```
python -m flask --app base.py run
```

3. In another terminal cd to "/Frontend", run `npm install`  

4. Then finally run the below line in the terminal.  
```
npm run dev
```

5. Access the website on `http://localhost:5173/`

</div>