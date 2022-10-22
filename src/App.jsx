import React from 'react';
import Drawer from './components/Drawer';
import './App.css';
import CardCifra from './components/CardCifra';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Drawer />
      <CardCifra />
    </div>
  );
}

export default App;
