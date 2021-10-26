import React, { FC } from 'react';
import './index.scss';
import { Avatar } from '@mui/material';
import { ActiveDot } from 'components/common/activeDot';

export const RoomChatHeader: FC = () => {
  return (
    <div className="room-chat-header">
      <div className="room-avatar-status">
        <div className="room-avatar">
          <Avatar sx={{ width: 50, height: 50 }}>H</Avatar>
          <ActiveDot />
        </div>
        <div className="room-status-name">
          <div className="room-name">room name room name room name room name</div>
          <div className="room-status">status</div>
        </div>
      </div>
      <div className="room-action">call</div>
    </div>
  );
};
