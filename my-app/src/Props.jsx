import React from "react";
import { PropTypes } from "prop-types";

const Props =({nombre,edad})=>{  

    return(
        <>
        <h1>hola Sebastián</h1>
        <h2>{nombre}</h2>
        <h2>{edad}</h2>
        </> 
    )
}

Props.propTypes = {
     
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

Props.defaultProps = {
    nombre : "María",
    edad: 15
}

export default Props;