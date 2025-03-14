import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement feedback submission logic here

    setMessage("Thank you for your feedback!");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Send Feedback</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block text-sm font-medium mb-1">
              Describe your feedback:
            </span>
            <textarea
              className="w-full bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              rows="4"
              placeholder="Tell us what prompted this feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </label>

          <label className="block mb-4">
            <span className="block text-sm font-medium mb-1">Attach Screenshot (optional):</span>
            <button
              type="button"
              className="w-full bg-gray-700 text-white py-2 rounded-md border border-gray-600 hover:bg-gray-600 focus:outline-none"
            >
              Capture Screenshot
            </button>
          </label>

          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              className="form-checkbox text-purple-600 h-5 w-5 rounded focus:ring-2 focus:ring-purple-600"
              checked={emailUpdates}
              onChange={(e) => setEmailUpdates(e.target.checked)}
            />
            <span className="ml-2 text-sm">
              We may email you for more information or updates
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition"
          >
            Submit Feedback
          </button>
        </form>

        {message && (
          <p className="mt-4 text-green-500 text-sm text-center">{message}</p>
        )}

        <p className="mt-6 text-xs text-gray-400">
          Some account and system information may be sent to us. We will use it
          to improve our services. See our{" "}
          <a href="#" className="text-purple-500 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-500 underline">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default FeedbackForm;
