import React from "react"
import Lampa from "./Lampa.js";

function Jatekter(props){

    return (
        <>
            {props.lista.map((jel,i)=>{
                return <Lampa jel={jel} key={i} index={i}/>;
            })}
        </>
    );
}

export default Jatekter;