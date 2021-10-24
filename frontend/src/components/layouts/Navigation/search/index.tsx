import React, { FC } from 'react';
import { IoMdSearch } from 'react-icons/io';
import './index.scss';

export const NavigationSearch: FC = () => {
  return (
    <div className="navigation-search">
      <div className="search-mes-box">
        <IoMdSearch className="search-icon" />
        <input className="search-input" placeholder="Search Messenger" />
      </div>
    </div>
  );
};
