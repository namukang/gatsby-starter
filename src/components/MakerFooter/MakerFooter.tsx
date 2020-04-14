import React from 'react';

import Avatar from 'components/Avatar';
import LinkExternal from 'components/LinkExternal';

import styles from './MakerFooter.module.scss';
import dkImg from 'assets/dk.jpg';

const MakerFooter: React.FC = () => {
  return (
    <div
      className={`${styles.MakerFooter} p-2 bg-white border-top border-left border-bottom d-none d-md-block`}
    >
      <div className="text-muted mb-2">Made by DK</div>
      <div className="d-flex justify-content-center">
        <LinkExternal href="https://dkthehuman.com">
          <Avatar src={dkImg} />
        </LinkExternal>
      </div>
    </div>
  );
};

export default MakerFooter;
