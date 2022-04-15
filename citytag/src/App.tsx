import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';

const theme = {
  colors: {
    header: '#121212',
    body: '#121212',
    footer: '#121212'
  }
}


function App() {
  return (
    <Routes>
      <Route>
        <ThemeProvider theme={theme}>
          <>
          <GlobalStyles />

          </>
        </ThemeProvider>
      </Route>
    </Routes>
  );
}

export default App;
