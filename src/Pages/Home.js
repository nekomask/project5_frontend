import React from "react";
import FrameTypeComponent from "../nonItemComponents/frameTypeComponent/frameTypeComponent";
import '../App.css';

function Home(){
    return <div className="App">
        <div className="nav">
    <h1>myBikeDatabase</h1>
    </div>
    <FrameTypeComponent></FrameTypeComponent>
    <div className="intro">
    <a id="enter" href="/create">ENTER</a>
    <h2 id="intro">This site is for storing component information on your bikes.</h2>
        <h3 id="intro">Ever accidentally ordered a tube where the valve was slightly too short for your deep V-rim?</h3>
        <h4 id="intro">Well never again!</h4>
        <h5 id="intro">As you get started, you may feel overwhelmed by all the information you don't know. That's okay!
            Rome wasn't built in a day!
        </h5>
        </div>
        </div>
}

export default Home;