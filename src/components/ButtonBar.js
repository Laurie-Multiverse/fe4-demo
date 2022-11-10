import React from 'react';
import { IncrementButton, DecrementButton } from './Buttons';

// A component function gets called to return the HTML needed to display that component

function ButtonBar() {

  return(
    <>
      <IncrementButton/>
      <DecrementButton/>
    </>
  )

}

export { ButtonBar };