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
        return handlePageChange(Home)
      case 'About':
        return handlePageChange(About)
      case 'Portfolio':
        return handlePageChange(Portfolio)
      case 'Contact':
        return handlePageChange(Contact)
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          renderPage(currentPage)
        }
      </div>
    </div>
  );
}

export default PortfolioContent;