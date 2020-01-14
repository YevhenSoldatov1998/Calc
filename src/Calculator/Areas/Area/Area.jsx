import React from 'react'

const Area = (props) => {
    const call_getValue = (val) => {
        if(val === '='){
            props.getResult()
        }
        else if(val === 'C'){
            props.cleanInput()
        }
        else if(val === '←'){
            props.cleanLastValue();
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