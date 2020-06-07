import React from 'react';
import { Button } from '@material-ui/core';

import { useCount, useStorage } from "./../../context/Count"

const Count = () => {

  const { count, setCount } = useCount();
  const { saveOnLocalStorage } = useStorage();

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => { setCount(count + 1); saveOnLocalStorage(); }}>
        Aumentar
      </Button>
    </div>
  );
}

export default Count;
