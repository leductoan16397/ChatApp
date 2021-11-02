import React, { FC, ReactNode, useState } from 'react';
import './index.scss';

export const OtherMessage: FC = () => {
  const [isShowAction, setIsShowAction] = useState(false);

  const showAction = (): ReactNode => {
    return <h4>hover</h4>;
  };

  return (
    <div
      className="member-mes"
      onMouseEnter={() => setIsShowAction(true)}
      onMouseLeave={() => setIsShowAction(false)}
    >
      <div className="mes-container">
        <div className="avatar">a</div>
        <div className="chat-container">
          <div className="chat-content">
            chat content chat content chat content chat content chat content chat content chat
            content chat content chat content chat content chat content chat content chat content
            chat content chat content chat content chat content chat content chat content chat
            content chat content chat content chat content chat content chat content chat content
            chat content
          </div>
          <div className="chat-action">{isShowAction ? showAction() : ''}</div>
        </div>
      </div>
    </div>
  );
};
