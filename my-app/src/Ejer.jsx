import { React } from "react";
import PropTypes from "prop-types"

const Ejer = ({value}) =>{

    return(
        <>
            <h1>Ejercicio</h1>
            <h2>{value}</h2>
        </>
    )

}

Ejer.propTypes ={
    value: PropTypes.number.isRequired
}

export default Ejer;