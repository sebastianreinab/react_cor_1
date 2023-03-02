import { React } from "react";
import { PropTypes } from "prop-types";

const Eventos = ({evento}) =>{
    var l = 0;

    const handleAdd = () =>{
         l = l+1;
         console.log(l)
    }
    var b = l;

    return(
        <>
            <h1>botones</h1>
            <>{evento}</>
            <button onClick={ handleAdd }>{b}</button>
        </>
    )
}

Eventos.propTypes ={
    
    evento: PropTypes.number
}


export default Eventos