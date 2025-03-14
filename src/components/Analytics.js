// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Analytics = () => {
//   const [activeTab, setActiveTab] = useState('Overview');

//   // Sample data for the live counts and Instagram analysis
//   const liveCounts = {
//     views: 2500,
//     subscribers: 150,
//     watchTime: 120, // hours
//   };

//   const instagramData = {
//     gender: {
//       male: 60,
//       female: 40,
//     },
//     ageGroup: {
//       '18-24': 50,
//       '25-34': 30,
//       '35-44': 10,
//       '45+': 10,
//     },
//     followerProgress: 75, // Percentage of followers who are engaged
//   };

//   const chartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Views',
//         data: [50, 200, 300, 150, 400, 250, 500, 700, 600, 800, 750, 900],
//         borderColor: '#4F46E5',
//         backgroundColor: 'rgba(79, 70, 229, 0.2)',
//         fill: true,
//         tension: 0.3,
//       },
//     ],
//   };

//   const viewsData = {
//     labels: ['7 Oct', '12 Oct', '16 Oct', '21 Oct', '25 Oct', '30 Oct', '3 Nov'],
//     datasets: [
//       {
//         label: 'Views',
//         data: [0, 1, 2, 1, 3, 0, 0],
//         borderColor: '#4F46E5',
//         backgroundColor: 'rgba(79, 70, 229, 0.2)',
//         fill: true,
//         tension: 0.3,
//       },
//     ],
//   };

//   const watchTimeData = {
//     labels: ['7 Oct', '12 Oct', '16 Oct', '21 Oct', '25 Oct', '30 Oct', '3 Nov'],
//     datasets: [
//       {
//         label: 'Watch time (hours)',
//         data: [0, 0.5, 1, 0.8, 1.2, 0.5, 0],
//         borderColor: '#34D399',
//         backgroundColor: 'rgba(52, 211, 153, 0.2)',
//         fill: true,
//         tension: 0.3,
//       },
//     ],
//   };

//   const subscribersData = {
//     labels: ['7 Oct', '12 Oct', '16 Oct', '21 Oct', '25 Oct', '30 Oct', '3 Nov'],
//     datasets: [
//       {
//         label: 'Subscribers',
//         data: [0, 1, 1, 1, 2, 1, 0],
//         borderColor: '#F87171',
//         backgroundColor: 'rgba(248, 113, 113, 0.2)',
//         fill: true,
//         tension: 0.3,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: 'top', labels: { color: '#FFFFFF' } },
//       title: { display: false },
//     },
//     scales: {
//       x: { ticks: { color: '#FFFFFF' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
//       y: { ticks: { color: '#FFFFFF' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
//     },
//   };

//   const renderOverviewContent = () => (
//     <div className="flex flex-col space-y-6 mt-4">
//       <h2 className="text-xl font-semibold text-center">
//         Your channel didn't get any views in the last 28 days
//       </h2>
//       <div className="flex justify-around bg-gray-800 p-4 rounded-md shadow-md">
//         <div className="text-center">
//           <h3 className="text-lg font-semibold">Views</h3>
//           <p className="text-2xl">{liveCounts.views}</p>
//         </div>
//         <div className="text-center">
//           <h3 className="text-lg font-semibold">Watch time (hours)</h3>
//           <p className="text-2xl">{liveCounts.watchTime}</p>
//         </div>
//         <div className="text-center">
//           <h3 className="text-lg font-semibold">Subscribers</h3>
//           <p className="text-2xl">{liveCounts.subscribers}</p>
//         </div>
//       </div>
//       <div className="mt-6 p-4 bg-gray-800 rounded-md shadow-md">
//         <h3 className="text-lg font-semibold text-center">Monthly Channel Growth</h3>
//         <Line data={chartData} options={chartOptions} />
//       </div>
//       <div className="flex space-x-4 justify-between mt-6">
//         <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md">
//           <h3 className="text-center text-sm font-semibold mb-2">Views</h3>
//           <Line data={viewsData} options={chartOptions} />
//         </div>

//         <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md">
//           <h3 className="text-center text-sm font-semibold mb-2">Watch Time (hours)</h3>
//           <Line data={watchTimeData} options={chartOptions} />
//         </div>

//         <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md">
//           <h3 className="text-center text-sm font-semibold mb-2">Subscribers</h3>
//           <Line data={subscribersData} options={chartOptions} />
//         </div>
//       </div>
//     </div>
//   );

