import { useState } from "react"
import { Navigate, useNavigate, Link } from "react-router-dom"

const SingleItemComponent = (props) => {
    //sets 2 types of states to determine whether state is valid
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    //setting an object in state: this state is gonna keep track of what the user has put in the form
    // and change this object as the user updates the form
    const [showing, setShowing] = useState(false)
    //function for showing our form when button is clicked
    const toggleShowing = () => {
        //sets variable equal to its opposite for toggling
        setShowing(!showing)
    }
    const navigate = useNavigate()

    const [updateItem, setUpdateItem] = useState({
        productName: props.item.productName,
        frameType: props.item.frameType,
        frameHeight: props.item.frameHeight,
        forkBrand: props.item.forkBrand,
        forkType: props.item.forkType,
        forkLength: props.item.forkLength,
        headTubeType: props.item.headTubeType,
        headTubeLength: props.item.headTubeLength,
        headsetSize: props.item.headsetSize,
        headsetType: props.item.headsetType,
        spacerStackHeight: props.item.spacerStackHeight,
        stemLength: props.item.stemLength,
        stemClampSize: props.item.stemClampSize,
        stemAngle: props.item.stemAngle,
        handlebarType: props.item.handlebarType,
        seatPostBrand: props.item.seatPostBrand,
        seatPostDiameter: props.item.seatPostDiameter,
        seatPostLength: props.item.seatPostLength,
        saddleBrand: props.item.saddleBrand,
        brakeType: props.item.brakeType,
        frontBrakeType: props.item.frontBrakeType,
        rearBrakeType: props.item.rearBrakeType,
        chainRingTeeth: props.item.chainRingTeeth,
        chainRingBCD: props.item.chainRingBCD,
        bottomBracketDiameter: props.item.bottomBracketDiameter,
        bottomBracketType: props.item.bottomBracketType,
        crankArmLength: props.item.crankArmLength,
        rimSize: props.item.rimSize,
        tireSize: props.item.tireSize,
        forkEndSpacing: props.item.forkEndSpacing,
        dropoutSpacing: props.item.dropoutSpacing,
        hubTypeFront: props.item.hubTypeFront,
        hubTypeRear: props.item.hubTypeRear,
        hubLengthFront: props.item.hubLengthFront,
        hubLengthRear: props.item.hubLengthRear,
        hubSpokeCountFront: props.item.hubSpokeCountFront,
        hubSpokeCountRear: props.item.hubSpokeCountRear,
        spokeLengthFront: props.item.spokeLengthFront,
        spokeLengthRear: props.item.spokeLengthRear,
        rearAxelLength: props.item.rearAxelLength,
        frontAxelLength: props.item.frontAxelLength,
        cogTeeth: props.item.cogTeeth,
        spindleLength: props.item.spindleLength,
        _id: props.item._id
    })
    //show route

    const showItem = async () => {
        try {
            const item = await fetch(`https://mybikedatabase-backend.herokuapp.com/items/${props.item._id}`)
            const parsedItem = await item.json();
            console.log(parsedItem)
            props.setCurrentItem(parsedItem.data)
        } catch (err) {
            console.log(err)
        }
    }

    //for every input we listen for a change and update the item in state whenever the user changes it
    const handleInputChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setUpdateItem({
            //gives us old properties using e.target(like an event listener) for universal application to all of our properties that we're changing inputs for
            ...updateItem,
            [e.target.name]: e.target.value
        })
    }
    const submitUpdateItem = (e) => {
        e.preventDefault();
        console.log("updating item!")
        //call function from the Parent to be given the form data
        props.updateItem(props.item._id, updateItem);
        setShowing(false)
    }
    return (
        <div className="index-single-item">
            <div className="item-name">
                <h2 onClick={showItem}>{props.item.productName}</h2>
            </div>
            <button id="single-item" onClick={() => {
                if (window.confirm('Delete selected item?')) {
                    return props.deleteItem(props.item._id)
                }
            }}>Delete</button>
            {
                showing ?
                    <div id="edit-item-form">
                        <button onClick={toggleShowing}>x</button>
                        <form onSubmit={submitUpdateItem}>
                            {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                            {props.newItemServerError ? <p className="form-error">{props.newItemServerError}</p> : null}
                            <h2>Frame and Fork</h2>
                            Bike Name: <input onChange={handleInputChange} type="text" name="productName" value={updateItem.productName} /><br />
                            Frame Type: <input onChange={handleInputChange} type="text" name="frameType" value={updateItem.frameType || ""} /><br />
                            Frame Color: <input onChange={handleInputChange} type="color" name="color" value={updateItem.color || ""} /><br />
                            Frame Height: <input onChange={handleInputChange} type="text" name="frameHeight" value={updateItem.frameHeight || ""} /><br />
                            Fork Manufacturer: <input onChange={handleInputChange} type="text" name="forkBrand" value={updateItem.forkBrand || ""} /><br />
                            Fork Type: <input onChange={handleInputChange} type="text" name="forkType" value={updateItem.forkType || ""} /><br />
                            Fork Length: <input onChange={handleInputChange} type="text" name="forkLength" value={updateItem.forkLength || ""} /><br />
                            Fork End Spacing: <input onChange={handleInputChange} type="number" name="forkEndSpacing" value={updateItem.forkEndSpacing || ""} />mm<br />
                            Headtube Type: <input onChange={handleInputChange} type="text" name="headTubeType" value={updateItem.headTubeType || ""} /><br />
                            Headtube Length: <input onChange={handleInputChange} type="text" name="headTubeLength" value={updateItem.headTubeLength || ""} /><br />
                            Rear Dropout Spacing: <input onChange={handleInputChange} type="number" name="dropoutSpacing" value={updateItem.dropoutSpacing || ""} />mm<br />
                            <h2>Headset</h2>
                            Headset Size: <input onChange={handleInputChange} type="text" name="headsetSize" value={updateItem.headsetSize || ""} /><br />
                            Headset Type: <input onChange={handleInputChange} type="text" name="headsetType" value={updateItem.headsetType || ""} /><br />
                            Headset Spacer Stack Height: <input onChange={handleInputChange} type="text" name="spacerStackHeight" value={updateItem.spacerStackHeight || ""} />mm<br />
                            Stem Length: <input onChange={handleInputChange} type="number" name="stemLength" value={updateItem.stemLength || ""} />mm<br />
                            Brake Lever Type: <input onChange={handleInputChange} type="text" name="brakeType" value={updateItem.brakeType || ""} /><br />
                            Stem Clamp Size: <input onChange={handleInputChange} type="text" name="stemClampSize" value={updateItem.stemClampSize || ""} /><br />
                            Stem Rise angle: <input onChange={handleInputChange} type="number" name="stemAngle" value={updateItem.stemAngle || ""} />°<br />
                            Handlebar Type: <input onChange={handleInputChange} type="text" name="handlebarType" value={updateItem.handlebarType || ""} /><br />
                            Front Brake Type: <input onChange={handleInputChange} type="text" name="frontBrakeType" value={updateItem.frontBrakeType || ""} /><br />
                            Rear Brake Type: <input onChange={handleInputChange} type="text" name="rearBrakeType" value={updateItem.rearBrakeType || ""} /><br />

                            <h2>Wheels</h2>
                            Rim Size: <input onChange={handleInputChange} type="text" name="rimSize" value={updateItem.rimSize || ""} /><br />
                            # Spoke Holes Front Wheel: <input onChange={handleInputChange} type="number" name="hubSpokeCountFront" value={updateItem.hubSpokeCountFront || ""} /><br />
                            # Spoke Holes Rear Wheel: <input onChange={handleInputChange} type="number" name="hubSpokeCountRear" value={updateItem.hubSpokeCountRear || ""} /><br />
                            Tire Width: <input onChange={handleInputChange} type="number" name="tireSize" value={updateItem.tireSize || ""} />"<br />
                            Hub Type Front: <input onChange={handleInputChange} type="text" name="hubTypeFront" value={updateItem.hubTypeFront || ""} /><br />
                            Hub Type Rear: <input onChange={handleInputChange} type="text" name="hubTypeRear" value={updateItem.hubTypeRear || ""} /><br />
                            Front Hub Length: <input onChange={handleInputChange} type="number" name="hubLengthFront" value={updateItem.hubLengthFront || ""} />mm<br />
                            Rear Hub Length: <input onChange={handleInputChange} type="number" name="hubLengthRear" value={updateItem.hubLengthRear || ""} />mm<br />
                            Front Hub # of Spokes: <input onChange={handleInputChange} type="number" name="hubSpokeCountFront" value={updateItem.hubSpokeCountFront || ""} /><br />
                            Rear Hub # of Spokes: <input onChange={handleInputChange} type="number" name="hubSpokeCountRear" value={updateItem.hubSpokeCountRear || ""} /><br />
                            Front Wheel Spoke Length: <input onChange={handleInputChange} type="number" name="spokeLengthFront" value={updateItem.spokeLengthFront || ""} />mm<br />
                            Rear Wheel Spoke Length: <input onChange={handleInputChange} type="number" name="spokeLengthRear" value={updateItem.spokeLengthRear || ""} />mm<br />
                            <h2 id="seat">Seatpost {"&"} Saddle</h2>

                            Seatpost Manufacturer: <input onChange={handleInputChange} type="text" name="seatPostBrand" value={updateItem.seatPostBrand || ""} /><br />
                            Seatpost Diameter: <input onChange={handleInputChange} type="number" name="seatPostDiameter" value={updateItem.seatPostDiameter || ""} />mm<br />
                            Seatpost Collar Size: <input onChange={handleInputChange} type="number" name="seatPostCollar" value={updateItem.seatPostCollar || ""} />mm<br />
                            Saddle Brand: <input onChange={handleInputChange} type="text" name="saddleBrand" value={updateItem.saddleBrand || ""} /><br />

                            <h2>Crankset {"&"} Bottom Bracket</h2>
                            Chainring Teeth #: <input onChange={handleInputChange} type="text" name="chainRingTeeth" value={updateItem.chainRingTeeth || ""} /><br />
                            Bolt Circle Diameter: <input onChange={handleInputChange} type="number" name="chainRingBCD" value={updateItem.chainRingBCD || ""} />mm<br />
                            Bottom Bracket Type: <input onChange={handleInputChange} type="text" name="bottomBracketType" value={updateItem.bottomBracketType || ""} /><br />
                            Bottom Bracket Shell Width: <input onChange={handleInputChange} type="number" name="bottomBracketSize" value={updateItem.bottomBracketSize || ""} />mm<br />
                            Crank Arm Length: <input onChange={handleInputChange} type="number" name="crankArmLength" value={updateItem.crankArmLength || ""} />mm<br />


                            <br></br>
                            <button id="submit" type="submit">Submit</button>
                        </form>
                    </div>
                    :
                    <button id="single-item" onClick={toggleShowing}>Edit this bike</button>
            }
            <>
            </>
            <Link to="/item">
                <button id="single-item" onClick={showItem}>View</button>
            </Link>
        </div>
    )
}

export default SingleItemComponent;