import React from 'react'
import Screen from "./Screen/Screen";
import Areas from "./Areas/Areas";

const Calculator = (props) => {
    debugger
    return (
        <article>
            <Screen screen={props.data.screen} result={props.data.screen}/>
            <Areas areas={props.data.areas}/>
        </article>
    )
}
export default Calculator