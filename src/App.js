import React from 'react';
import { DisplayCount } from './components/DisplayCount';
import { ButtonBar } from './components/ButtonBar';

function App() {

  return (
    <div className='layout'>
        <p>Hello world</p>
        <DisplayCount />
        <ButtonBar />
    </div>
  );
}

export { App };
