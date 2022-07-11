import React from "react"
import "./ImagemCentral.css"


const ImagemCentral = (props) => {
    return(
        <div className="ImagemCentral">
        <img src={props.image} alt= {props.alt} />
        </div>
    )
}
export default ImagemCentral