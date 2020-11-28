
import React, { useState } from "react";

const Selection = (props)=>{
    const [style,setStyle] = useState({"background-color":""});
    const applyColor = ()=>{
        props.applyColor(getColor);
    }
    const getColor = (c)=>{
        let nb =c.background;
        setStyle({
            "background-color":nb,
        })
    }
    return (<div className="fit-box" style={style} onClick={applyColor}>
        <h2 className="subheading" >Selection</h2>
    </div>);
}
export default Selection;