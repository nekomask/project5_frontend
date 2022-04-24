import React from "react";
import { ReactDOM } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SingleItemComponent from "../itemContainer/singleItemComponentn/singleItemComponent";
import FrameTypeComponent from "../nonItemComponents/frameTypeComponent/frameTypeComponent";

export function Show(props) {
  //  let {id} = useParams();
  //  console.log(useParams())
   // let index = props.item.findIndex(e => e.id === parseInt(id));
  //  let item= this.props.item[index];
    return (
        <div>This is the Show page for {props.currentItem.productName}<br></br>
        Frame Type: {props.currentItem.frameType}<br></br>
        Frame Height: {props.currentItem.frameHeight}<br></br>
        Fork Brand: {props.currentItem.forkBrand}<br></br>
        Fork Type: {props.currentItem.forkType}<br></br>
        Fork Length: {props.currentItem.forkLength}<br></br>
        Headtube Type: {props.currentItem.headTubeType}<br></br>
        Headtube Length: {props.currentItem.headTubeLength}<br></br>
        Headset Size: {props.currentItem.headsetSize}<br></br>
        Headset Type: {props.currentItem.headsetType}<br></br>
        Spacer Stack Height: {props.currentItem.spacerStackHeight}<br></br>
        Stem Length: {props.currentItem.stemLength}<br></br>
        Stem Clamp Size: {props.currentItem.stemClampSize}<br></br>
        Stem Angle: {props.currentItem.stemAngle}<br></br>
        Handlebar Type: {props.currentItem.handlebarType}<br></br>
        Seatpost Brand: {props.currentItem.seatPostBrand}<br></br>
        Seatpost Diameter: {props.currentItem.seatPostDiameter}<br></br>
        Saddle Brand: {props.currentItem.saddleBrand}<br></br>
        Brake Type: {props.currentItem.brakeType}<br></br>
        Front Brake Brand: {props.currentItem.frontBrakeBrand}<br></br>
        Rear Brake Brand: {props.currentItem.rearBrakeBrand}<br></br>
        Chainring Teeth: {props.currentItem.chainRingTeeth}<br></br>
        Chainring BCD: {props.currentItem.chainRingBCD}<br></br>
        Bottom Bracket Diameter: {props.currentItem.bottomBracketDiameter}<br></br>
        Bottom Bracket Type: {props.currentItem.bottomBracketType}<br></br>
        Crank Arm Length: {props.currentItem.crankArmLength}<br></br>
        Rim Size: {props.currentItem.rimSize}<br></br>
        Tire Size: {props.currentItem.tireSize}<br></br>
        Forkend Spacing: {props.currentItem.forkEndSpacing}<br></br>
        Dropout Spacing: {props.currentItem.dropoutSpacing}<br></br>
        Hub Type Front: {props.currentItem.hubTypeFront}<br></br>
        Hub Type Rear: {props.currentItem.hubTypeRear}<br></br>
        Hub Length Front: {props.currentItem.hubLengthFront}<br></br>
        Hub Length Rear: {props.currentItem.hubLengthRear}<br></br>
        Hub Spoke Count Front: {props.currentItem.hubSpokeCountFront}<br></br>
        Hub Spoke Count Rear: {props.currentItem.hubSpokeCountRear}<br></br>
        Spoke Length Front: {props.currentItem.spokeLengthFront}<br></br>
        Spoke Length Rear: {props.currentItem.spokeLengthRear}
             </div>
                    

    )
}

export default Show;