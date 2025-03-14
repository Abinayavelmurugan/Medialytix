import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
  import  {TabPanel} from 'react-tabs';

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SentimentAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overall');

  // Overall sentiment data
  const overallSentimentData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: [45, 25, 30],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      },
    ],
  };

  // Individual video sentiment data
  const videoData = [
    {
      id: 'video1',
      title: 'Post 1',
      totalComments: 20000,
      sentimentData: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [
          {
            data: [50, 30, 20],
            backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
          },
        ],
      },
      comments: {
        positive: ["Amazing video!", "Very insightful."],
        critical: ["Could have more details.", "Not very engaging."],
      },
    },
    {
      id: 'video2',
      title: 'Post 2',
      totalComments: 250076,
      sentimentData: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [
          {
            data: [60, 20, 20],
            backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
          },
        ],
      },
      comments: {
        positive: ["Very helpful examples.", "Thanks for sharing."],
        critical: ["Expected more depth.", "Pacing was too slow."],
      },
    },
    {
      id: 'video3',
      title: 'Post 3',
      totalComments: 20000,
      sentimentData: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [
          {
            data: [40, 40, 20],
            backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
          },
        ],
      },
      comments: {
        positive: ["Great content!", "Engaging video!"],
        critical: ["Too general.", "Content was repetitive."],
      },
    },
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { titleColor: '#fff', bodyColor: '#fff' },
      legend: { labels: { color: '#fff' } },
    },
    scales: {
      x: { ticks: { color: '#fff' } },
      y: { ticks: { color: '#fff' } },
    },
  };

  return (
    <div className="p-6 bg-gray-700 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Sentiment Analysis Dashboard</h1>

      {/* Tabs for navigation */}
      <div className="mb-6 flex justify-center">
        <button
          onClick={() => setActiveTab('overall')}
          className={`px-4 py-2 text-white rounded-t-lg ${
            activeTab === 'overall' ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          Overall Analysis
        </button>
        <button
          onClick={() => setActiveTab('individual')}
          className={`px-4 py-2 text-white rounded-t-lg ${
            activeTab === 'individual' ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          Post-by-Post Analysis
        </button>
        <button
          onClick={() => setActiveTab('insights')}
          className={`px-4 py-2 text-white rounded-t-lg ${
            activeTab === 'insights' ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          Additional Insights
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {activeTab === 'overall' && (
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Overall Sentiment Analysis</h2>
            <div className="flex items-center justify-center">
              <div className="w-1/2">
                <Pie data={overallSentimentData} options={chartOptions} />
              </div>
              <div className="w-1/2 pl-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Total Comments: 20000000</h3>
                <h3 className="text-lg font-semibold mb-4">Most Critical Comments:</h3>
                <ul className="list-disc pl-5">
                  {videoData.flatMap((video) => video.comments.critical).map((comment, index) => (
                    <li key={index} className="mb-2">{comment}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'individual' && (
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Post-by-Post Sentiment Analysis</h2>
            {videoData.map((video) => (
              <div key={video.id} className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                <div className="flex items-center justify-center">
                  <div className="w-1/2">
                    <Bar data={video.sentimentData} options={chartOptions} />
                  </div>
                  <div className="w-1/2 pl-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">Total Comments: {video.totalComments}</h3>
                    <h3 className="text-lg font-semibold mb-4">Most Critical Comments:</h3>
                    <ul className="list-disc pl-5">
                      {video.comments.critical.map((comment, index) => (
                        <li key={index} className="mb-2">{comment}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'insights' && (
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Additional Insights</h2>
            <p className="text-white mb-4">
              Discover trends and insights across the content, including user engagement, most liked posts, and high-impact comments. 
            </p>
         {/* Additional Insights Tab */}
         {/* Additional Insights Tab */}
<TabPanel>
  <section className="mb-10">
    <h2 className="text-2xl font-semibold text-white mb-4">Additional Insights</h2>
    <div className="text-white mb-6">
      {/* Most commented video - Positive and Negative analysis */}
      <p className="mb-4">
        <strong>Most Commented Video Analysis:</strong> Based on the total number of comments, "Post 2" has garnered the highest interaction, with a total of <strong>{videoData[1].totalComments}</strong> comments. Of these, <strong>{videoData[1].sentimentData.datasets[0].data[0]}%</strong> are positive, indicating strong approval from the audience, while <strong>{videoData[1].sentimentData.datasets[0].data[2]}%</strong> are negative, reflecting some critical feedback. The total comments on this post (over 250,000) suggest that this post generated significant conversation, making it a highly engaging piece of content.
      </p>
      <p className="mb-2">
        <strong>Positive Sentiment Breakdown:</strong> "Post 2" received a substantial amount of positive feedback, including comments such as "Very helpful examples" and "Thanks for sharing." This suggests that the content resonates well with the audience, particularly with posts that provide clear and actionable insights.
      </p>
      <p className="mb-2">
        <strong>Negative Sentiment Breakdown:</strong> Despite the positive reception, "Post 2" also received critical feedback like "Expected more depth" and "Pacing was too slow." These comments highlight an opportunity for improvement in content depth and pacing. Future videos could benefit from more detailed explanations and a faster, more engaging presentation style to minimize negative comments.
      </p>
      <p className="mb-2">
        <strong>Recommendation:</strong> Given the high volume of both positive and negative feedback, "Post 2" offers an opportunity for content optimization. Maintaining the engaging and helpful nature of the post, while addressing the critical comments regarding depth and pacing, could result in a more universally positive reception. For future posts, consider increasing the pacing and balancing the content depth to reduce negative sentiments and increase overall engagement.
      </p>

      {/* General Insights */}
      <p className="mb-2">
        <strong>Engagement Rate:</strong> Videos with higher positive sentiment, such as "Post 2" (60% positive sentiment), consistently outperform in engagement. Posts like "Post 1," with 50% positive sentiment, show a slightly lower engagement rate. These insights suggest that increasing the ratio of positive sentiment in posts could significantly improve the engagement rate, which averages around 65% for high-positive sentiment posts.
      </p>
      <p className="mb-2">
        <strong>Audience Behavior:</strong> Our analysis indicates that the majority of engagement occurs during the evening, with notable spikes on Mondays and Wednesdays. For example, "Post 2," which had its highest positive feedback on Monday, gained a substantial boost in comments (250,000+). Scheduling posts around these peak times could further increase audience interaction.
      </p>
      <p className="mb-2">
        <strong>Sentiment Trends:</strong> Educational content, such as "Post 1," which is rich in practical insights, has shown a higher preference for positive sentiment, with 50% of comments rated as positive. Conversely, posts with long-form content or unclear messaging, like "Post 3," showed a more neutral sentiment (40% positive). Focusing on short, informative videos under 30 seconds, similar to "Post 2," can drive better audience reception and higher positive feedback.
      </p>
      <p className="mb-2">
        <strong>Critical Feedback Trends:</strong> Critical comments often point to pacing and depth of content. "Post 3," for instance, faced comments like "Too general" and "Content was repetitive." These insights suggest that future posts could benefit from more in-depth content with a quicker pace to maintain viewer interest and reduce negative feedback. Prioritizing content that balances depth with engagement could reduce critical feedback.
      </p>
    </div>
  </section>
</TabPanel>


          </div>
        )}
      </div>
    </div>
  );
};

export default SentimentAnalysis;
