import React from 'react';
import { useCount } from "../../context/Count"

const MirrorTwo = () => {

  const { count } = useCount();

  return (
    <div>
      <h1>MirrorTwo: {count}</h1>
    </div>
  );
}

export default MirrorTwo;
