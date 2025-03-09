import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Loading from './components/Loading.jsx';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Set loading to false when the page is fully loaded
      const handleLoad = () => {
          setTimeout(() => setIsLoading(false), 500); // Optional delay for smoother transition
      };

      // Check if the page is already loaded
      if (document.readyState === 'complete') {
          handleLoad();
      } else {
          // Wait for the load event
          window.addEventListener('load', handleLoad);
      }

      // Clean up the event listener
      return () => {
          window.removeEventListener('load', handleLoad);
      };
  }, []);

  return (
      <>
          {isLoading && <Loading />}
          <div className={`app-content ${isLoading ? 'hidden' : ''}`}>
              <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<HomePage />} />
                      <Route path='/home' element={<HomePage />} />
                  </Routes>
              </BrowserRouter>
          </div>
      </>
  );
};

export default App;
