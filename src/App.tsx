import React from 'react';
import { GlobalStyle } from './styles/global';
import { GlobalFlex } from './styles/flex';
import { GlobalSpacing } from './styles/spacing';
import { GlobalReset } from './styles/reset';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <GlobalStyle/>
      <GlobalFlex />
      <GlobalSpacing />
      <GlobalReset />
      <Main/>
    </>
  );
}

export default App;
