import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";

const PrimerHook =({value})=>{

    const[counter,setCounter] = useState( value )
    

    const handleAdd = () =>{
        setCounter(counter + 1)
    }
    const handleSubtract = () =>{
        setCounter(counter - 1)
    }

    const handleRes = () =>{
        setCounter(value)
    }

    return(
        <>
            <h1>Counter</h1>
            <span>{counter}</span>
            <button onClick={()=> handleAdd()}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleRes}>reset</button>
        </>
    )

}

PrimerHook.propTypes = {

    value: PropTypes.number.isRequired
}

PrimerHook.defaultProps = {
    value: 10
}

export default PrimerHook;