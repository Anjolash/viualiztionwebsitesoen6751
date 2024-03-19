import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const BarGraph = ({ data }) => {
  const options = {
    plugins: {
        legend: {
          display: false, // Set display to false to hide the legend
        },
      },
  };

  return (
    <div className='BarGraph'>
      <h2>Bar Graph</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;