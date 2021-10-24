import React, { FC } from 'react';
import { AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { Avatar } from '@mui/material';
import './index.scss';
import { ActiveDot } from 'components/common/activeDot';
import { NotiDot } from 'components/common/notiDot';
import { SeenDot } from 'components/common/seenDot';

export const NavigationHeader: FC = () => {
  return (
    <div className="navigation-header">
      <div className="nav-gr">
        <div className="avatar">
          <Avatar>H</Avatar>
        </div>
        <h3>Chats</h3>
      </div>
      <div className="nav-gr">
        <div className="icon">
          <AiOutlineSetting size="1.75em" />
          <ActiveDot />
        </div>
        <div className="icon">
          <AiOutlineUserAdd size="1.75em" />
          <NotiDot total={12} />
        </div>
        <div className="icon">
          <FiEdit size="1.75em" />
          <SeenDot />
        </div>
      </div>
    </div>
  );
};
