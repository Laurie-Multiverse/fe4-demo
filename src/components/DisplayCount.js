import React, { useContext } from 'react';
import { CountContext } from '../CountProvider';

// A component function gets called to return the HTML needed to display that component

//         <DisplayCount count={count} />
// It has one parameter, which is an object containing a key:value for each prop we passed

function DisplayCount() {
  const { count } = useContext(CountContext);

  return(
    <h1>The count is {count}</h1>
  )

}

export { DisplayCount };