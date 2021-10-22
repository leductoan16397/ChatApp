import React, { FC, ReactNode } from 'react';
import { Navigation } from '../../components/layouts/Navigation/indext';
import './index.scss';

export const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="app-chat-layout">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
