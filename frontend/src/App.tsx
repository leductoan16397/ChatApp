/* eslint-disable import/order */
import React from 'react';
import './App.scss';
import { AppLayout } from './layouts/AppLayout';

function App(): JSX.Element {
  return (
    <div className="App">
      <AppLayout>
        <h1>aaa</h1>
      </AppLayout>
    </div>
  );
}

export default App;
