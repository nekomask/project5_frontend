import React from "react";
import Rufus from "../rufus_francais.png"

function About(){
    return <div className="App">
        <div className="nav">
      <h1 id="myBikeDatabase"><a id="navlinks" href="/">myBikeDatabase</a></h1>
      <div className="links">
            <a id="navlinks" href="/create">Bikes</a>
                <a id="navlinks" href="/about">About</a>
                </div>
                </div>
    <br />
    <div className="about">
    <p id="about">This React-powered application was an idea I had before I started learning to code. Over the years I've built up and worked on a number of bikes
        but as time goes on I usually end up forgetting some of their specifications like the clamp size on my stem or the minimum valve length I've needed on new tubes.
<br/>
<br/>
    Bikes themselves can have very different component properties that might not even exist on other bikes. Most of my background focuses on single-speed bicycles so the properties are going to be limited to that knowledge for now but what's here should still be good for almost everybody and I'm open to adding more options for multi-speed bikes in the future.
    </p>
    <br/>
    <br/>

    <br/>

    <img src={Rufus} />

    <p>Brandon Kiefer</p>
    <ul id="links">
        <li><a id="links" href="https://www.linkedin.com/in/brandonkiefer-se/" target="_blank">LinkedIn</a></li>
        <li><a id="links" href="volaju@gmail.com">volaju@gmail.com</a></li>
        <li><a id="links" href="https://github.com/nekomask" target="_blank">Github</a></li>
    </ul>
    <p id="about">If you are a vendor or someone in the industry and would like to contact me, please see my contact information above. Cheers! </p>
    </div>

    
        </div>
}

export default About;