//   const renderInstagramAnalytics = () => (
//     <div className="flex flex-col space-y-6 mt-4 bg-gray-800 p-4 rounded-md">
//       <h2 className="text-xl font-semibold">Instagram Insights</h2>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <h3 className="text-lg font-semibold">Gender</h3>
//           <div className="space-y-2">
//             <div>Male: {instagramData.gender.male}%</div>
//             <div>Female: {instagramData.gender.female}%</div>
//           </div>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">Age Group</h3>
//           <div className="space-y-2">
//             <div>18-24: {instagramData.ageGroup['18-24']}%</div>
//             <div>25-34: {instagramData.ageGroup['25-34']}%</div>
//             <div>35-44: {instagramData.ageGroup['35-44']}%</div>
//             <div>45+: {instagramData.ageGroup['45+']}%</div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold">Follower Progress</h3>
//         <p>Follower Engagement: {instagramData.followerProgress}%</p>
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Overview':
//         return renderOverviewContent();
//       case 'Content':
//         return <div className="p-4 bg-gray-800 rounded-md">Content data here</div>;
//       case 'Audience':
//         return renderInstagramAnalytics();
//       case 'Inspiration':
//         return <div className="p-4 bg-gray-800 rounded-md">Inspiration data here</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex p-4 bg-gray-900 text-gray-100 rounded-md">
//       {/* Main Content */}
//       <div className="flex-1 pr-4">
//         <h1 className="text-2xl font-bold">Channel Analytics</h1>
//         <br></br>
//         <div className="flex space-x-4 border-b border-gray-700 pb-2 mb-4">
//           {['Overview', 'Content', 'Audience', 'Inspiration'].map((tab) => (
//             <button
//               key={tab}
//               className={`text-lg font-semibold ${activeTab === tab ? 'text-indigo-500' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         {renderContent()}
//       </div>
//       {/* Sidebar - Live Count */}
//       <div className="w-1/3 bg-gray-800 p-6 rounded-md shadow-md">
//         <h3 className="text-lg font-semibold mb-4">Live Count</h3>
//         <div className="text-center mb-6">
//           <p className="text-xl font-semibold">Views: {liveCounts.views}</p>
//           <p className="text-xl font-semibold">Subscribers: {liveCounts.subscribers}</p>
//           <p className="text-xl font-semibold">Watch Time: {liveCounts.watchTime} hours</p>
//         </div>
//         {renderInstagramAnalytics()}
//       </div>
//     </div>
//   );
// };

// export default Analytics;


// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Analytics = () => {
//   const [activeTab, setActiveTab] = useState('Overview');

//   // Sample data for the live counts and Instagram analysis
//   const liveCounts = {
//     views: 2500,
//     subscribers: 150,
//     watchTime: 120, // hours
//   };

//   const instagramData = {
//     gender: {
//       male: 60,
//       female: 40,
//     },
//     ageGroup: {
//       '18-24': 50,
//       '25-34': 30,
//       '35-44': 10,
//       '45+': 10,
//     },
//     followerProgress: 75, // Percentage of followers who are engaged
//   };

//   const chartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Views',
//         data: [50, 200, 300, 150, 400, 250, 500, 700, 600, 800, 750, 900],
//         borderColor: '#4F46E5',
//         backgroundColor: 'rgba(79, 70, 229, 0.2)',
//         fill: true,
//         tension: 0.3,
//       },
//     ],
//   };

  // const viewsData = {
  //   labels: ['7 Oct', '12 Oct', '16 Oct', '21 Oct', '25 Oct', '30 Oct', '3 Nov'],
  //   datasets: [
  //     {
  //       label: 'Views',
  //       data: [0, 1, 2, 1, 3, 0, 0],
  //       borderColor: '#4F46E5',
  //       backgroundColor: 'rgba(79, 70, 229, 0.2)',
  //       fill: true,
  //       tension: 0.3,
  //     },
  //   ],
  // };

  // const watchTimeData = {
  //   labels: ['7 Oct', '12 Oct', '16 Oct', '21 Oct', '25 Oct', '30 Oct', '3 Nov'],
  //   datasets: [
  //     {
  //       label: 'Watch time (hours)',
  //       data: [0, 0.5, 1, 0.8, 1.2, 0.5, 0],
  //       borderColor: '#34D399',
  //       backgroundColor: 'rgba(52, 211, 153, 0.2)',
  //       fill: true,
  //       tension: 0.3,
  //     },
  //   ],
  // };

  // const subscribersData = {
  //   labels: ['7 Oct', '12 Oct', '16 Oct', '21 Oct', '25 Oct', '30 Oct', '3 Nov'],
  //   datasets: [
  //     {
  //       label: 'Subscribers',
  //       data: [0, 1, 1, 1, 2, 1, 0],
  //       borderColor: '#F87171',
  //       backgroundColor: 'rgba(248, 113, 113, 0.2)',
  //       fill: true,
  //       tension: 0.3,
  //     },
  //   ],
  // };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: 'top', labels: { color: '#FFFFFF' } },
