import React from 'react';
import AppIcon from 'components/AppIcon';

import styles from './Navbar.module.scss';

import { APP_NAME } from 'utils/app';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand mb-0 h1">
        <div className={`${styles.logo} d-inline-block align-top p-1 mr-2`}>
          <AppIcon />
        </div>
        {APP_NAME}
      </div>
    </div>
  );
};

export default Navbar;
