import React, { FC } from 'react';
import './index.scss';

export const Loading: FC = () => {
  return (
    <div className="loading">
      <div className="dot-pulse" />
    </div>
  );
};
