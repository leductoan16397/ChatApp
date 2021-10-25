import { Loading } from 'components/common/loading';
import { RoomDescription } from 'components/common/roomDescription';
import React, { FC, useCallback, useRef, useState } from 'react';
import './index.scss';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const NavigationGroup: FC = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState<number>(0);
  const observer = useRef<IntersectionObserver | null>(null);

  const pushArr = (): void => {
    setTimeout(() => {
      const lastItem = arr[arr.length - 1];
      for (let i = lastItem + 1; i <= lastItem + 5; i += 1) {
        arr.push(i);
        setLoading(false);
      }
    }, 3000);
  };

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          pushArr();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div className="navigation-room">
      {arr.map((item, index) => {
        if (index + 1 === arr.length) {
          return (
            <RoomDescription
              onClick={() => setActive(index)}
              divRef={lastElementRef}
              key={`room_${index + 1}`}
              num={item}
              active={index === active}
            />
          );
        }
        return (
          <RoomDescription
            key={`room_${index + 1}`}
            onClick={() => setActive(index)}
            num={item}
            active={index === active}
          />
        );
      })}
      <div className="room-description-loading">
        <div className="room-des-loading-body">{loading && <Loading />}</div>
      </div>
    </div>
  );
};
