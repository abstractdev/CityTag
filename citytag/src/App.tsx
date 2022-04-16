import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { NewYork } from './pages/NewYork';

const theme = {
  colors: {
    header: '#121212',
    body: '#121212',
    footer: '#121212'
  }
}


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/leaderboard" element={} /> */}
        <Route path="/newyork" element={<NewYork />} />
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
