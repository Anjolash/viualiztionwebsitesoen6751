import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    const options = {
    };
  
    return (
      <div className='PieChart'>
        <h2>Pie Chart</h2>
        <Pie data={data} options={options}/>
      </div>
    );
  };
  
  export default PieChart;