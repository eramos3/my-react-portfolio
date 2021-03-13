import React, { useState } from 'react';
import Nav from '../Nav';
import Home from '../pages/Home.js';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio.js';
import Contact from '../pages/Contact';

function PortfolioContent() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home/>
      case 'About':
        return <About/>
      case 'Portfolio':
        return <Portfolio/>
      case 'Contact':
        return <Contact/>
    }
  };

  return (
    <div className=''>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          renderPage()
        }
      </div>
    </div>
  );
}

export default PortfolioContent;