import './App.css';
import { useState } from 'react';
import { Jatekter } from './components/Jatekter';


function App() {
  const [lista,setLista] = useState([true, true, false, false, true, true, false, false, true]);

  function katt(adat){
    const slista = [...lista];
    slista[adat] = !slista[adat];
    setLista([...slista]);
    

    // BE KELL ÁLLíTANI HOGY A HÁTTÉRSZÍN ÁLLITÓDJON A LÁMPÁKBAN
    

  }

  return (
    <div className="App">
      <header className="App-header">
          Light On - React
      </header>
      <article>
        <Jatekter sor={lista} katt={katt}/>
      </article>
      <br />
      <footer>Készítette: Richter Balázs</footer>
    </div>
  );
}

export default App;
