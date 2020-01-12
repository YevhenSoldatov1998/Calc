import React from 'react'
import Area from "./Area/Area";

const Areas = (props) => {
    return <div className={`areas`}>
        {props.areas.map(area => {
            return <Area key={area.id} area={area}/>
        })}
    </div>
};
export default Areas;