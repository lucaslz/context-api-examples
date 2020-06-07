import React from 'react';
import { useCount } from "./../../context/Count"

const Mirror = () => {

  const { count } = useCount();

  return (
    <div>
      <h1>Mirror: {count}</h1>
    </div>
  );
}

export default Mirror;
