// TopViewedVideos.js
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';

const TopViewedVideos = () => {
  // Sample video data with random content
  const videos = [
    {
      title: 'Mastering Instagram Reels for Growth',
      views: '2.3M',
      likes: '120K',
      comments: '15K',
      shares: '3.1K',
      thumbnail: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxpZ2h0c3xlbnwwfHx8fDE2MzUxNTk1NDk&ixlib=rb-1.2.1&q=80&w=400',
      description: 'Learn how to leverage Instagram Reels to boost your follower growth and engagement.',
      audienceGrowth: '35% increase over the last month',
      likeData: '10K new likes in the past week',
    },
    {
      title: 'Effective Hashtag Strategies for 2024',
      views: '1.8M',
      likes: '98K',
      comments: '12K',
      shares: '2.5K',
      thumbnail: 'https://images.unsplash.com/photo-1494883759339-0b042055a4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGhhc2h0YWd8ZW58MHx8fHwxNjM1MTU5NjAy&ixlib=rb-1.2.1&q=80&w=400',
      description: 'Discover the latest hashtag trends and techniques to increase post visibility and reach a wider audience.',
      audienceGrowth: '25% growth in reach from hashtag optimization',
      likeData: '7K new likes in the past week',
    },
    // ... other video objects
];


  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-200 mb-4">Top Viewed Videos</h2>
      <div className="space-y-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200 shadow-md cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-20 h-14 rounded-md mr-4 object-cover"
            />

            {/* Video Details */}
            <div className="flex-1">
              <h3 className="text-white text-sm font-semibold">{video.title}</h3>
              <div className="flex items-center text-gray-400 text-xs space-x-4 mt-1">
                {/* Views */}
                <div className="flex items-center space-x-1">
                  <AiOutlineEye className="text-lg" />
                  <span>{video.views} views</span>
                </div>
                {/* Likes */}
                <div className="flex items-center space-x-1">
                  <AiOutlineLike className="text-lg" />
                  <span>{video.likes} likes</span>
                </div>
                {/* Comments */}
                <div className="flex items-center space-x-1">
                  <AiOutlineComment className="text-lg" />
                  <span>{video.comments} comments</span>
                </div>
                {/* Shares */}
                <div className="flex items-center space-x-1">
                  <AiOutlineShareAlt className="text-lg" />
                  <span>{video.shares} shares</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="mt-8 p-4 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-white text-lg font-semibold">{selectedVideo.title} - Overview</h3>
          <p className="text-gray-400 mt-2">{selectedVideo.description}</p>
          <p className="text-gray-400 mt-2">Audience Growth: {selectedVideo.audienceGrowth}</p>
          <p className="text-gray-400 mt-2">Likes Data: {selectedVideo.likeData}</p>
          <button 
            className="mt-4 text-sm text-blue-400 underline"
            onClick={() => setSelectedVideo(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default TopViewedVideos;
