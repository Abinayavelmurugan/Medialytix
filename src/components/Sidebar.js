import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineBarChart, AiOutlineSetting } from 'react-icons/ai';
import { MdContentPaste, MdComment, MdSubtitles, MdCopyright, MdFeedback, MdMessage, MdEvent } from 'react-icons/md';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col h-[130h] bg-gray-900 text-gray-100 ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      {/* Hamburger Icon */}
      <div className="flex items-center justify-start p-4">
  <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
    <AiOutlineMenu />
  </button>
  {isOpen && (
    <h1 className="ml-4 text-lg font-semibold text-left">Dashboard</h1>
  )}
</div>


      {/* Profile Section */}
      {isOpen && (
        <div className="flex flex-col items-center mt-4">
          <img
            src="data:image/jpeg;base64,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"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <h2 className="mt-2 text-sm font-semibold">thev</h2>
        </div>
      )}

      {/* Menu Items */}
      <div className="flex flex-col mt-8 space-y-4">
      <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <AiOutlineHome className="text-xl" />
          {isOpen && <span className="ml-4">Home</span>}
        </Link>
        <Link to="/analytics" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <AiOutlineBarChart className="text-xl" />
          {isOpen && <span className="ml-4">Analytics</span>}
        </Link>
        {/* <Link to="/content" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
        <MdContentPaste className="text-xl" />
          {isOpen && <span className="ml-4">Content</span>}
        </Link> */}
{/* 
        <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdContentPaste className="text-xl" />
          {isOpen && <span className="ml-4">Content</span>}
        </button> */}

<Link to="/comments" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdComment className="text-xl" />
          {isOpen && <span className="ml-4">Comments</span>}
        </Link>

        <Link to="/competitor" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdContentPaste className="text-xl" />
          {isOpen && <span className="ml-4">Competitor Analysis</span>}
        </Link>

        <Link to="/event" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdEvent className="text-xl" />
          {isOpen && <span className="ml-4">Events</span>}
        </Link>

        <Link to="/feedback" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdFeedback className="text-xl" />
          {isOpen && <span className="ml-4">Feedback</span>}
        </Link>

        <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <AiOutlineSetting className="text-xl" />
          {isOpen && <span className="ml-4">Settings</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
