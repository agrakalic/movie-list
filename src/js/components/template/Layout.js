
import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <div className="content">
      <div className="content__inner">
        {children}
      </div>  
    </div>
    <Footer />
  </div>
);

export default Layout;
