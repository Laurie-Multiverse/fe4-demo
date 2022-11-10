import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CountContext } from '../CountProvider';

function IncrementButton() {
  const { increment } = useContext(CountContext);
  return (
    <Button onClick={increment}>
      count++
    </Button>
  )
}

function DecrementButton() {
  const { decrement } = useContext(CountContext);

  return (
    <Button onClick={decrement}>
      count--
    </Button>
  )
}

export { IncrementButton, DecrementButton }