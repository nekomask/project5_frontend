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
        <h3>Update 2.0: Huge Success</h3>
        <time dateTime="2022-07-15">03/19/2023</time><br />
        <hr />
        After so long, I have finally implemented a working Login component that uses JSON web tokens and authentication headers. 
        I have also updated the index page to only display objects (created bikes) that users have created.
        So when a user registers and logs into their account- they can view, create, edit, and delete their own objects. That's the true MVP for this website when I first imagined it.<br/>
        <br/>
   It took me a long time to get here for quite a few reasons- one being the difficulty in that I am still learning as I go as a developer and the login stuff was barely touched upon during my bootcamp. Last year I got the core registration component setup where I could post hashed userdata to the database, storing it as an object, so I knew in principal how the Login component would work in fetching that data to check if it matches with what is submitted in a login form that users fill out-- but there's still so much more to it than that when it comes to sessions, and JSON web token middleware, error handlers, and authentication. It also took me a long time to get to this point due to having to return to work full-time just a few months after my bootcamp ended and couple of months after that I had to put everything on hold to manage a serious family emergency back home that I am continuing to deal with today.<br/>
   <br/>
    My ultimate goal for this site has been achieved and I am happy I can now finally demo this site for people who want to use it. I still have a little more work to do with the styling and adding a few things-- like an email for the user model and registration component but this is a giant step for me towards my career goal. If you're reading this, thanks for your support!    
    </p>
    <br/>
    <br/>

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