import React, { useState } from 'react';

// Updated mock data with new views count, images, and dates
const mockReels = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Mock Reel ${i + 1}`,
  date: `17 ${['Jun', 'Jul', 'Aug', 'Sep', 'Oct'][i % 5]} 2024`,
  views: Math.floor(Math.random() * 500000) + 230000, // More than 230k views
  likes: Math.floor(Math.random() * 500),
  image: `https://www.instagram.com/thv/reel/Cxhp9FBPDi1/+${i + 1}`, // Placeholder image URL
}));

const mockPost = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Post ${i + 1}`,
  date: `17 ${['Jun', 'Jul', 'Aug', 'Sep', 'Oct'][i % 5]} 2024`,
  engagement: Math.floor(Math.random() * 1000),
  image: `https://via.placeholder.com/100x100/FF5733/FFFFFF?text=Post+${i + 1}`, // Placeholder image URL
}));

const mockPromotion = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `Promotion ${i + 1}`,
  date: `17 ${['Jun', 'Jul', 'Aug', 'Sep', 'Oct'][i % 5]} 2024`,
  budget: `$${Math.floor(Math.random() * 1000)}`,
  clicks: Math.floor(Math.random() * 500),
  image: `https://via.placeholder.com/100x100/FFC300/FFFFFF?text=Promo+${i + 1}`, // Placeholder image URL
}));

const Content = () => {
  const [activeTab, setActiveTab] = useState('Reels');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Reels':
        return (
          <div className="flex flex-col">
            <div className="flex space-x-4 text-center bg-gray-700 py-2 mb-2">
              <div className="w-20">
                <p className="text-sm text-gray-300">Date</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Views</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Likes</p>
              </div>
            </div>
            {mockReels.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-800 p-2 rounded-md mb-2">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-600">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">Add description</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="w-20">
                    <p>{item.date}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.views}K</p>
                  </div>
                  <div className="w-20">
                    <p>{item.likes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Post':
        return (
          <div className="flex flex-col">
            <div className="flex space-x-4 text-center bg-gray-700 py-2 mb-2">
              <div className="w-20">
                <p className="text-sm text-gray-300">Date</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Engagement</p>
              </div>
            </div>
            {mockPost.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-800 p-2 rounded-md mb-2">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-600">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">Social Media Post</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="w-20">
                    <p>{item.date}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.engagement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Promotion':
        return (
          <div className="flex flex-col">
            <div className="flex space-x-4 text-center bg-gray-700 py-2 mb-2">
              <div className="w-20">
                <p className="text-sm text-gray-300">Date</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Budget</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Clicks</p>
              </div>
            </div>
            {mockPromotion.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-800 p-2 rounded-md mb-2">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-600">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">Promotion</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="w-20">
                    <p>{item.date}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.budget}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.clicks}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-gray-100 rounded-md">
      <h1 className="text-2xl font-bold">Channel Content</h1>
      <div className="flex space-x-6 border-b border-gray-700 pb-2 mt-4">
        {['Reels', 'Post', 'Promotion'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-semibold pb-2 ${
              activeTab === tab ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default Content;
