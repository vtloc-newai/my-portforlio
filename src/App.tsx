import React from 'react';
import { GlobalStyle } from './styles/global';
import { GlobalFlex } from './styles/flex';
import { GlobalSpacing } from './styles/spacing';
import { GlobalReset } from './styles/reset';
import Main from './components/Main/Main';
// import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <>
      <GlobalStyle/>
      <GlobalFlex />
      <GlobalSpacing />
      <GlobalReset />
      {/*<Cursor />*/}
      <Main/>
    </>
  );
}

export default App;
