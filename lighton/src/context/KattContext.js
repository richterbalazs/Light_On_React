import { createContext } from "react";
import { useState } from "react";

export const KattContext = createContext("");

export const KattProvider = ({ children }) => {
    const [lista,setLista] = useState([true, true, false, false, true, true, false, false, true]);

    function katt(adat) {
        const slista = [...lista];
        if (slista[adat] === true) {
          slista[adat] = false;
        } else {
          slista[adat] = true;
        }
        setLista([...slista]);
        console.log(slista);
      }

      return <KattContext.Provider value={{lista, katt}}>
            {children}
            </KattContext.Provider>;
}