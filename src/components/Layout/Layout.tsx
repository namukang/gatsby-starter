import React from 'react';

import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container-fluid mt-5 mb-4">
      <div className="mb-5">{children}</div>
      <Footer />
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="text-center text-muted">
      Made by{' '}
      <a
        href="https://dkthehuman.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        DK the Human
      </a>
    </div>
  );
};

export default Layout;
