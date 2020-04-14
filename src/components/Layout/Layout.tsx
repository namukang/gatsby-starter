import React from 'react';

import Footer from 'components/Footer';

import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container-fluid">
      <div>{children}</div>
      <div className="my-4">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
