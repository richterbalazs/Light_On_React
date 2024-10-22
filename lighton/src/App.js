import './App.css';
import React, { useContext } from 'react';
import Jatekter from './components/Jatekter.js';
import { KattContext } from './context/KattContext';


function App() {
  const {lista}=useContext(KattContext);

  return (
    <div className="App">
      <header className="App-header">
          Light On - React
      </header>
      <article>
        <Jatekter lista={lista}/>
      </article>
      <br />
      <footer>Készítette: Richter Balázs</footer>
    </div>
  );
}

export default App;
