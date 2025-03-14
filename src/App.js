// App.js
// import React from 'react';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import Heatmap from './components/HeatMap';
// import TopViewedVideos from './components/Topviewed';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Analytics from './components/Analytics';

// const App = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-6 bg-gray-800 text-gray-100">

//         <Dashboard />
//         <TopViewedVideos />
        
//       </div>
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import Analytics from './components/Analytics';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1">
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/analytics" element={<Analytics />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import Analytics from './components/Analytics';
// import TopViewedVideos from './components/Topviewed';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-6 bg-gray-800 text-gray-100">
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/analytics" element={<Analytics />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import TopViewedVideos from './components/Topviewed';
// import Analytics from './components/Analytics';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-6 bg-gray-800 text-gray-100">
//           <Routes>
//             <Route path="/dashboard" element={<><Dashboard /><TopViewedVideos /></>} />
//             <Route path="/analytics" element={<Analytics />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;


// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import TopViewedVideos from './components/Topviewed';
// import Analytics from './components/Analytics';
// import SearchBar from './components/SearchBar';
// import ProfileMenu from './components/ProfileMenu';
// import Content from './components/Content';
// import SignIn from './components/SignIn';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex h-screen">
//         {/* Sidebar should take full height */}
//         <Sidebar className="h-full" />
        
//         {/* Main content container should also take full height */}
//         <div className="flex-1 flex flex-col h-full bg-gray-800 text-gray-100">
//           {/* Top Navigation Bar */}
//           <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
//             <SearchBar />
//             <ProfileMenu />
            
//           </div>

//           {/* Main Content that fills the remaining space */}
//           <div className="flex-1 p-6 overflow-auto">
//             <Routes>
//             <Route path="/" element={<SignIn />} />

//               <Route path="/dashboard" element={<><Dashboard /><TopViewedVideos /></>} />
//               <Route path="/analytics" element={<Analytics />} />
//               <Route path="/content" element={<Content />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import TopViewedVideos from './components/Topviewed';
// import Analytics from './components/Analytics';
// import SearchBar from './components/SearchBar';
// import ProfileMenu from './components/ProfileMenu';
// import Content from './components/Content';
// import SignIn from './components/SignIn';

// // Layout component to handle conditional rendering
// const Layout = ({ children }) => {
//   const location = useLocation();
//   const isSignInPage = location.pathname === '/';

//   return (
//     <div className="flex h-screen">
//       {/* Conditionally render Sidebar */}
//       {!isSignInPage && <Sidebar className="h-full" />}
      
//       <div className="flex-1 flex flex-col h-full bg-gray-800 text-gray-100">
//         {/* Conditionally render Top Navigation */}
//         {!isSignInPage && (
//           <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
//             <SearchBar />
//             <ProfileMenu />
//           </div>
//         )}
        
//         {/* Main Content */}
//         <div className="flex-1 p-6 overflow-auto">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => (
//   <Router>
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <Layout>
//             <SignIn />
//           </Layout>
//         }
//       />
//       <Route
//         path="/dashboard"
//         element={
//           <Layout>
//             <Dashboard />
//             <TopViewedVideos />
//           </Layout>
//         }
//       />
//       <Route
//         path="/analytics"
//         element={
//           <Layout>
//             <Analytics />
//           </Layout>
//         }
//       />
//       <Route
//         path="/content"
//         element={
//           <Layout>
//             <Content />
//           </Layout>
//         }
//       />
//     </Routes>
//   </Router>
// );

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TopViewedVideos from './components/Topviewed';
import Analytics from './components/Analytics';
import SearchBar from './components/SearchBar';
import ProfileMenu from './components/ProfileMenu';
import Content from './components/Content';
import SignIn from './components/SignIn';
import SentimentAnalysis from './components/SentimentAnalysis';
import CompetitorAnalysis from './components/CompetitorAnalysis';
import EventPage from './components/EventPage';
import FeedbackForm from './components/FeebackForm';
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar is always visible here */}
      <div className="flex-1 flex flex-col h-full bg-gray-800 text-gray-100">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <SearchBar />
          <ProfileMenu />
        </div>
        <div className="flex-1 p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true); // Update authentication state to true
  };

  return (
    <Router>
      <Routes>
        {/* Route for SignIn, only shown if the user is not authenticated */}
        {!isAuthenticated ? (
          <Route path="/" element={<SignIn onSignIn={handleSignIn} />} />
        ) : (
          // Use Layout wrapper for authenticated routes
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
                <TopViewedVideos />
              </Layout>
            }
          />
        )}

        {/* Other Routes with Sidebar for authenticated users */}
        <Route
          path="/analytics"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />
        {/* <Route
          path="/content"
          element={
            <Layout>
              <Content />
            </Layout>
          }
        /> */}
        <Route
        path="/comments"
        element={
          <Layout>
            <SentimentAnalysis />
          </Layout>
        }
        />
          <Route
        path="/competitor"
        element={
          <Layout>
            <CompetitorAnalysis />
          </Layout>
        }
        />
        <Route
        path="/event"
        element={
          <Layout>
            <EventPage />
          </Layout>
        }
        />

<Route
        path="/feedback"
        element={
          <div className="min-h-screen flex bg-gray-900">
          {/* Sidebar */}
          <div className="w-1/1 bg-gray-800 h-full">
            <Sidebar />
          </div>
    
          {/* Feedback Form */}
          <div className="flex-1 p-6">
            <FeedbackForm />
          </div>
        </div>
         
        }
        />
        
      </Routes>
    </Router>
  );
};

export default App;









