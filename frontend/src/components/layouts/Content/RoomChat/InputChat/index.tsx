import React, { FC } from 'react';
import { BsCardImage, BsFillStickyFill } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';
import { RiFileGifFill } from 'react-icons/ri';
import './index.scss';

export const ChatInput: FC = () => {
  return (
    <div className="chat-input">
      <div className="input-chat-gr">
        <div className="more-action">
          <div className="input-mess-icon">
            {/* <FaPlusCircle size="20px"  color="blue" /> */}
            <IoMdCloseCircle size="20px" color="blue" />
          </div>
        </div>
        <div className="input-message-group">
          <div className="input-mes-icon-gr">
            <div className="input-mess-icon">
              <BsCardImage size="20px" color="blue" />
            </div>
            <div className="input-mess-icon">
              <BsFillStickyFill size="20px" color="blue" />
            </div>
            <div className="input-mess-icon">
              <RiFileGifFill size="20px" color="blue" />
            </div>
          </div>
          <div className="input-mes-text">input</div>
        </div>
        <div className="send-like">send</div>
      </div>
    </div>
  );
};
