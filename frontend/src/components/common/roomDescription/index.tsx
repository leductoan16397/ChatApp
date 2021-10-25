import React, { DOMAttributes, FC, LegacyRef } from 'react';
import './index.scss';
import { Avatar } from '@mui/material';
import { BsThreeDots } from 'react-icons/bs';
// import { SeenDot } from 'components/common/seenDot';
import { SendDot } from 'components/common/sendDot';

interface RoomDescriptionProps extends DOMAttributes<HTMLDivElement> {
  num: number;
  active?: boolean;
  divRef?: LegacyRef<HTMLDivElement>;
}

export const RoomDescription: FC<RoomDescriptionProps> = ({ num, active, divRef, ...rest }) => {
  return (
    <div className="room-description" ref={divRef} {...rest}>
      <div className={`description ${active && 'active'}`}>
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
