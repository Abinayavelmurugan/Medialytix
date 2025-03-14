// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBarChart, AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const DashboardContent = () => {

 
  // State for dynamic data
  const [data, setData] = useState({
    followers: 65.9+"M",
    likes: 8500+"K",
    engagementRate: 7.9,
    views: 5000+"K",
    comments: 300,
  });

  // Function to simulate data updates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => ({
        followers: prevData.followers + Math.floor(Math.random() * 50),
        likes: prevData.likes + Math.floor(Math.random() * 20),
        engagementRate: parseFloat(
          prevData.engagementRate + (Math.random() * 0.3 - 0.1)
        ).toFixed(2),
        views: prevData.views + Math.floor(Math.random() * 100),
        comments: prevData.comments + Math.floor(Math.random() * 10),
      }));
    }, 300000); // 30 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex-1 bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 - Followers */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <AiOutlineUser className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold">Followers</h2>
          <p className="text-2xl font-bold mt-2">{data.followers.toLocaleString()}</p>
          <p className="text-green-500 mt-1">+3.4%</p>
        </div>

        {/* Card 2 - Likes */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <AiOutlineHeart className="text-5xl text-pink-500 mb-4" />
          <h2 className="text-xl font-semibold">Likes</h2>
          <p className="text-2xl font-bold mt-2">{data.likes.toLocaleString()}</p>
          <p className="text-green-500 mt-1">+2.7%</p>
        </div>

        {/* Card 3 - Engagement Rate */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <AiOutlineBarChart className="text-5xl text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold">Engagement Rate</h2>
          <p className="text-2xl font-bold mt-2">{data.engagementRate}%</p>
          <p className="text-green-500 mt-1">+1.5%</p>
        </div>
      </div>

      <br />
      <br />
      <h2 className="text-3xl font-semibold mb-6">Channel Dashboard</h2>
      <div className="flex gap-6">
        {/* Analytics Summary */}
        <div className="bg-gray-800 p-6 rounded-lg w-1/3">
          <h3 className="text-xl font-semibold mb-4">Channel Analytics</h3>
          <p>Current followers: {data.followers.toLocaleString()}</p>
          <div className="mt-4">
            <h4 className="font-semibold">Summary (Last 28 days)</h4>
            <p>Views: {data.views.toLocaleString()}</p>
            <p>Likes: {data.likes.toLocaleString()}</p>
            <p>Comments: {data.comments}</p>
          </div>
          <button className="bg-blue-600 mt-4 px-4 py-2 rounded">
            <Link to="/analytics" className="text-white">
              View Analytics
            </Link>
          </button>
        </div>

        {/* Upload Section */}
        <div className="bg-gray-800 p-6 rounded-lg w-1/3 flex flex-col items-center">
          <img 
            src="https://img.icons8.com/ios-filled/100/ffffff/upload.png" 
            alt="Upload Icon" 
            className="mb-4" 
          />
          <p>Want to see metrics on your recent post? Upload to get started.</p>
          <button className="bg-blue-600 mt-4 px-4 py-2 rounded">Upload Post</button>
        </div>

        {/* Insights */}
        <div className="bg-gray-800 p-6 rounded-lg w-1/3">
          <h3 className="text-xl font-semibold mb-4">Creator Insider</h3>
          <div className="bg-gray-700 p-4 rounded mb-2">
            <p>This week on Instagram</p>
            <p className="text-sm mt-2">Updates on Instagram tools and more.</p>
            <button className="text-blue-400 mt-2">Watch on Instagram</button>
          </div>
          {/* Video Thumbnail */}
          <div className="bg-gray-700 p-4 rounded mt-4 flex items-center">
            <img
              src="https://img.freepik.com/free-vector/workflow-infographic_24908-59260.jpg?t=st=1730787950~exp=1730791550~hmac=ec10a5a8fade26e3a1e31899c4bf75e6569a3bbf6e0d02fb5064df2af3f76df3&w=740"
              alt="Insight Video Thumbnail"
              className="w-24 h-16 rounded-md mr-4 object-cover"
            />
            <div>
              <p className="font-semibold">Creator Tips: Growing Engagement</p>
              <button className="text-blue-400 mt-2">Watch Video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
