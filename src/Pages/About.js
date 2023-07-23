import React, { useState, useEffect } from "react";
import Rufus from "../rufus_francais.png";
import Yowamushi from "../images/yowamushi.png"
import { useLocation } from "react-router-dom";
import Logout from "../userContainer/logoutComponent/logout";

function About({ setUsername, setToken, isLoggedIn, setIsLoggedIn, token }) {
  const [currentUsername, setCurrentUsername] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.username) {
      setCurrentUsername(location.state.username);
      sessionStorage.setItem("username", location.state.username);
    } else {
      const usernameFromSession = sessionStorage.getItem("username");
      setCurrentUsername(usernameFromSession || currentUsername);
    }
  }, [location.state, isLoggedIn, currentUsername]);

    return <div className="App">
        <div className="nav">
        <h2 id="myBikeDatabase"><a id="navlinks" href="/">myBikeDatabase</a></h2>
        {isLoggedIn ? (
          <>
            <p>Welcome, {currentUsername}!</p>
            <div className="links">
            <a id="navlinks" href="/create">Bikes</a>
            <a id="navlinks" href="/about">About</a>
            <Logout setToken={setToken} setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} />
            </div>
          </>
        ) : (


          <div className="links">
            <a id="navlinks" href="/login">Login</a>
            <a id="navlinks" href="/create">Bikes</a>
            <a id="navlinks" href="/about">About</a>
            <a id="navlinks" href="/register">Register</a>
          </div>
        )}
                </div>
    <br />
    <div className="about">
    <p id="about">This React-powered application was an idea I had before I started learning to code. Over the years I've built up and worked on a number of bikes
        but as time goes on I usually end up forgetting a lot of their specifications like the clamp size on my stem or the minimum valve length I've needed on new tubes.
<br/>
<br/>
<a href={Yowamushi} target="_blank"><img id="yowamushi" src={Yowamushi} /></a>
<p id="yowamushi"><i>Yowamushi Pedal</i></p>
    Bikes themselves can have very different component properties that might not even exist on other bikes let alone be compatible with them. Most of my mechanical background focuses on single-speed bicycles so the properties of this application are going to be 
    limited to that knowledge for now but what's on here should still be good for virtually anyone who owns a bike and I'm open to adding more options for multi-geared drivetrains in the future.
<br/>
<br/>
    If you want to check out the site blog, <a href="/blog">click here</a>.
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