export default function Lampa(props){
    function katt(){
        props.fv(props.index);
    }

    return (
        <div className={`Lampa ${props.jel? "fel":"le"}`} onClick={()=>katt()}></div>
    )
}