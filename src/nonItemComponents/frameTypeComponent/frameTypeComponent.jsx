import React, { useState, useEffect } from "react";


const FrameTypeComponent = () => {
    //sets 2 types of states to determine whether state is valid
    const [currentImage, setCurrentImage] = useState("./images/bmx.png")
    const [bikeType, setBikeType] = useState ("bmx")
        //setting an object in state: this state is gonna keep track of what the user has put in the form
    // and change this object as the user updates the form
    const [showing, setShowing] = useState(false)
    //function for showing our form when button is clicked
    const toggleShowing = () => {
        //sets variable equal to its opposite for toggling
        setShowing(!showing)
    }
    
    
const colorChange = () => {
    let color = document.getElementById('colorInput').value;
    document.querySelector("#frame1").style.backgroundColor = color;
}

const changeImage = (e) => {
    setBikeType(e.target.value);
    setCurrentImage(URL)
}

let URL
if(bikeType === "bmx") {
    URL="./images/bmx.png"
}else if(bikeType === "road") {
    URL="./images/road.png"
}else if(bikeType === "mtb") {
    URL="./images/mtb.png"
}else if(bikeType === "track") {
    URL="./images/track.png"
}

return (


    <div className="frameContainer">
          <div className="frame">
    
    <input type="radio" value="bmx" name="frame" label="bmx"  onClick={changeImage}/> bmx

    <input type="radio" value="road" name="frame" label="Road" onClick={changeImage}/> Road

    <input type="radio" value="mtb" name="frame" label="mtb" onClick={changeImage}/> MTB

    <input type="radio" value="track" name="frame" label="track" onClick={changeImage}/> Track

  </div>

        <img id="frame1" src={URL} className="bmx" />
        <p>Select Your Color</p>
        <input type="color" id="colorInput"></input>
        <br/>
        <br />
        <button id="spray" onClick={colorChange}>spray it</button>
        <br/>
    </div>

)
}

export default FrameTypeComponent;