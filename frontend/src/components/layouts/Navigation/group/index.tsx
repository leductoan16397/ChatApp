import { RoomDescription } from 'components/common/roomDescription';
import React, { FC } from 'react';
import './index.scss';

export const NavigationGroup: FC = () => {
  return (
    <div className="navigation-room">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27,
      ].map((item, index) => (
        <RoomDescription key={`room_${index + 1}`} num={item} />
      ))}
    </div>
  );
};
