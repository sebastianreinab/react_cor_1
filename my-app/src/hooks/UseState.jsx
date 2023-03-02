import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";

const UseState = ({value}) =>{

    const [counter, setCounter] = useState(0);

    const handleAdd = () =>{

         setCounter(counter + 1); 
    }

    return(

        <>
            <h1>UseState</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>

        </>
    )
}

UseState.propTypes = {

    value: PropTypes.string
}

export default UseState;