import React from 'react';
import { Button } from '@material-ui/core';

import { useCount, useStorage } from "../../context/Count"

const CountTwo = () => {

  const { count, setCount } = useCount();
  const { deleteOnLocalStorage } = useStorage();

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>{ setCount(count - 1); deleteOnLocalStorage(); }}>
        Diminuir
      </Button>
    </div>
  );
}

export default CountTwo;
