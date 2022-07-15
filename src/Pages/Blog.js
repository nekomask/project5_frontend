import React from "react";
import Rufus from "../rufus_francais.png"

function Blog(){
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
    <p id="about">
        <h3>Update 1.1: New Blog</h3>
        <time dateTime="2022-07-15">07/15/2022</time><br />
        <hr />
        
        Major update to the site in the last few days. Obviously I've added a blog that will help me organize my thoughts on the site and where I want to take it.
        But I've also added a lot more style to the splash page-- enough to where I feel generally pleased about the user experience.<br/>
        <br/>
   The real meat of this website is actually the huge schema model I'm managing that stores data on all the different bike parts; however I still wanted to add another dimension to it that would engage with people who
   may not necessarily be bike nerds themselves. You could say it's common for most people to avoid certain hobbies or activities if they think the barrier to understanding them is too high. It would be very cool if this site could
   not only help people who are already bike nerds-- but also get more people comfortable with the idea of bikes and wanting to use them.<br/>
   <br/>
    As for the next steps on this site, I will need to refactor the edit by adding several new properties as well as adding a lot more style to the page itself. I am considering adding a few more properties to the schema as well
    like the minimum tube valve length needed to clear your rims. Finally, the biggest feature needed before I feel comfortable publishing the site-- and that is finishing the login component for users.    
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

    </div>

    
        </div>
}

export default Blog;