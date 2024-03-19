import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
  );
const BarGraph = ({ data }) => {
  const options = {
    scales: {
        x: {
          type: 'category', // Set type to 'category' for the x-axis
        },
      },
  };

  return (
    <div>
      <h2>Bar Graph</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;