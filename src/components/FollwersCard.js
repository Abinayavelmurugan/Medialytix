import React, { useEffect, useState } from 'react';
import { fetchInstagramFollowers } from '../api';

const FollowersCard = () => {
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchInstagramFollowers();
        setFollowers(data.followersCount);
      } catch (error) {
        console.error("Error fetching followers count:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold">Followers</h2>
      <p className="text-2xl">{followers}</p>
    </div>
  );
};

export default FollowersCard;
