import React from "react";
import { ReactDOM } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SingleItemComponent from "../itemContainer/singleItemComponentn/singleItemComponent";
import FrameTypeComponent from "../nonItemComponents/frameTypeComponent/frameTypeComponent";




export function Show(props) {

    const frameColor = props.currentItem.color


    let bikeType = props.currentItem.frameType

    let URL
    if(bikeType === "BMX") {
        URL="./images/bmx.png"
    }else if(bikeType === "Road") {
        URL="./images/road.png"
    }else if(bikeType === "Mountain") {
        URL="./images/mtb.png"
    }else if(bikeType === "Track") {
        URL="./images/track.png"
    }

    return (
        <div>
        This is the Show page for {props.currentItem.productName}<br />
        <img id="frame2" src={URL} style={{ backgroundColor: frameColor}} className="show" /><br />
        Frame Type: {props.currentItem.frameType}<br />
      
        Frame Height: {props.currentItem.frameHeight}<br />
        Fork Brand: {props.currentItem.forkBrand}<br />
        Fork Type: {props.currentItem.forkType}<br />
        Fork Length: {props.currentItem.forkLength}<br />
        Headtube Type: {props.currentItem.headTubeType}<br />
        Headtube Length: {props.currentItem.headTubeLength}<br />
        Headset Size: {props.currentItem.headsetSize}<br />
        Headset Type: {props.currentItem.headsetType}<br />
        Spacer Stack Height: {props.currentItem.spacerStackHeight}<br />
        Stem Length: {props.currentItem.stemLength}<br />
        Stem Clamp Size: {props.currentItem.stemClampSize}<br />
        Stem Angle: {props.currentItem.stemAngle}<br />
        Handlebar Type: {props.currentItem.handlebarType}<br />
        Seatpost Brand: {props.currentItem.seatPostBrand}<br />
        Seatpost Diameter: {props.currentItem.seatPostDiameter}<br />
        Saddle Brand: {props.currentItem.saddleBrand}<br />
        Brake Lever Type: {props.currentItem.brakeType}<br />
        Front Brake Type: {props.currentItem.frontBrakeType}<br />
        Rear Brake Type: {props.currentItem.rearBrakeType}<br />
        Chainring Teeth: {props.currentItem.chainRingTeeth}<br />
        Chainring BCD: {props.currentItem.chainRingBCD}<br />
        Bottom Bracket Diameter: {props.currentItem.bottomBracketDiameter}<br />
        Bottom Bracket Type: {props.currentItem.bottomBracketType}<br />
        Crank Arm Length: {props.currentItem.crankArmLength}<br />
        Rim Size: {props.currentItem.rimSize}<br />
        Tire Size: {props.currentItem.tireSize}<br />
        Forkend Spacing: {props.currentItem.forkEndSpacing}<br />
        Dropout Spacing: {props.currentItem.dropoutSpacing}<br />
        Hub Type Front: {props.currentItem.hubTypeFront}<br />
        Hub Type Rear: {props.currentItem.hubTypeRear}<br />
        Hub Length Front: {props.currentItem.hubLengthFront}<br />
        Hub Length Rear: {props.currentItem.hubLengthRear}<br />
        Hub Spoke Count Front: {props.currentItem.hubSpokeCountFront}<br />
        Hub Spoke Count Rear: {props.currentItem.hubSpokeCountRear}<br />
        Spoke Length Front: {props.currentItem.spokeLengthFront}<br />
        Spoke Length Rear: {props.currentItem.spokeLengthRear}<br />
             </div>
                    

    )
}

export default Show;