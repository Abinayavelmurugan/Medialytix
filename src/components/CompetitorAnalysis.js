import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CompetitorAnalysis = () => {
  // Example data for competitors and performance
  const competitors = [
    { name: 'Ronaldo', followers: 642+"M", views: 12000+"K", engagement: 85 },
    { name: 'Beyonce', followers: 341+"M", views: 11000+"k", engagement: 78 },
    { name: 'Virat Kohli', followers: 271+"M", views: 1000+"K", engagement: 72 },
  ];

  // Performance comparison data (you vs competitors)
  const performanceData = {
    labels: ['Your Profile', 'Competitor A', 'Competitor B', 'Competitor C'],
    datasets: [
      {
        label: 'Followers',
        data: [6000, 5000, 4500, 4000],
        backgroundColor: '#4caf50',
      },
      {
        label: 'Views',
        data: [15000, 12000, 11000, 10000],
        backgroundColor: '#ffeb3b',
      },
      {
        label: 'Engagement',
        data: [90, 85, 78, 72],
        backgroundColor: '#f44336',
      },
    ],
  };

  // Trends over time (example data)
  const trendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Your Followers Growth',
        data: [5000, 5200, 5400, 5800, 6000, 6200],
        borderColor: '#4caf50',
        fill: false,
      },
      {
        label: 'Competitor A Growth',
        data: [4800, 4900, 5100, 5300, 5500, 5700],
        borderColor: '#ffeb3b',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        titleColor: '#fff',
        bodyColor: '#fff',
      },
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Competitive Analysis</h1>

      {/* Competitors Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Competitors Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitors.map((competitor, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">{competitor.name}</h3>
              <div className="mt-4">
                <p className="text-white">Followers: {competitor.followers}</p>
                <p className="text-white">Views: {competitor.views}</p>
                <p className="text-white">Engagement: {competitor.engagement}%</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Performance Comparison</h2>
        <div className="w-full h-72">
          <Bar data={performanceData} options={chartOptions} />
        </div>
      </section>

      {/* Trends Analysis */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Trends Analysis</h2>
        <div className="w-full h-72">
          <Line data={trendsData} options={chartOptions} />
        </div>
      </section>

      {/* Engagement Metrics */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Engagement Metrics</h2>
        <div className="flex justify-between bg-gray-700 p-6 rounded-lg shadow-md">
          <div>
            <h3 className="text-xl text-white">Comments & Likes</h3>
            <p className="text-white">Track the number of comments, likes, and shares across different platforms.</p>
          </div>
          <div>
            <h3 className="text-xl text-white">Engagement Rate</h3>
            <p className="text-white">Measure how your content is performing compared to competitors.</p>
          </div>
        </div>
      </section>

      {/* Suggestions & Content Ideas */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Suggestions & Content Ideas</h2>
        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-white mb-4">Suggestions for Improvement</h3>
          <ul className="text-white">
            <li>- Focus on increasing engagement by responding to comments.</li>
            <li>- Experiment with different content types (e.g., short-form videos, polls, etc.).</li>
            <li>- Post during peak hours based on when competitors' posts get more engagement.</li>
            <li>- Diversify your topics to cover trending topics in your niche.</li>
          </ul>
        </div>

        <div className="bg-gray-700 p-6 mt-6 rounded-lg shadow-md">
          <h3 className="text-xl text-white mb-4">Content Ideas to Boost Engagement</h3>
          <ul className="text-white">
            <li>- Create a "Behind the Scenes" series to show your process and day-to-day activities.</li>
            <li>- Run a poll or quiz related to trending topics in your niche.</li>
            <li>- Host a live Q&A session to engage with your followers directly.</li>
            <li>- Share user-generated content to build community and credibility.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CompetitorAnalysis;
