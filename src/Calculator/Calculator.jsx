import React from 'react'
import Screen from "./Screen/Screen";
import Areas from "./Areas/Areas";
import {cleanInput} from "../redux/calcReducer";

const Calculator = (props) => {
    return (
        <article>
            <Screen screen={props.data.screen} result={props.data.result}/>
            <Areas cleanInput={props.cleanInput} getResult={props.getResult} getValue={props.getValue} areas={props.data.areas}/>
        </article>
    )
}
export default Calculator