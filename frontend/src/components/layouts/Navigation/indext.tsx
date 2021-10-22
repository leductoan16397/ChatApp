import React, { FC } from 'react';
import { NavigationGroup } from './group';
import { NavigationHeader } from './header';
import './index.scss';
import { NavigationSearch } from './search/index';

export const Navigation: FC = () => {
  return (
    <>
      <NavigationHeader />
      <NavigationSearch />
      <NavigationGroup />
    </>
  );
};
