import React from "react";
import FrameTypeComponent from "../nonItemComponents/frameTypeComponent/frameTypeComponent";
import '../App.css';

function Home(){
    return <div className="App">
        <div className="nav1">
        <h1 id="myBikeDatabase"><a id="navlinks" href="/create">myBikeDatabase</a></h1>
    </div>
    <FrameTypeComponent></FrameTypeComponent>
    <div className="intro">
    <a id="enter" href="/create">ENTER</a>
    <h2 id="intro">This site is for storing component information on your bikes.</h2>
        <h3 id="intro">Ever try to replace your broken spokes but order something that was just a little too long or a little too short?</h3>
        <h4 id="intro">Well never again!</h4>
        <h5 id="intro">As you get started, you may feel overwhelmed by all the information you don't know. That's okay!
           <br/> If you could actually fill it all out in one-shot, you probably wouldn't need this website!
        </h5>
        </div>
        </div>
}

export default Home;