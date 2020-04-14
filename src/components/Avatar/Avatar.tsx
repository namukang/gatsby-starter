import React from 'react';

import styles from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  text?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, text, size = 50 }) => {
  if (!src) {
    return (
      <div
        className={`${styles.TextAvatar} rounded-circle bg-dark d-flex justify-content-center align-items-center`}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {text && (
          <div
            className={`font-weight-bold text-white ${
              text.length > 2 ? 'small' : ''
            }`}
          >
            {text}
          </div>
        )}
      </div>
    );
  }
  return (
    <img
      className={`${styles.Avatar} rounded-circle bg-light`}
      alt=""
      src={src}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
