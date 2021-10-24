import React, { FC } from 'react';
import './index.scss';

// eslint-disable-next-line react/require-default-props
export const SendDot: FC<{ color?: string }> = ({ color }) => {
  return (
    <span className="send-dot" style={{ color: color || 'blue', borderColor: color || 'blue' }}>
      ✓
    </span>
  );
};
