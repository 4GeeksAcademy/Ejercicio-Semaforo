import React, { useState } from "react";

const TrafficLight = () => {

    const [redLight, setRedLight] = useState("danger")
    const [yellowLight, setYellowLight] = useState("warning")
    const [greenLight, setGreenLight] = useState("success")
    const [purpleLight, setPurpleLight] = useState("info")
    const [show, setShow] = useState(false)
    
    const glow1 = () => {
        if (redLight === "danger") {
            setRedLight("danger shine")
            setYellowLight("warning")
            setGreenLight("success")
            setPurpleLight("info")
        }else {
            setRedLight("danger")
        }
    };

    const glow2 = () => {
        if(yellowLight === "warning") {
            setYellowLight("warning shine")
            setRedLight("danger")
            setGreenLight("success")
            setPurpleLight("info")
        }else {
            setYellowLight("warning")
        }
    };
    
    const glow3 = () => {
        if(greenLight === "success") {
            setYellowLight("warning")
            setRedLight("danger")
            setGreenLight("success shine")
            setPurpleLight("info")
        }else {
            setGreenLight("success")
        }
    };
    const glow4 = () => {
        if(purpleLight === "info") {
            setYellowLight("warning")
            setRedLight("danger")
            setGreenLight("success")
            setPurpleLight("info shine")
        }else {
            setPurpleLight("info")
        }
    };

    const mostrar = () => {
        if (show === true) {
            setShow(false)
        }else {
            setShow(true)
        }
    }


    return (
        <div>
            <div className="container bg-dark d-flex justify-content-evenly flex-column rounded" style={{height: "580px", width: "200px", paddingLeft: "32px", marginTop: "150px"}}>
                <div className={"rounded-circle bg-"+redLight} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={glow1} ></div>
                <div className={"rounded-circle bg-"+yellowLight} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={glow2}></div>
                <div className={"rounded-circle bg-"+greenLight} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={glow3}></div>
                {show && (<div className={"rounded-circle bg-"+purpleLight} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={glow4}></div>)}
            </div>
            <button className="btn btn-primary" onClick={mostrar}>Show</button>
        </div>
    );
};

export default TrafficLight;

