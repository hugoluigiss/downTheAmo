import React from "react";
import "./VideoCentral.css"

const VideoCentral = (props) => {
    return(
        <div className="videoCentral">
            {props.video}
        </div>
    )
}
export default VideoCentral