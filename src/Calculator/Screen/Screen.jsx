import React from 'react'

const Screen = (props) => {
    return (
        <div>
            {props.result && <p>result: {props.result}</p>}
            {props.screen}
        </div>
    )
}
export default Screen;