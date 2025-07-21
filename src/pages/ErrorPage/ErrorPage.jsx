import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
          <h1 className="text-4xl font-bold text-white">404</h1>
          <p className="text-white/90 mt-2">Page Not Found</p>
        </div>

        {/* Main content */}
        <div className="p-8 text-center">
          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <svg
              className="w-32 h-32 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Error message */}
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Oops! Lost in the Pages
          </h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action button */}
          <a
            href="/"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Return to Homepage
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Need help?{" "}
          <a href="/contact" className="text-purple-600 hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
