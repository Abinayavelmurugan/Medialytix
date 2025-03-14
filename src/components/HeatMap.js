// src/components/Heatmap.js
import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const HeatMap = () => {
  useEffect(() => {
    const ctx = document.getElementById('heatmapCanvas').getContext('2d');

    // Example dataset for heatmap
    const dataPoints = [
      { x: 0, y: 0, v: 5 },
      { x: 1, y: 0, v: 10 },
      { x: 2, y: 0, v: 15 },
      { x: 0, y: 1, v: 20 },
      { x: 1, y: 1, v: 25 },
      { x: 2, y: 1, v: 30 },
      { x: 0, y: 2, v: 35 },
      { x: 1, y: 2, v: 40 },
      { x: 2, y: 2, v: 45 },
    ];

    const backgroundColor = (value) => {
      const alpha = value / 50; // Scale the alpha value
      return `rgba(255, 0, 0, ${alpha})`; // Red color with varying alpha
    };

    const scatterData = {
      datasets: [{
        label: 'Heatmap Data',
        data: dataPoints.map(({ x, y, v }) => ({
          x,
          y,
          r: v * 2, // Circle radius based on value
          backgroundColor: backgroundColor(v),
        })),
      }],
    };

    new Chart(ctx, {
      type: 'scatter',
      data: scatterData,
      options: {
        scales: {
          x: { type: 'linear', position: 'bottom', title: { display: true, text: 'X-axis' } },
          y: { type: 'linear', position: 'left', title: { display: true, text: 'Y-axis' } },
        },
        plugins: {
          legend: { display: true },
        },
      },
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <canvas id="heatmapCanvas" width="400" height="400"></canvas>
    </div>
  );
};

export default HeatMap;
