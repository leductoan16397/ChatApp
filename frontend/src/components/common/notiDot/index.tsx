import React, { FC } from 'react';
import './index.scss';

export const NotiDot: FC<{ total: number }> = ({ total }) => {
  return <span className="noti-dot">{total < 10 ? total : '9+'}</span>;
};
