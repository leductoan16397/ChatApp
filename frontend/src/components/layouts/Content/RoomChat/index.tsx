import React, { FC } from 'react';
import './index.scss';
import { ChatInput } from './InputChat/index';
import { RoomChatBody } from './RoomChatBody';
import { RoomChatHeader } from './RoomHeader';

export const RoomChat: FC = () => {
  return (
    <div className="chat-room">
      <RoomChatHeader />
      <RoomChatBody />
      <ChatInput />
    </div>
  );
};
