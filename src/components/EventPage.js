import React from 'react';

const EventPage = () => {
  // Example event data
  const events = [
    {
      title: 'Creator Meetup - NYC',
      date: 'December 5, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'New York, NY',
      description: 'Join us for an exclusive meetup with top creators in the industry. Network, share insights, and collaborate.',
      poster: 'https://img.freepik.com/free-vector/positive-officials-speaking-press-conference-journalists-holding-voice-recorder-flat-vector-illustration-journalism-announcement-event-concept_74855-10138.jpg?ga=GA1.1.1208906566.1725559246&semt=ais_hybrid', // Poster image URL
      tips: 'Collaborate with fellow creators, build a strong network, and share best practices.',
      type: 'Creator Meetup',
    },
    {
      title: 'Influencer Growth Summit',
      date: 'December 12, 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Online Event',
      description: 'A summit for influencers to learn growth strategies, engage with brands, and network.',
      poster: 'https://img.freepik.com/free-vector/illustration-refer-friend-concept-with-characters_52683-24294.jpg?ga=GA1.1.1208906566.1725559246&semt=ais_hybrid', // Poster image URL
      tips: 'Engage with your followers consistently, share authentic content, and stay updated with trends.',
      type: 'Influencer Event',
    },
    {
      title: 'Influencer Workshop for Beginners',
      date: 'December 18, 2024',
      time: '9:00 AM - 3:00 PM',
      location: 'Online',
      description: 'A workshop for beginner influencers to learn the basics of content creation and social media strategies.',
      poster: 'https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?ga=GA1.1.1208906566.1725559246&semt=ais_hybrid', // Poster image URL
      tips: 'Focus on content quality, consistency, and interacting with your community.',
      type: 'Workshop',
    },
  ];

  // YouTube video data
  const youtubeVideos = [
    {
      title: 'How to increase your Followers',
      url: 'https://www.youtube.com/embed/VIDEO_ID1',
    },
    {
      title: 'Content Creation Tips for Beginners',
      url: 'https://www.youtube.com/embed/VIDEO_ID2',
    },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-6">Upcoming Events</h1>
      <p className="text-lg text-gray-400 mb-12">Creator Meetups, Workshops, Influencer Events, and Learning Resources</p>

      {/* Creator Meetup Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-6">Creator Meetups</h2>
        <div className="space-y-6">
          {events
            .filter((event) => event.type === 'Creator Meetup')
            .map((event, index) => (
              <div key={index} className="flex bg-gray-800 p-6 rounded-lg shadow-lg space-x-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="text-gray-300">{event.date} | {event.time}</p>
                  <p className="text-gray-400">{event.location}</p>
                  <p className="mt-4 text-white">{event.description}</p>
                  <div className="mt-4 text-gray-200">
                    <h4 className="font-semibold text-white">Tips from Top Influencers:</h4>
                    <p>{event.tips}</p>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Register</button>
                </div>
                <div className="w-48 h-48">
                  <img src={event.poster} alt="Event Poster" className="object-cover w-full h-full rounded-lg" />
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Influencer Events Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-6">Influencer Events</h2>
        <div className="space-y-6">
          {events
            .filter((event) => event.type === 'Influencer Event')
            .map((event, index) => (
              <div key={index} className="flex bg-gray-800 p-6 rounded-lg shadow-lg space-x-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="text-gray-300">{event.date} | {event.time}</p>
                  <p className="text-gray-400">{event.location}</p>
                  <p className="mt-4 text-white">{event.description}</p>
                  <div className="mt-4 text-gray-200">
                    <h4 className="font-semibold text-white">Tips from Top Influencers:</h4>
                    <p>{event.tips}</p>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Register</button>
                </div>
                <div className="w-48 h-48">
                  <img src={event.poster} alt="Event Poster" className="object-cover w-full h-full rounded-lg" />
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Workshops Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-6">Workshops for Beginner Influencers</h2>
        <div className="space-y-6">
          {events
            .filter((event) => event.type === 'Workshop')
            .map((event, index) => (
              <div key={index} className="flex bg-gray-800 p-6 rounded-lg shadow-lg space-x-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="text-gray-300">{event.date} | {event.time}</p>
                  <p className="text-gray-400">{event.location}</p>
                  <p className="mt-4 text-white">{event.description}</p>
                  <div className="mt-4 text-gray-200">
                    <h4 className="font-semibold text-white">Tips from Top Influencers:</h4>
                    <p>{event.tips}</p>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Register</button>
                </div>
                <div className="w-48 h-48">
                  <img src={event.poster} alt="Event Poster" className="object-cover w-full h-full rounded-lg" />
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Learning Resources Section (YouTube Videos) */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-white mb-6">Learning Resources</h2>
        <div className="space-y-6">
          {youtubeVideos.map((video, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">{video.title}</h3>
              <br></br>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mym8RVMFo4o?si=IMlrQOHEttcDj1A6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Don't Miss Out!</h2>
        <p className="text-lg text-gray-400 mb-6">Join our events, workshops, and learning resources to level up your content creation skills!</p>
        <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500">Register for Events</button>
      </section>
    </div>
  );
};

export default EventPage;
