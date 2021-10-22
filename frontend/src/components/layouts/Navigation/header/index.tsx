import React, { FC } from 'react';
import { AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { Avatar } from '@mui/material';
import './index.scss';

export const NavigationHeader: FC = () => {
  return (
    <div className="navigation-header">
      <div className="nav-gr">
        <div className="avatar">
          <Avatar>H</Avatar>
        </div>
        <h1>Chats</h1>
      </div>
      <div className="nav-gr">
        <div className="icon">
          <AiOutlineSetting size="1.5em" />
        </div>
        <div className="icon">
          <AiOutlineUserAdd size="1.5em" />
        </div>
        <div className="icon">
          <FiEdit size="1.5em" />
        </div>
      </div>
    </div>
  );
};
