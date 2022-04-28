import React from "react";
import FrameTypeComponent from "../nonItemComponents/frameTypeComponent/frameTypeComponent";

function Home(){
    return <div className="App">
    <h1>myBikeDatabase</h1>
    <FrameTypeComponent></FrameTypeComponent>
    <h2>This site is for storing information about your specific bike.</h2>
        <h3>Ever accidentally ordered a tube where the valve was slightly too short for your deep V-rim?</h3>
        <h4>Well never again!</h4>
        <h5>As you get started, you may feel overwhelmed by all the information you don't know. That's okay!
            It's a work in progress!
        </h5>
        <a id="enter" href="/create">ENTER</a>
        </div>
}

export default Home;