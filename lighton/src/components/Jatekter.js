import Lampa from "./Lampa.js";

export function Jatekter(props){
    function katt(adat){
        console.log("játéktér", adat);
        props.katt(adat);
    }

    return (
        <div className="jatekTer">
        {
            props.sor.map((elem, index) => {
                return <Lampa jel={elem} key={index} index={index} fv={katt}/>
            })
        }
        </div>
    )
}