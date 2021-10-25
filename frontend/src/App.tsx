/* eslint-disable import/order */
import { RoomChat } from 'components/layouts/Content/RoomChat';
import React from 'react';
import './App.scss';
import { AppLayout } from './layouts/AppLayout';

function App(): JSX.Element {
  return (
    <div className="App">
      <AppLayout>
        <RoomChat />
      </AppLayout>
    </div>
  );
}

export default App;
