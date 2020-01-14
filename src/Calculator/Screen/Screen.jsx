import React from 'react'

const Screen = (props) => {
    return (
        <div className={`screen`}>
            {props.result? props.result:props.screen}
        </div>
    )
}
export default Screen;