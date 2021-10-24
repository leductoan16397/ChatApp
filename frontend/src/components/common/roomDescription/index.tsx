import React, { FC } from 'react';
import './index.scss';
import { Avatar } from '@mui/material';
import { BsThreeDots } from 'react-icons/bs';
// import { SeenDot } from 'components/common/seenDot';
import { SendDot } from 'components/common/sendDot';

export const RoomDescription: FC<{ num: number }> = ({ num }) => {
  return (
    <div className="room-description">
      <div className="description">
        <div className="room-avatar">
          <Avatar sx={{ width: 54, height: 54 }}>H</Avatar>
        </div>
        <div className="room-chat">
          <div className="room-name-latest-mess">
            <div className="group-name"> group name</div>
            <div className="latest-message">latest mess {num}</div>
          </div>
          <div className="seen-status">
            <div>
              <SendDot color="gray" />
              {/* <SeenDot /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="setting">
        <BsThreeDots />
      </div>
    </div>
  );
};
