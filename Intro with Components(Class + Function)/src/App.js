import React from 'react';
import Hello from './myComponents/hello.jsx';
import './App.css';
import Welcome from './myComponents/welcome.jsx';

function App() {
  return (
    <div className="App">
     <Hello name="Arnob Mahmud"></Hello>
     <Welcome name = "React"></Welcome>
    </div>
  );
}

export default App;
