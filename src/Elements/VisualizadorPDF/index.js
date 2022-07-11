import React from "react";
import "./VisualizadorPDF.css"

const VisualizadorPDF = () => {
    return(
        <section className="pdf">
        <embed src="/img/doc1.pdf" width="80%" height="1100px" />
        </section>
    )
}

export default VisualizadorPDF