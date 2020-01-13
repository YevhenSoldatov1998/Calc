import React from 'react'

const Area = (props) => {
    const call_getValue = (val) => {
        debugger
        if(val === '='){
            props.getResult()
        }
        else if(val === 'C'){
            props.cleanInput()
        }
        else{
            props.getValue(val)
        }

    };
    return (
        <div onClick={()=>call_getValue(props.area.value)} className={`area`}>{props.area.value}</div>
    )
}
export default Area;