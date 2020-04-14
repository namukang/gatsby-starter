import React from 'react';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div>{children}</div>
        <div className="border-top bg-light py-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
