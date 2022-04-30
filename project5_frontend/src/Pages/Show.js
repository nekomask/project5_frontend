import React from "react";
import '../App.css';




export function Show(props) {

    const frameColor = props.currentItem.color


    let bikeType = props.currentItem.frameType

    let URL
    if (bikeType === "BMX") {
        URL = "./images/bmx.png"
    } else if (bikeType === "Road") {
        URL = "./images/road.png"
    } else if (bikeType === "Mountain") {
        URL = "./images/mtb.png"
    } else if (bikeType === "Track") {
        URL = "./images/track.png"
    } else if (bikeType === "Recumbent") {
        URL = "./images/recumbent.png"
    }

    return (
        <div className="showPage">
           <div className="nav">
               <h2 id="myBikeDatabase"><a id="navlinks" href="/create">myBikeDatabase</a></h2>
            <div className="links">
            <a id="navlinks" href="/create">Bikes</a>
                <a id="navlinks" href="/about">About</a>
               
            </div></div><br />
            <div className="showName">This is the Show page for {props.currentItem.productName}</div><br />
            <img id="frame2" src={URL} style={{ backgroundColor: frameColor }} className="show" /><br />
            <div className="showItems">
                <div className="showFrame">
                <h3>Frame {"&"} Fork</h3>
            <p id="showCategory">Frame Type: <div className="showValue">{props.currentItem.frameType}</div></p>

            <p id="showCategory">Frame Height: <div className="showValue">{props.currentItem.frameHeight}</div></p>
            <p id="showCategory"> Fork Brand: <div className="showValue">{props.currentItem.forkBrand}</div></p>
            <p id="showCategory"> Fork Type: <div className="showValue">{props.currentItem.forkType}</div></p>
            <p id="showCategory"> Fork Length: <div className="showValue">{props.currentItem.forkLength}</div></p>
            <p id="showCategory">Forkend Spacing: <div className="showValue">{props.currentItem.forkEndSpacing}</div></p>
            <p id="showCategory">Dropout Spacing: <div className="showValue">{props.currentItem.dropoutSpacing}</div></p>
            <p id="showCategory"> Headtube Type: <div className="showValue">{props.currentItem.headTubeType}</div></p>
            <p id="showCategory">Headtube Length: <div className="showValue">{props.currentItem.headTubeLength}</div></p>
            </div>
            <div className="showBrakes">
            <h3>Headset {"&"} Brakes</h3>
            <p id="showCategory"> Headset Size: <div className="showValue">{props.currentItem.headsetSize}</div></p>
            <p id="showCategory"> Headset Type: <div className="showValue">{props.currentItem.headsetType}</div></p>
            <p id="showCategory"> Spacer Stack Height: <div className="showValue">{props.currentItem.spacerStackHeight}</div></p>
            <p id="showCategory"> Stem Length: <div className="showValue">{props.currentItem.stemLength}</div></p>
            <p id="showCategory">Stem Clamp Size: <div className="showValue">{props.currentItem.stemClampSize}</div></p>
            <p id="showCategory"> Stem Angle: <div className="showValue">{props.currentItem.stemAngle}</div></p>
            <p id="showCategory"> Handlebar Type: <div className="showValue">{props.currentItem.handlebarType}</div></p>
           <p id="showCategory"> Brake Lever Type: <div className="showValue">{props.currentItem.brakeType}</div></p>
           <p id="showCategory">  Front Brake Type: <div className="showValue">{props.currentItem.frontBrakeType}</div></p> 
           <p id="showCategory">  Rear Brake Type: <div className="showValue">{props.currentItem.rearBrakeType}</div></p> 
           </div>
           <div className="showSeatpost">
           <h3>Seatpost {"&"} Saddle</h3>
            <p id="showCategory">Seatpost Brand: <div className="showValue">{props.currentItem.seatPostBrand}</div></p>
           <p id="showCategory"> Seatpost Diameter: <div className="showValue">{props.currentItem.seatPostDiameter}</div></p>
           <p id="showCategory"> Seatpost Collar Size: <div className="showValue">{props.currentItem.seatPostCollar}</div></p>
           <p id="showCategory"> Seatpost Length: <div className="showValue">{props.currentItem.seatPostLength}</div></p>
           <p id="showCategory"> Saddle Brand: <div className="showValue">{props.currentItem.saddleBrand}</div></p>
           </div>
           <div className="showCrankset">
           <h3>Drivetrain</h3>
           <p id="showCategory"> Chainring Teeth: <div className="showValue">{props.currentItem.chainRingTeeth}</div></p> 
           <p id="showCategory"> Chainring BCD: <div className="showValue">{props.currentItem.chainRingBCD}</div></p> 
           <p id="showCategory"> Bottom Bracket Diameter: <div className="showValue">{props.currentItem.bottomBracketDiameter}</div></p> 
           <p id="showCategory"> Bottom Bracket Type: <div className="showValue">{props.currentItem.bottomBracketType}</div></p>
           
           <p id="showCategory">Crank Arm Length: <div className="showValue">{props.currentItem.crankArmLength}</div></p>
           </div>
           <div className="showWheels">
            <h3>Wheels</h3>
            <p id="showCategory">Rim Size: <div className="showValue">{props.currentItem.rimSize}</div></p>
            <p id="showCategory">Tire Size: <div className="showValue">{props.currentItem.tireSize}</div></p>
            <p id="showCategory">Hub Type Front: <div className="showValue">{props.currentItem.hubTypeFront}</div></p>
            <p id="showCategory">Hub Type Rear: <div className="showValue">{props.currentItem.hubTypeRear}</div></p>
            <p id="showCategory">Hub Length Front: <div className="showValue">{props.currentItem.hubLengthFront}</div></p>
            <p id="showCategory">Hub Length Rear: <div className="showValue">{props.currentItem.hubLengthRear}</div></p>
            <p id="showCategory">Hub Spoke Count Front: <div className="showValue">{props.currentItem.hubSpokeCountFront}</div></p>
            <p id="showCategory">Hub Spoke Count Rear: <div className="showValue">{props.currentItem.hubSpokeCountRear}</div></p>
            <p id="showCategory">Spoke Length Front: <div className="showValue">{props.currentItem.spokeLengthFront}</div></p>
            <p id="showCategory">Spoke Length Rear: <div className="showValue">{props.currentItem.spokeLengthRear}</div></p>
            </div>
        </div>
        </div>

    )
}

export default Show;