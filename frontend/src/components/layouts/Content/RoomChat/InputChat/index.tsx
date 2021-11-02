/* eslint-disable no-unused-vars */
import React, { ChangeEvent, FC, useState } from 'react';
import { BsCardImage, BsEmojiSmileFill, BsFillStickyFill } from 'react-icons/bs';
import { IoMdCloseCircle, IoMdSend } from 'react-icons/io';
import { RiFileGifFill } from 'react-icons/ri';
import TextareaAutosize from 'react-autosize-textarea';

import './index.scss';
import { AiFillLike } from 'react-icons/ai';

export const ChatInput: FC = () => {
  const [input, setInput] = useState('');
  return (
    <div className="chat-input">
      <div className="input-chat-gr">
        <div className="more-action">
          <div className="input-mess-icon">
            {/* <FaPlusCircle size="30px"  color="blue" /> */}
            <IoMdCloseCircle size="30px" color="blue" />
          </div>
        </div>
        <div className="input-message-group">
          <div className="input-mes-icon-gr">
            <div className="input-mess-icon">
              <BsCardImage size="30px" color="blue" />
            </div>
            <div className="input-mess-icon">
              <BsFillStickyFill size="30px" color="blue" />
            </div>
            <div className="input-mess-icon">
              <RiFileGifFill size="30px" color="blue" />
            </div>
          </div>
          <div className="input-mes-text">
            <div className="chat-area">
              <div className="input-area">
                <div className="chat-placeholder" hidden={input.length > 0}>
                  Aa
                </div>
                <div className="chat-area">
                  <TextareaAutosize
                    maxRows={5}
                    className="chat-values"
                    value={input}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                      setInput(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="choose-emoji">
                <BsEmojiSmileFill size="20px" color="blue" />
              </div>
            </div>
          </div>
        </div>
        <div className="send-like">
          <div className="input-mess-icon">
            {input.length > 0 ? (
              <IoMdSend size="30px" color="blue" />
            ) : (
              <AiFillLike size="30px" color="blue" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