//       title: { display: false },
//     },
//     scales: {
//       x: { ticks: { color: '#FFFFFF' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
//       y: { ticks: { color: '#FFFFFF' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
//     },
//   };

//   const renderOverviewContent = () => (
//     <div className="flex flex-col space-y-6 mt-4">
//       <h2 className="text-xl font-semibold text-center">
//         Your channel didn't get any views in the last 28 days
//       </h2>
//       <div className="flex justify-around bg-gray-800 p-4 rounded-md shadow-md">
//         <div className="text-center">
//           <h3 className="text-lg font-semibold">Views</h3>
//           <p className="text-2xl">{liveCounts.views}</p>
//         </div>
//         <div className="text-center">
//           <h3 className="text-lg font-semibold">Watch time (hours)</h3>
//           <p className="text-2xl">{liveCounts.watchTime}</p>
//         </div>
//         <div className="text-center">
//           <h3 className="text-lg font-semibold">Subscribers</h3>
//           <p className="text-2xl">{liveCounts.subscribers}</p>
//         </div>
//       </div>
//       <div className="mt-6 p-4 bg-gray-800 rounded-md shadow-md">
//         <h3 className="text-lg font-semibold text-center">Monthly Channel Growth</h3>
//         <Line data={chartData} options={chartOptions} />
//       </div>
//       <div className="flex space-x-4 justify-between mt-6">
//         <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md">
//           <h3 className="text-center text-sm font-semibold mb-2">Views</h3>
//           <Line data={viewsData} options={chartOptions} />
//         </div>

//         <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md">
//           <h3 className="text-center text-sm font-semibold mb-2">Watch Time (hours)</h3>
//           <Line data={watchTimeData} options={chartOptions} />
//         </div>

//         <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md">
//           <h3 className="text-center text-sm font-semibold mb-2">Subscribers</h3>
//           <Line data={subscribersData} options={chartOptions} />
//         </div>
//       </div>
//     </div>
//   );

//   const renderInstagramAnalytics = () => (
//     <div className="flex flex-col space-y-6 mt-4 bg-gray-800 p-4 rounded-md">
//       <h2 className="text-xl font-semibold">Instagram Insights</h2>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <h3 className="text-lg font-semibold">Gender</h3>
//           <div className="space-y-2">
//             <div>Male: {instagramData.gender.male}%</div>
//             <div>Female: {instagramData.gender.female}%</div>
//           </div>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold">Age Group</h3>
//           <div className="space-y-2">
//             <div>18-24: {instagramData.ageGroup['18-24']}%</div>
//             <div>25-34: {instagramData.ageGroup['25-34']}%</div>
//             <div>35-44: {instagramData.ageGroup['35-44']}%</div>
//             <div>45+: {instagramData.ageGroup['45+']}%</div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold">Follower Progress</h3>
//         <p>Follower Engagement: {instagramData.followerProgress}%</p>
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Overview':
//         return renderOverviewContent();
//       case 'Content':
//         return <div className="p-4 bg-gray-800 rounded-md">Content data here</div>;
//       case 'Audience':
//         return renderInstagramAnalytics();
//       case 'Inspiration':
//         return <div className="p-4 bg-gray-800 rounded-md">Inspiration data here</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex p-4 bg-gray-900 text-gray-100 rounded-md">
//       {/* Main Content */}
//       <div className="flex-1 pr-4">
//         <h1 className="text-2xl font-bold">Channel Analytics</h1>
//         <br></br>
//         <div className="flex space-x-4 border-b border-gray-700 pb-2 mb-4">
//           {['Overview', 'Content', 'Audience', 'Inspiration'].map((tab) => (
//             <button
//               key={tab}
//               className={`text-lg font-semibold ${activeTab === tab ? 'text-indigo-500' : ''}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default Analytics;

