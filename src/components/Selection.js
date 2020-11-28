
import React, { useState } from "react";

const Selection = (props)=>{
    const [background,setBackground] = useState({"background":""});
    const applyColor = ()=>{
        props.applyColor(getColor);
    }
    const getColor = (c)=>{
        let nb =c.background;
        setBackground({
            "background":nb,
        })
    }
    return (<div className="fix-box " style={background} onClick={applyColor}>
        <h2 className="subheading" >Selection</h2>
    </div>);
}
export default Selection;