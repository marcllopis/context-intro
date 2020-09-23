import React from 'react';
import MyProvider from './context/MyProvider';
import Extra from './components/Extra'
import './App.css';

function App() {
  return (
    <MyProvider>
      <div className="App">
        <p>Some text at App.js</p>
        <Extra />
      </div>
    </MyProvider>
  );
}

export default App;
