import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import CountProvider from "./context/Count";

import Count from "./page/Count";
import CountTwo from "./page/CountTwo";
import Mirror from "./page/Mirror";
import MirrorTwo from "./page/MirrorTwo";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <CountProvider>
          <Count />
            <br />
            <hr />
            <br />
          <Mirror />
            <br />
            <hr />
            <br />
          <MirrorTwo />
            <br />
            <hr />
            <br />
          <CountTwo />
        </CountProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
