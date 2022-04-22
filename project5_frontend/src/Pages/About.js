import React from "react";
import Rufus from "../rufus_francais.png"

function About(){
    return <div className="App">
      <h1 id="myBikeDatabase"><a href="/">myBikeDatabase</a></h1>
    <br />
    <p>This React-powered application was an idea I had before I started learning to code. Over the years I've built and worked on a number of bikes that I've owned but as time goes on I've usually forgotten some of their specifications like the clamp size on my stem or the minimum length I've needed on new tubes.</p>

    <p>The site is a work in progress. At the time of this writing- I have only included about 3/5 of the properties that I think should really be here. But that will come in time.</p>

    <p>Bikes themselves can have very different component properties that might not even exist on other bikes. Most of my background focuses on single-speed bicycles so these categories right now are going to be limited to that knowledge but I'm open to adding more options for multi-speed bikes in the future.</p>

    <p>If you are a vendor or someone in the industry and would like to contact me, please see my email below. Cheers! </p>

    <img src={Rufus} />

    <p>Brandon Kiefer</p>
    <a href="volaju@gmail.com">volaju@gmail.com</a>


    
        </div>
}

export default About;