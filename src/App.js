import React from 'react'
import './App.css'
import CalculatorContainer from "./Calculator/CalculatorContainer";

const App = (props) =>{
    return(
        <div className={`wrap-calc`}>
            <CalculatorContainer />
        </div>
    )
}
export default App