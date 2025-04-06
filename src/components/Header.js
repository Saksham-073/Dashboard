import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Dashboard</h1>
          </div>

          <nav className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-3 sm:space-y-0 sm:space-x-6">
            <div className="flex space-x-4 sm:space-x-6 w-full sm:w-auto justify-center">
              <a href="#" className="text-blue-600 font-medium border-b-2 border-black px-1 py-2 sm:py-3">Overview</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-150 px-1 py-2 sm:py-3">Analytics</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-150 px-1 py-2 sm:py-3">Reports</a>
            </div>

            <button className="w-full sm:w-auto sm:ml-4 bg-blue-500 text-white hover:bg-blue-600 font-medium px-4 py-2 rounded-lg shadow transition duration-150 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Report
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;