import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import DownloadButton from './DownloadButton';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// Main chart data for monthly growth
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Views',
      data: [50, 200, 300, 150, 400, 250, 500, 700, 600, 800, 750, 900],
      borderColor: '#4F46E5',
      backgroundColor: 'rgba(79, 70, 229, 0.2)',
      fill: true,
      tension: 0.3,
    },
  ],
};

// Chart options for customization
const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top', labels: { color: '#FFFFFF' } },
    title: { display: false },
  },
  scales: {
    x: { ticks: { color: '#FFFFFF' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
    y: { ticks: { color: '#FFFFFF' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
  },
};


const Analytics = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const stackedOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#FFFFFF' } },
      title: { display: true, text: 'User Peak Active Times' },
    },
    scales: {
      x: { stacked: true, ticks: { color: '#FFFFFF' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
      y: { stacked: true, ticks: { color: '#FFFFFF' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
    },
  };


  // Live count state variables
  const [liveCounts, setLiveCounts] = useState({
    views: 2500+"K",
    subscribers: 65.9+"M",
    watchTime: 1200+"K", // hours
  });
  const viewsData = {
    labels: ['7 Oct', '12 Oct', '16 Oct', '21 Oct', '25 Oct', '30 Oct', '3 Nov'],
    datasets: [
      {
        label: 'Views',
        data: [0, 1, 2, 1, 3, 0, 0],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const watchTimeData = {
    labels: ['7 Oct', '12 Oct', '16 Oct', '21 Oct', '25 Oct', '30 Oct', '3 Nov'],
    datasets: [
      {
        label: 'Watch time (hours)',
        data: [0, 0.5, 1, 0.8, 1.2, 0.5, 0],
        borderColor: '#34D399',
        backgroundColor: 'rgba(52, 211, 153, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const subscribersData = {
    labels: ['7 Oct', '12 Oct', '16 Oct', '21 Oct', '25 Oct', '30 Oct', '3 Nov'],
    datasets: [
      {
        label: 'Subscribers',
        data: [0, 1, 1, 1, 2, 1, 0],
        borderColor: '#F87171',
        backgroundColor: 'rgba(248, 113, 113, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };


  // Instagram gender and age group data with dynamic updates
  const [instagramData, setInstagramData] = useState({
    gender: { male: 60, female: 40 },
    ageGroup: { '18-24': 50, '25-34': 30, '35-44': 10, '45+': 10 },
  });

  // Set intervals to update live counts and Instagram data
  useEffect(() => {
    const liveCountInterval = setInterval(() => {
      setLiveCounts((prevCounts) => ({
        views: prevCounts.views + Math.floor(Math.random() * 10),
        subscribers: prevCounts.subscribers + Math.floor(Math.random() * 5),
        watchTime: prevCounts.watchTime + Math.floor(Math.random() * 2),
      }));
    }, 100000);

    const instagramDataInterval = setInterval(() => {
      setInstagramData({
        gender: { male: Math.floor(Math.random() * 100), female: Math.floor(Math.random() * 100) },
        ageGroup: {
          '18-24': Math.floor(Math.random() * 50),
          '25-34': Math.floor(Math.random() * 30),
          '35-44': Math.floor(Math.random() * 10),
          '45+': Math.floor(Math.random() * 10),
        },
      });
    }, 30000);

    return () => {
      clearInterval(liveCountInterval);
      clearInterval(instagramDataInterval);
    };
  }, []);

  // Chart data for the age group analysis (stacked bar)
  const ageGroupData = {
    labels: Object.keys(instagramData.ageGroup),
    datasets: [
      {
        label: 'Videos Watched',
        data: Object.values(instagramData.ageGroup),
        backgroundColor: ['#4F46E5', '#34D399', '#F87171', '#FBBF24'],
      },
    ],
  };
  const contentReachData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], // Labels for the x-axis
    datasets: [
      {
        label: 'Content Reach', // Label for the dataset
        data: [1200, 1300, 1150, 1400, 1500, 1450, 1600], // Reach data for each day
        fill: false, // Disable the area fill under the line
        borderColor: '#4CAF50', // Color of the line
        tension: 0.1, // Smoothness of the line
        pointBackgroundColor: '#4CAF50', // Color of data points
      },
    ],
  };
  



  const renderOverviewContent = () => (
    <div className="flex flex-col space-y-6 mt-4 relative">
      <h2 className="text-xl font-semibold text-center">
        Your channel didn't get any views in the last 28 days
      </h2>
     
      <div className="flex justify-around bg-gray-800 p-4 rounded-md shadow-md">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Views</h3>
          <p className="text-2xl">{liveCounts.views}</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Watch time (hours)</h3>
          <p className="text-2xl">{liveCounts.watchTime}</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Subscribers</h3>
          <p className="text-2xl">{liveCounts.subscribers}</p>
        </div>

       

        
      </div>
  
      {/* Content Reach Graph (fits in the Live Counts section space) */}
      
  
      <div className="mt-6 p-4 bg-gray-800 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-center">Monthly Channel Growth</h3>
        <Line data={chartData} options={chartOptions} />
      </div>
  
      <div className="flex space-x-4 justify-between mt-6">
        <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md">
          <h3 className="text-center text-sm font-semibold mb-2">Views</h3>
          <Line data={viewsData} options={chartOptions} />
        </div>
  
        <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md">
          <h3 className="text-center text-sm font-semibold mb-2">Watch Time (hours)</h3>
          <Line data={watchTimeData} options={chartOptions} />
        </div>
  
        <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md">
          <h3 className="text-center text-sm font-semibold mb-2">Subscribers</h3>
          <Line data={subscribersData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
  
  const renderInstagramAnalytics = () => {
    // Example analysis based on the data (you can replace with real logic)
    const ageGroupAnalysis = "The majority of your audience is between 25-34 years old, followed closely by 18-24. This shows that your content resonates well with young adults.";
    const genderAnalysis = "Your audience is split fairly evenly between male and female users, which suggests that your content is appealing to a broad demographic.";
    
    // Suggest best posting times (based on peak active times)
    const bestPostingTimes = "Based on peak active times, the best times to post are between 10 AM - 12 PM and 7 PM - 9 PM. These time windows show the highest engagement from your audience.";
  
    return (
      <div className="flex flex-col space-y-6 mt-4 bg-gray-800 p-4 rounded-md">
        <h2 className="text-xl font-semibold">Instagram Insights</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Gender</h3>
            <Bar data={ageGroupData} options={{ plugins: { legend: { display: false } }, indexAxis: 'y' }} />
            <p className="mt-2 text-sm text-gray-300">{genderAnalysis}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Age Group</h3>
            <Bar data={ageGroupData} options={{ plugins: { legend: { display: false } }, indexAxis: 'y' }} />
            <p className="mt-2 text-sm text-gray-300">{ageGroupAnalysis}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-center">User Peak Active Times</h3>
          <Bar data={peakActiveTimeData} options={stackedOptions} />
          <p className="mt-2 text-sm text-gray-300">{bestPostingTimes}</p>
        </div>
      </div>
    );
  };
  

   // User peak active time data
   const peakActiveTimeData = {
    labels: ['12 AM', '3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        label: 'Male',
        data: [5, 8, 10, 15, 20, 18, 12, 8],
        backgroundColor: '#4F46E5',
      },
      {
        label: 'Female',
        data: [6, 9, 12, 18, 22, 16, 10, 7],
        backgroundColor: '#F87171',
      },
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return renderOverviewContent();
      case 'Audience':
        return renderInstagramAnalytics();
      default:
        return null;
    }
  };

  return (
    <div className="flex p-4 bg-gray-900 text-gray-100 rounded-md">
      <div className="flex-1 pr-4">
        <h1 className="text-2xl font-bold">Channel Analytics</h1>
        <br />
        <div className="flex space-x-4 border-b border-gray-700 pb-2 mb-4">
          {['Overview', 'Audience'].map((tab) => (
            <button
              key={tab}
              className={`text-lg font-semibold ${activeTab === tab ? 'text-indigo-500' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderContent()}
      </div>
     
      {/* Live Counts Section */}
      <div className="w-1/4 p-4 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Live Counts</h2>
        <div className="mt-4">
          <p>Views: {liveCounts.views}</p>
          <p>Subscribers: {liveCounts.subscribers}</p>
          <p>Watch Time: {liveCounts.watchTime} hours</p>
        </div>
        <br/>
        <br/>
        <br/>

        <div className="mt-6 p-4 bg-gray-800 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-center">Content Reach</h3>
        <Line data={contentReachData} options={chartOptions} />

        <div className="absolute top-4 right-4"> {/* Position the button */}
      <DownloadButton />
    </div>
      </div>

      </div>
       

     
    </div>
    

    

    
  );
};

export default Analytics;












