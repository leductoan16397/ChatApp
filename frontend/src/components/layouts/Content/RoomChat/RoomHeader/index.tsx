import React, { FC } from 'react';
import './index.scss';
import { Avatar } from '@mui/material';
import { ActiveDot } from 'components/common/activeDot';
import { IoIosCall, IoIosVideocam } from 'react-icons/io';
// import { FaVideo } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

export const RoomChatHeader: FC = () => {
  return (
    <div className="room-chat-header">
      <div className="room-avatar-status">
        <div className="room-avatar">
          <Avatar sx={{ width: 40, height: 40 }}>H</Avatar>
          <ActiveDot />
        </div>
        <div className="room-status-name">
          <div className="room-name">room name room name room name room name</div>
          <div className="room-status">status</div>
        </div>
      </div>
      <div className="room-action">
        <div className="room-action-icon">
          <IoIosCall size="25px" color="blue" />
        </div>
        <div className="room-action-icon">
          <IoIosVideocam size="25px" color="blue" />
        </div>
        <div className="room-action-icon">
          <BsThreeDots size="20px" color="blue" />
        </div>
        {/* <div className="room-action-icon">
          <div className="room-info-icon-active" style={{ backgroundColor: 'blue' }}>
            <BsThreeDots size="20px" color="white" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
