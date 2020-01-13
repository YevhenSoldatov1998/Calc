import React from 'react'
import Area from "./Area/Area";
import {cleanInput, getValue} from "../../redux/calcReducer";

const Areas = (props) => {
    return <div className={`areas`}>
        {props.areas.map(area => {
            return <Area cleanInput={props.cleanInput} getResult={props.getResult} getValue={props.getValue} key={area.id} area={area}/>
        })}
    </div>
};
export default Areas;