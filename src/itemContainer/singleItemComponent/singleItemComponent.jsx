import { useState } from "react"
import { Navigate, useNavigate, Link } from "react-router-dom"
import apiURL from "../../apiConfig"

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
        steerTubeLength: props.item.steerTubeLength,
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
        chainLength: props.item.chainLength,
        bottomBracketDiameter: props.item.bottomBracketDiameter,
        bottomBracketType: props.item.bottomBracketType,
        bottomBracketThreading: props.item.bottomBracketThreading,
        pedalType: props.item.pedalType,
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
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${apiURL}/items/${props.item._id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            const parsedItem = await response.json();
            console.log(parsedItem);
            props.setCurrentItem(parsedItem.data);
            navigate('/item');
        } catch (err) {
            console.log(err);
        }
    };


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
            <button id="delete" onClick={() => {
                if (window.confirm(`Do you want to delete ${props.item.productName}?`)) {
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
                            <div className="edit-form">
                                <div className="frame_and_fork">
                                    <h2>Frame and Fork</h2>
                                    Bike Name: <input onChange={handleInputChange} type="text" name="productName" value={updateItem.productName} /><br />
                                    Frame Type: <select onChange={handleInputChange} type="text" name="frameType" value={updateItem.frameType || ""}>
                                        <option value="Mountain">Mountain</option>
                                        <option value="Road">Road</option>
                                        <option value="Cyclocross">Cyclocross</option>
                                        <option value="Track">Track</option>
                                        <option value="BMX">BMX</option>
                                        <option value="Cruiser">Cruiser</option>
                                        <option value="Folding">Folding</option>
                                        <option value="Recumbent">Recumbent</option>
                                    </select><br />
                                    Frame Color: <input onChange={handleInputChange} type="color" name="color" value={updateItem.color || ""} /><br />
                                    Frame Height: <input onChange={handleInputChange} type="text" name="frameHeight" value={updateItem.frameHeight || ""} /><br />
                                    Fork Manufacturer: <input onChange={handleInputChange} type="text" name="forkBrand" value={updateItem.forkBrand || ""} /><br />
                                    Fork Type: <select onChange={handleInputChange} type="text" name="forkType" value={updateItem.forkType || ""} >
                                        <option value="Rigid">Rigid</option>
                                        <option value="Suspension">Suspension</option>
                                    </select><br />
                                    Fork Length: <input onChange={handleInputChange} type="text" name="forkLength" value={updateItem.forkLength || ""} /><br />
                                    Fork End Spacing: <input onChange={handleInputChange} type="number" name="forkEndSpacing" value={updateItem.forkEndSpacing || ""} />mm<br />
                                    Headtube Type: <select onChange={handleInputChange} type="text" name="headTubeType" value={updateItem.headTubeType || ""} >
                                        <option value="Press-Fit">Press-Fit</option>
                                        <option value="Integrated">Integrated</option>
                                    </select><br />
                                    Headtube Length: <input onChange={handleInputChange} type="text" name="headTubeLength" value={updateItem.headTubeLength || ""} /><br />
                                    Rear Dropout Spacing: <input onChange={handleInputChange} type="number" name="dropoutSpacing" value={updateItem.dropoutSpacing || ""} />mm<br />
                                </div>
                                <div className="headset">
                                    <h2>Headset</h2>
                                    Headset Size: <input onChange={handleInputChange} type="text" name="headsetSize" value={updateItem.headsetSize || ""} /><br />
                                    Headset Type: <select onChange={handleInputChange} type="text" name="headsetType" value={updateItem.headsetType || ""} >
                                        <option value="Threadless">Threadless</option>
                                        <option value="Threaded">Threaded</option>
                                        <option value="Internal">Internal</option>
                                        <option value="Integrated">Integrated</option>
                                    </select><br />
                                    Headset Spacer Stack Height: <input onChange={handleInputChange} type="text" name="spacerStackHeight" value={updateItem.spacerStackHeight || ""} />mm<br />
                                    Stem Length: <input onChange={handleInputChange} type="number" name="stemLength" value={updateItem.stemLength || ""} />mm<br />
                                    Brake Lever Type: <input onChange={handleInputChange} type="text" name="brakeType" value={updateItem.brakeType || ""} /><br />
                                    Stem Clamp Size: <select onChange={handleInputChange} type="text" name="stemClampSize" value={updateItem.stemClampSize || ""} >
                                        <option value="22.2">22.2mm</option>
                                        <option value="23.8">23.8mm</option>
                                        <option value="25">25mm</option>
                                        <option value="25.4">25.4mm</option>
                                        <option value="26">26mm</option>
                                        <option value="27">27mm</option>
                                        <option value="31.7 - 31.8">31.7 - 31.8mm</option>
                                        <option value="35">35mm</option>
                                    </select><br />
                                    Stem Rise angle: <input onChange={handleInputChange} type="number" name="stemAngle" value={updateItem.stemAngle || ""} />°<br />
                                    Handlebar Type: <select onChange={handleInputChange} type="text" name="handlebarType" value={updateItem.handlebarType || ""} >
                                        <option value="Aero">Aero</option>
                                        <option value="Ape Hanger">Ape Hanger</option>
                                        <option value="Bullhorn">Bullhorn</option>
                                        <option value="Condorino">Condorino</option>
                                        <option value="Cruiser">Cruiser</option>
                                        <option value="Drop">Drop</option>
                                        <option value="Flat">Flat</option>
                                        <option value="Mustache">Mustache</option>
                                        <option value="North Road">North Road</option>
                                        <option value="Riser">Riser</option>
                                        <option value="Upright">Upright</option>
                                    </select><br />
                                    Front Brake Type: <select onChange={handleInputChange} type="text" name="frontBrakeType" value={updateItem.frontBrakeType || ""} >
                                        <option value="Cantilever">Cantilever</option>
                                        <option value="Caliper">Caliper</option>
                                        <option value="Coaster">Coaster</option>
                                        <option value="Drum">Drum</option>
                                        <option value="Hydraulic disc">Hydraulic disc</option>
                                        <option value="Mechanical disc">Mechanical disc</option>
                                        <option value="V-Brake">V-Brake</option>
                                    </select><br />
                                    Rear Brake Type: <select onChange={handleInputChange} type="text" name="rearBrakeType" value={updateItem.rearBrakeType || ""} >
                                        <option value="Cantilever">Cantilever</option>
                                        <option value="Caliper">Caliper</option>
                                        <option value="Coaster">Coaster</option>
                                        <option value="Drum">Drum</option>
                                        <option value="Hydraulic disc">Hydraulic disc</option>
                                        <option value="Mechanical disc">Mechanical disc</option>
                                        <option value="V-Brake">V-Brake</option>
                                    </select><br />
                                </div>
                                <div className="wheels">
                                    <h2>Wheels</h2>
                                    Rim Size: <select onChange={handleInputChange} type="text" name="rimSize" value={updateItem.rimSize || ""} >
                                        <option value="">---Select One---</option>
                                        <option value='16"'>16"</option>
                                        <option value='20"'>20"</option>
                                        <option value='24"'>24"</option>
                                        <option value='26"'>26"</option>
                                        <option value='27.5'>27.5 (650b)</option>
                                        <option value='700c'>700c (29")</option>
                                        <option value='32"'>32"</option>
                                        <option value='36"'>36"</option>
                                    </select><br />
                                    # Spoke Holes Front Wheel: <input onChange={handleInputChange} type="number" name="hubSpokeCountFront" value={updateItem.hubSpokeCountFront || ""} /><br />
                                    # Spoke Holes Rear Wheel: <input onChange={handleInputChange} type="number" name="hubSpokeCountRear" value={updateItem.hubSpokeCountRear || ""} /><br />
                                    Tire Width: <input onChange={handleInputChange} type="number" name="tireSize" value={updateItem.tireSize || ""} />"<br />
                                    Hub Type Front: <input onChange={handleInputChange} type="text" name="hubTypeFront" value={updateItem.hubTypeFront || ""} /><br />
                                    Hub Type Rear: <input onChange={handleInputChange} type="text" name="hubTypeRear" value={updateItem.hubTypeRear || ""} /><br />
                                    Front Hub Length: <select onChange={handleInputChange} type="number" name="hubLengthFront" value={updateItem.hubLengthFront || ""} >
                                        <option value="">---Select One---</option>
                                        <option value="70">70mm </option>
                                        <option value="74">74mm</option>
                                        <option value="79">79mm</option>
                                        <option value="91">91mm</option>
                                        <option value="96">96mm</option>
                                        <option value="100">100mm</option>
                                        <option value="110">110mm</option>
                                        <option value="120">120mm</option>
                                        <option value="130">130mm</option>
                                        <option value="135">135mm</option>
                                        <option value="142">142mm</option>
                                        <option value="148">148mm</option>
                                        <option value="150">150mm</option></select><br />
                                    Rear Hub Length: <select onChange={handleInputChange} type="number" name="hubLengthRear" value={updateItem.hubLengthRear || ""} >
                                        <option value="">---Select One---</option>
                                        <option value="110">110mm </option>
                                        <option value="120">120mm</option>
                                        <option value="126">126mm</option>
                                        <option value="130">130mm</option>
                                        <option value="135">135mm</option>
                                        <option value="140">141mm</option>
                                        <option value="145">142mm</option>
                                        <option value="150">148mm</option>
                                        <option value="160">150mm</option>
                                        <option value="170">170mm</option></select><br />
                                    Front Hub # of Spokes: <select onChange={handleInputChange} type="number" name="hubSpokeCountFront" value={updateItem.hubSpokeCountFront || ""} >
                                        <option value="">---Select One---</option>
                                        <option value="20">20</option>
                                        <option value="24">24</option>
                                        <option value="28">28</option>
                                        <option value="32">32</option>
                                        <option value="36">36</option>
                                        <option value="48">48</option>
                                    </select><br />
                                    Rear Hub # of Spokes: <select onChange={handleInputChange} type="number" name="hubSpokeCountRear" value={updateItem.hubSpokeCountRear || ""} >
                                        <option value="">---Select One---</option>
                                        <option value="20">20</option>
                                        <option value="24">24</option>
                                        <option value="28">28</option>
                                        <option value="32">32</option>
                                        <option value="36">36</option>
                                        <option value="48">48</option>
                                    </select><br />
                                    Front Wheel Spoke Length: <input onChange={handleInputChange} type="number" name="spokeLengthFront" value={updateItem.spokeLengthFront || ""} />mm<br />
                                    Rear Wheel Spoke Length: <input onChange={handleInputChange} type="number" name="spokeLengthRear" value={updateItem.spokeLengthRear || ""} />mm<br />
                                </div>
                                <div className="seat">
                                    <h2 id="seat">Seatpost {"&"} Saddle</h2>

                                    Seatpost Manufacturer: <input onChange={handleInputChange} type="text" name="seatPostBrand" value={updateItem.seatPostBrand || ""} /><br />
                                    Seatpost Diameter: <select onChange={handleInputChange} type="number" name="seatPostDiameter" value={updateItem.seatPostDiameter || ""} >
                                        <option value="">---Select One---</option>
                                        <option value="25">25mm</option>
                                        <option value="25.4">25.4mm</option>
                                        <option value="26.8">26.8</option>
                                        <option value="27">27</option>
                                        <option value="27.2">27.2</option>
                                        <option value="28.6">28.6</option>
                                        <option value="30.9">30.9</option>
                                        <option value="31.6">31.6</option>
                                        <option value="31.8">31.8</option>
                                        <option value="34.9">34.9</option>
                                    </select><br />
                                    Seatpost Collar Size: <select onChange={handleInputChange} type="number" name="seatPostCollar" value={updateItem.seatPostCollar || ""} >
                                        <option value="">---Select One---</option>
                                        <option value="25.4">25.4mm</option>
                                        <option value="28.6">28.6/29mm</option>
                                        <option value="29.8">29.8mm/30mm</option>
                                        <option value="31.8">31.8/32mm</option>
                                        <option value="34.9">34.9/35mm</option>
                                        <option value="36.4">36.4</option>
                                        <option value="38.6">38.6mm/39mm</option>
                                    </select><br />
                                    Saddle Brand: <input onChange={handleInputChange} type="text" name="saddleBrand" value={updateItem.saddleBrand || ""} /><br />
                                </div>
                                <div className="crankset">
                                    <h2>Crankset {"&"} Bottom Bracket</h2>
                                    Chainring Teeth #: <input onChange={handleInputChange} type="text" name="chainRingTeeth" value={updateItem.chainRingTeeth || ""} /><br />
                                    Bolt Circle Diameter: <input onChange={handleInputChange} type="number" name="chainRingBCD" value={updateItem.chainRingBCD || ""} />mm<br />
                                    Bottom Bracket Type: <select onChange={handleInputChange} type="text" name="bottomBracketType" value={updateItem.bottomBracketType || ""} >
                                        <option value="">---Select One---</option>
                                        <option value="Cartridge">Cartridge</option>
                                        <option value="External">External</option>
                                        <option value="Press-fit">Press-fit</option>
                                    </select><br />
                                    Bottom Bracket Threading: <select onChange={handleInputChange} type="text" name="bottomBracketThreading" value={updateItem.bottomBracketThreading || ""} >
                                    <option value="">---Select One---</option>
                                        <option value="I.S.O.">I.S.O.</option>
                                        <option value="French">French</option>
                                        <option value="ISIS">ISIS</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Swiss">Swiss</option></select><br />
                                        Pedal Type: <select onChange={handleInputChange} type="text" name="pedalType" value={updateItem.pedalType || ""} >
                                    <option value="">---Select One---</option>
                                        <option value="Clipless">Clipless</option>
                                        <option value="Flats">Flats</option>
                                        <option value="Toe Clips">Toe Clips</option>
                                    </select><br />
                                    Bottom Bracket Shell Width: <input onChange={handleInputChange} type="number" name="bottomBracketSize" value={updateItem.bottomBracketSize || ""} />mm<br />
                                    Crank Arm Length: <input onChange={handleInputChange} type="number" name="crankArmLength" value={updateItem.crankArmLength || ""} />mm<br />
                                    Spindle Length: <input onChange={handleInputChange} type="number" name="spindleLength" value={updateItem.spindleLength || ""} />mm<br />
                                    Cog Teeth: <input onChange={handleInputChange} type="number" name="cogTeeth" value={updateItem.cogTeeth || ""} />mm<br />
                                </div>
                            </div>
                            <br></br>
                            <button id="submit" type="submit">Submit</button>
                        </form>
                    </div>
                    :
                    <button id="edit" onClick={toggleShowing}>Update</button>
            }
            <>
            </>
            <Link to="/item">
                <button id="view" onClick={showItem}>View</button>
            </Link>
        </div>
    )
}

export default SingleItemComponent;