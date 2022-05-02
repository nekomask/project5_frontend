import { useState } from "react";
import '../../App.css';

const NewItemComponent = (props) => {
    //the state of whether our form is declared to be showing
    const [showing, setShowing] = useState(false)
    //function for showing our form when button is clicked
    const toggleShowing = () => {
        //sets variable equal to its opposite for toggling
        setShowing(!showing)
    }
    //sets 2 types of states to determine whether state is valid
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    //setting an object in state: this state is gonna keep track of what the user has put in the form and build this object as the user updates the form
    const [newItem, setNewItem] = useState({
        productName: "",
        frameType: "",
        frameHeight: "",
        steerTubeLength: "",
        forkBrand: "",
        forkType: "",
        headsetSize: "",
        headsetType: "",
        stemLength: "",
        stemClampSize: "",
        stemAngle: "",
        handlebarType: "",
        seatPostBrand: "",
        seatPostDiameter: "",
        saddleBrand: "",
        brakeType: "",
        frontBrakeBrand: "",
        rearBrakeBrand: "",
        chainRingTeeth: "",
        chainRingBCD: "",
        bottomBracketSize: "",
        bottomBracketType: "",
        crankArmLength: "",
        rimSize: "",
        tireSize: "",
        forkEndSpacing: "",
        dropoutSpacing: "",
        hubTypeFront: "",
        hubTypeRear: "",
        hubLengthFront: "",
        hubLengthRear: "",
        hubSpokeCountFront: "",
        hubSpokeCountRear: "",
        spokeLengthFront: "",
        spokeLengthRear: "",
    })

    //for every input we listen for a change and update the item in state whenever the user changes it
    const handleInputChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        setNewItem({
            //gives us old properties using e.target(like an event listener) for universal application to all of our properties that we're changing inputs for
            ...newItem,
            [e.target.name]: e.target.value
        })
    }
    //function for submitting a newItem with a clustertruck of frontend validation with error messages which are actually pretty cool
    const submitNewItem = (e) => {
        e.preventDefault()
        let validSubmission = true;
        //prevents user from submitting empty string or 1 character as productName
        if (newItem.productName.length < 2) {
            setIsValidState({
                valid: false,
                message: "Name needs to be longer"
            })
            //if productName input is less than 2 characters, validSubmission state is false
            validSubmission = false;
        }
        if (validSubmission) {
            props.createNewItem(newItem)
            //when submit button is pressed, form is reset to this original state
            setNewItem({
                productName: "",
                color: "",
                frameType: "",
                frameHeight: "",
                steerTubeLength: "",
                headTubeLength: "",
                forkBrand: "",
                forkType: "",
                headsetSize: "",
                headsetType: "",
                stemLength: "",
                stemClampSize: "",
                stemAngle: "",
                handlebarType: "",
                seatPostBrand: "",
                seatPostDiameter: "",
                seatPostCollar: "",
                seatPostLength: "",
                saddleBrand: "",
                brakeType: "",
                frontBrakeType: "",
                rearBrakeType: "",
                chainRingTeeth: "",
                chainRingBCD: "",
                bottomBracketDiameter: "",
                bottomBracketType: "",
                crankArmLength: "",
                rimSize: "",
                tireSize: "",
                forkEndSpacing: "",
                dropoutSpacing: "",
                hubTypeFront: "",
                hubTypeRear: "",
                hubLengthFront: "",
                hubLengthRear: "",
                frontAxelLength: "",
                rearAxelLength: "",
                cogTeeth: "",
                spindleLength: "",
                hubSpokeCountFront: "",
                hubSpokeCountRear: "",
                spokeLengthFront: "",
                spokeLengthRear: "",
            })
            //when submit button is pressed and more than 2 characters, setIsValidState returns as true
            setIsValidState({
                valid: true,
                message: ""
            })
            //closes form after we createNewItem
            setShowing(false);
        }
    }



    return (
        //React fragment
        <>
            {
                //if showing state is true then display this form
                showing
                    ?
                    <div id="new-item-form">

                        <form onSubmit={submitNewItem}>
                            <button id="close" onClick={toggleShowing}>Close</button><br />

                            {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                            {props.newItemServerError ? <p className="form-error">{props.newItemServerError}</p> : null}
                            <div className="form">
                                
                                <div className="frame_and_fork">
                                    <h2>Frame and Fork</h2>
                                
                                        <li>Name: <input onChange={handleInputChange} type="text" name="productName" placeholder="Name for your bike" value={newItem.productName || ""} /></li><hr /><br />
                                        <li>Frame Type: <select onChange={handleInputChange} type="text" name="frameType" value={newItem.frameType || ""}>
                                            <option value="">---Select One---</option>
                                            <option value="Mountain">Mountain</option>
                                            <option value="Road">Road</option>
                                            <option value="Cyclocross">Cyclocross</option>
                                            <option value="Track">Track</option>
                                            <option value="BMX">BMX</option>
                                            <option value="Cruiser">Cruiser</option>
                                            <option value="Folding">Folding</option>
                                            <option value="Recumbent">Recumbent</option>
                                        </select></li><hr /><br />
                                        <li>Frame Color: <input onChange={handleInputChange} type="color" name="color" value={newItem.color || ""} /></li><hr /><br />
                                        <li>Frame Height: <input onChange={handleInputChange} type="text" name="frameHeight" value={newItem.frameHeight || ""} /></li><hr /><br />
                                        <li>Fork Manufacturer: <input onChange={handleInputChange} type="string" name="forkBrand" value={newItem.forkBrand || ""} /></li><hr /><br />
                                        <li><a href="https://hub.chainreactioncycles.com/buying-guides/frames-and-forks/forks-buying-guide/" target="_blank"><img src="./images/icons/question_icon.png" /></a> Fork Type: <select onChange={handleInputChange} type="text" name="forkType" placeholder="Suspension, Rigid, ect." value={newItem.forkType || ""} >
                                            <option value="">---Select One---</option>
                                            <option value="Rigid">Rigid</option>
                                            <option value="Suspension">Suspension</option>
                                        </select></li><hr /><br />
                                        <li><a href="https://www.sheldonbrown.com/rinard/forklengths.htm" target="_blank"><img src="./images/icons/question_icon.png" /></a> Fork Length: <input onChange={handleInputChange} type="text" name="forkLength" value={newItem.forkLength || ""} />mm</li><hr /><br />
                                        <li><a href="https://www.sheldonbrown.com/gloss_st-z.html#steerer" target="_blank"><img src="./images/icons/question_icon.png" /></a> Steerer Tube Length: <input onChange={handleInputChange} type="text" name="steerTubeLength" value={newItem.steerTubeLength || ""} />mm</li><hr /><br />
                                        <li> <a href="https://www.sheldonbrown.com/frame-spacing.html" target="_blank"><img src="./images/icons/question_icon.png" /></a> Forkend Dropout Spacing: <input onChange={handleInputChange} type="number" name="forkEndSpacing" placeholder="100mm, 110mm, ect." value={newItem.forkEndSpacing} />mm</li><hr /><br />
                                        <li> <a href="https://canecreek.com/everything-you-need-to-know-about-headsets/#elementor-toc__heading-anchor-4" target="_blank"><img src="./images/icons/question_icon.png" /></a> Headtube Type: <select onChange={handleInputChange} type="text" name="headTubeType" value={newItem.headTubeType || ""}>
                                            <option value="">---Select One---</option>
                                            <option value="Press-Fit">Press-Fit</option>
                                            <option value="Integrated">Integrated</option>
                                        </select></li><hr /><br />
                                        <li>Headtube Length: <input onChange={handleInputChange} type="text" name="headTubeLength" value={newItem.headTubeLength || ""} />mm</li><hr /><br />
                                        <li>Rear Dropout Spacing: <input onChange={handleInputChange} type="number" name="dropoutSpacing" placeholder="110mm, 114mm, 120mm, ect." value={newItem.dropoutSpacing} />mm</li><hr /><br />
                                 
                                </div>
                                <div className="headset">
                                    <h2 className="headset">Headset and Brakes</h2>
                                 
                                        <li id="headset-size">Headset Size: <input onChange={handleInputChange} type="text" name="headsetSize" value={newItem.headsetSize || ""} /></li><hr /><br />
                                        <li id="headset-type"><a href="https://www.bikeradar.com/features/the-ultimate-guide-to-headsets/" target="_blank"><img src="./images/icons/question_icon.png" /></a>Headset Type: <select onChange={handleInputChange} type="text" name="headsetType" placeholder="Threaded, threadless, integrated, ect." value={newItem.headsetType || ""} >
                                            <option value="">---Select One---</option>
                                            <option value="Threadless">Threadless</option>
                                            <option value="Threaded">Threaded</option>
                                            <option value="Internal">Internal</option>
                                            <option value="Integrated">Integrated</option>
                                        </select></li><hr /><br />
                                        <li id="spacer-stack-height"><a href="https://www.firstcomponents.com/bike-headset-spacers/" target="_blank"><img src="./images/icons/question_icon.png" /></a>Headset Spacer Stack Height: <input onChange={handleInputChange} type="text" name="spacerStackHeight" value={newItem.spacerStackHeight || ""} />mm</li><hr /><br />
                                        <li id="stem-length"><a href="https://www.bikeradar.com/advice/buyers-guides/bike-stems/" target="_blank"><img src="./images/icons/question_icon.png" /></a>Stem Length: <input onChange={handleInputChange} type="number" name="stemLength" value={newItem.stemLength || ""} />mm</li><hr /><br />
                                        <li id="stem-clamp"><a href="https://bike.bikegremlin.com/3729/bicycle-stem-size-standards/#3.1" target="_blank"><img src="./images/icons/question_icon.png" /></a> Stem Clamp Size: <select onChange={handleInputChange} type="text" name="stemClampSize" value={newItem.stemClampSize || ""}>mm
                                            <option value="">---Select One---</option>
                                            <option value="22.2">22.2mm</option>
                                            <option value="23.8">23.8mm</option>
                                            <option value="25">25mm</option>
                                            <option value="25.4">25.4mm</option>
                                            <option value="26">26mm</option>
                                            <option value="27">27mm</option>
                                            <option value="31.7 - 31.8">31.7 - 31.8mm</option>
                                            <option value="35">35mm</option>
                                        </select></li><hr /><br />
                                        <li id="stem-rise"><a href="https://www.google.com/search?q=stem+rise" target="_blank"><img src="./images/icons/question_icon.png" /></a> Stem Rise angle: <input onChange={handleInputChange} type="number" name="stemAngle" value={newItem.stemAngle || ""} />°</li><hr /><br />
                                        <li id="handlebar-type"><a href="https://bikexchange.com/bike-handlebar-types/" target="_blank"><img src="./images/icons/question_icon.png" /></a>Handlebar Type: <select onChange={handleInputChange} type="text" name="handlebarType" placeholder="Drop, Aero, Flat, ect." value={newItem.handlebarType || ""} >
                                            <option value="">---Select One---</option>
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
                                        </select></li><hr /><br />
                                        <li id="brake-lever">Brake Lever Type: <input onChange={handleInputChange} type="text" name="brakeType" placeholder="Standard Pull, Long Pull, ect." value={newItem.brakeType || ""} /></li><hr /><br />
                                        <li>Front Brake Type: <select onChange={handleInputChange} type="text" name="frontBrakeType" value={newItem.frontBrakeType || ""}>
                                            <option value="">---Select One---</option>
                                            <option value="Cantilever">Cantilever</option>
                                            <option value="Caliper">Caliper</option>
                                            <option value="Coaster">Coaster</option>
                                            <option value="Drum">Drum</option>
                                            <option value="Hydraulic disc">Hydraulic disc</option>
                                            <option value="Mechanical disc">Mechanical disc</option>
                                            <option value="V-Brake">V-Brake</option>
                                        </select></li><hr /><br />

                                        <li>Rear Brake Type: <select onChange={handleInputChange} type="text" name="rearBrakeType" value={newItem.rearBrakeType || ""}>
                                            <option value="">---Select One---</option>
                                            <option value="Cantilever">Cantilever</option>
                                            <option value="Caliper">Caliper</option>
                                            <option value="Coaster">Coaster</option>
                                            <option value="Drum">Drum</option>
                                            <option value="Hydraulic disc">Hydraulic disc</option>
                                            <option value="Mechanical disc">Mechanical disc</option>
                                            <option value="V-Brake">V-Brake</option>
                                        </select></li><hr /><br />

                                
                                </div>
                                <div className="wheels">
                                    <h2 className="wheels">Wheels</h2>
                                   
                                        <li><a href="https://www.montaguebikes.com/folding-bikes-blog/2019/06/bicycle-wheel-sizes-explained/" target="_blank"><img src="./images/icons/question_icon.png" /></a> Rims Size: <select onChange={handleInputChange} type="text" name="rimSize" placeholder='26", 700cc, ect' value={newItem.rimSize || ""}>
                                            <option value="">---Select One---</option>
                                            <option value="16">16</option>
                                            <option value="20">20</option>
                                            <option value="24">24</option>
                                            <option value="26">26</option>
                                            <option value="27.5">27.5 (650b)</option>
                                            <option value="700c">700c (29")</option>
                                            <option value="32">32"</option>
                                            <option value="36">36"</option>
                                        </select></li><hr /><br />
                                        <li># Spoke Holes Front Wheel:: <select onChange={handleInputChange} type="number" name="hubSpokeCountFront" value={newItem.hubSpokeCountFront || ""}>
                                            <option value="">---Select One---</option>
                                            <option value="20">20</option>
                                            <option value="24">24</option>
                                            <option value="28">28</option>
                                            <option value="32">32</option>
                                            <option value="36">36</option>
                                            <option value="48">48</option>
                                        </select></li><hr /><br />

                                        <li># Spoke Holes Rear Wheel:: <select onChange={handleInputChange} type="number" name="hubSpokeCountRear" value={newItem.hubSpokeCountRear || ""}>
                                            <option value="">---Select One---</option>
                                            <option value="20">20</option>
                                            <option value="24">24</option>
                                            <option value="28">28</option>
                                            <option value="32">32</option>
                                            <option value="36">36</option>
                                            <option value="48">48</option>
                                        </select></li><hr /><br />

                                        <li>Tire Width: <input onChange={handleInputChange} type="number" name="tireSize" placeholder='1.5", 1.75", 2.0", ect.' value={newItem.tireSize || ""} />"</li><hr /><br />
                                        <li><a href="https://www.sheldonbrown.com/harris/hubs.html" target="_blank"><img src="./images/icons/question_icon.png" /></a>Hub Type Front: <input onChange={handleInputChange} type="text" name="hubTypeFront" value={newItem.hubTypeFront} /></li><hr /><br />
                                        <li><a href="https://www.sheldonbrown.com/gloss_ho-z.html#hub" target="_blank"><img src="./images/icons/question_icon.png" /></a>Hub Type Rear: <input onChange={handleInputChange} type="text" name="hubTypeRear" value={newItem.hubTypeRear} /></li><hr /><br />
                                        <li>Front Hub Length: <select onChange={handleInputChange} type="text" name="hubLengthFront" placeholder="100mm, 110mm, ect." value={newItem.hubLengthFront} >mm
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
                                            <option value="150">150mm</option>
                                        </select></li><hr /><br />
                                        <li>Rear Hub Length: <select onChange={handleInputChange} type="text" name="hubLengthRear" placeholder="110mm, 114mm, 120mm, ect." value={newItem.hubLengthRear}>mm
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
                                            <option value="170">170mm</option>
                                        </select></li><hr /><br />
                                        <li>Front Hub # of Spokes: <input onChange={handleInputChange} type="number" name="hubSpokeCountFront" placeholder="20, 24, 28, 32, ect." value={newItem.hubSpokeCountFront || ""} /></li><hr /><br />
                                        <li>Rear Hub # of Spokes: <input onChange={handleInputChange} type="number" name="hubSpokeCountRear" placeholder="20, 24, 28, 32, ect." value={newItem.hubSpokeCountRear || ""} /></li><hr /><br />
                                        <li> Front Wheel Spoke Length: <input onChange={handleInputChange} type="number" name="spokeLengthFront" value={newItem.spokeLengthFront || ""} />mm</li><hr /><br />
                                        <li>Rear Wheel Spoke Length: <input onChange={handleInputChange} type="number" name="spokeLengthRear" value={newItem.spokeLengthRear || ""} />mm</li><hr /><br />
                                 
                                </div>
                          

                            <div className="seat">
                                <h2 className="seat">Seatpost {"&"} Saddle</h2>
                            
                                    <li>Seatpost Manufacturer: <input onChange={handleInputChange} type="text" name="seatPostBrand" value={newItem.seatPostBrand || ""} /></li><hr /><br />
                                    <li><a href="https://www.sheldonbrown.com/seatpost-sizes.html" target="_blank"><img src="./images/icons/question_icon.png" /></a>Seatpost Diameter: <select onChange={handleInputChange} type="text" name="seatPostDiameter" value={newItem.seatPostDiameter || ""} >mm
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
                                    </select></li><hr /><br />
                                    <li>Seatpost Collar Size: <select onChange={handleInputChange} type="text" name="seatPostCollar" value={newItem.seatPostCollar || ""}>
                                    <option value="">---Select One---</option>
                                        <option value="25.4">25.4mm</option>
                                        <option value="28.6">28.6/29mm</option>
                                        <option value="29.8">29.8mm/30mm</option>
                                        <option value="31.8">31.8/32mm</option>
                                        <option value="34.9">34.9/35mm</option>
                                        <option value="36.4">36.4</option>
                                        <option value="38.6">38.6mm/39mm</option>
                                        </select></li><hr /><br />
                                        <li><a href="https://bike.bikegremlin.com/3144/minimum-seatpost-insertion-length/" target="_blank"><img src="./images/icons/question_icon.png" /></a>Seatpost Length: <input onChange={handleInputChange} type="text" name="seatPostLength" value={newItem.seatPostLength || ""} /> mm</li><hr /><br />
                                    <li>Saddle Brand: <input onChange={handleInputChange} type="text" name="saddleBrand" value={newItem.saddleBrand || ""} /></li><hr /><br />
                             
                            </div>
                            <div className="crankset">
                                <h2 className="crankset">Drivetrain</h2>
                            
                                    <li>Chainring Teeth #: <input onChange={handleInputChange} type="text" name="chainRingTeeth" value={newItem.chainRingTeeth || ""} /></li><hr /><br />
                                    <li><a href="https://www.sheldonbrown.com/gloss_bo-z.html#bcd" target="_blank"><img src="./images/icons/question_icon.png" /></a> Bolt Circle Diameter (BCD): <input onChange={handleInputChange} type="number" name="chainRingBCD" value={newItem.chainRingBCD || ""} />mm</li><hr /><br />
                                    <li><a href="https://www.parktool.com/blog/repair-help/bottom-bracket-standards-and-terminology" target="_blank"><img src="./images/icons/question_icon.png" /></a>Bottom Bracket Type: <select onChange={handleInputChange} type="text" name="bottomBracketType" placeholder="Cartridge, External, Press-Fit, ect." value={newItem.bottomBracketType || ""} >
                                        <option value="">---Select One---</option>
                                        <option value="Cartridge">Cartridge</option>
                                        <option value="External">External</option>
                                        <option value="Press-fit">Press-fit</option>
                                    </select></li><hr /><br />
                                    <li><a href="https://www.sheldonbrown.com/cribsheet-bottombrackets.html" target="_blank"><img src="./images/icons/question_icon.png" /></a>Bottom Bracket Threading: <select onChange={handleInputChange} type="text" name="bottomBracketThreading" value={newItem.bottomBracketType || ""} >
                                    <option value="">---Select One---</option>
                                        <option value="I.S.O.">I.S.O.</option>
                                        <option value="French">French</option>
                                        <option value="ISIS">ISIS</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Swiss">Swiss</option>
                                    </select></li><hr /><br />
                                    <li><a href="https://www.sheldonbrown.com/bbsize.html" target="_blank"><img src="./images/icons/question_icon.png" /></a> Bottom Bracket Shell Width: <input onChange={handleInputChange} type="number" name="bottomBracketSize" value={newItem.bottomBracketSize || ""} />mm</li><hr /><br />
<<<<<<< HEAD:src/itemContainer/newItemComponent/newItemComponent.jsx
                                    <li><a href="https://www.sheldonbrown.com/cranks.html" target="_blank"><img src="./images/icons/question_icon.png" /></a>Crank Length: <input onChange={handleInputChange} type="number" name="crankArmLength" value={newItem.crankArmLength || ""} />mm</li><hr /><br />
=======
                                    <li>Crank Arms Length: <input onChange={handleInputChange} type="number" name="crankArmLength" value={newItem.crankArmLength || ""} />mm</li><hr /><br />
>>>>>>> 04eaf75e6fa5e855669820dfa3518bb129c65a93:project5_frontend/src/itemContainer/newItemComponent/newItemComponent.jsx
                                    <li>Spindle Length: <input onChange={handleInputChange} type="number" name="spindleLength" value={newItem.spindleLength || ""} />mm</li><hr /><br />
                                    <li>Cog Teeth: <input onChange={handleInputChange} type="number" name="cogTeeth" value={newItem.cogTeeth || ""} />mm</li><hr /><br />
                            </div>
                            </div>


                            <br />
                            <button id="submit" type="submit">Submit</button>
                            <hr></hr>
                        </form>
                    </div>
                    //else
                    :
                    //button is visible when form not showing and when button is clicked shows form
                    <button id="create" onClick={toggleShowing}>Create new Bike</button>
            }

        </>
    )
}

export default NewItemComponent;