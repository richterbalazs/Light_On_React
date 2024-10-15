import './App.css';
import { useState } from 'react';
import { Jatekter } from './components/Jatekter';


function App() {
  const [lista,setLista] = useState([true, true, false, false, true, true, false, false, true]);
  const [lepes, setLepes] = useState(0);

  function katt(adat){
    const slista = [...lista];
    if (lepes%2 == 0){
      slista[adat] = true;
      console.log(slista[adat]);
    }else{
      slista[adat] = false;
      console.log(slista[adat]);
    }
    setLista([...slista]);

    let sv = lepes;
    sv++;
    setLepes(sv);
    


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
