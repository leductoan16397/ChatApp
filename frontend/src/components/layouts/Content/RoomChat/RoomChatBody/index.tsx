import { OtherMessage } from 'components/common/otherMes';
import React, { FC } from 'react';
import './index.scss';

export const RoomChatBody: FC = () => {
  return (
    <div className="room-chat-body">
      <div className="message">
        <OtherMessage />
      </div>
      <div className="message">
        <OtherMessage />
      </div>
      <div className="message">
        <OtherMessage />
      </div>
      <div className="message">
        <OtherMessage />
      </div>
    </div>
  );
};
