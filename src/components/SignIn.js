import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Navigating to /dashboard');
    // Call onSignIn to update the parent state and then navigate
    onSignIn();
    navigate('/dashboard'); // Navigate to dashboard page
  };

  return (
   
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
       
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);">
        <div className="flex">
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Sign in</h2>
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full rounded mb-4"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 p-2 w-full rounded mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gray-700 text-white p-2 rounded w-full"
              >
                Sign In
              </button>
              <p className="mt-4 text-center text-gray-500">
                Forgot your password?
              </p>
            </form>
          </div>
          <div className="w-1/2 bg-gray-700 p-8 text-white flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
            <p className="mb-4">Welcome back to see your progress!! </p>
            <p >Sign in to track your process</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
