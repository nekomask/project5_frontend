import React from "react"
import { useState, useEffect, useNavigate, Link } from "react"

const Login = (props) =>{
    const [requestError, setRequestError] = useState("")
    //setUsers is a free simple useState function that just says whatever item we call to update it to whatever we call it
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: "",
    })


    //for every input we listen for a change and update the User in state whenever the user changes it
    const handleInputChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        setUserLogin({
            //gives us old properties using e.target(like an event listener) for universal application to all of our properties that we're changing inputs for
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    

      return (


<div className="login">
<div className="nav">
               <h2 id="myBikeDatabase"><a id="navlinks" href="/">myBikeDatabase</a></h2>
            <div className="links">
            <a id="navlinks" href="/create">Bikes</a>
                <a id="navlinks" href="/about">About</a>
            </div></div><br />
            <h2 id="login"><u>Login</u></h2>
            <h3>(Not working yet, don't bother)</h3>
<form>
                    <label htmlFor="username" id="username" name="username">Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} /><br />
                <button type="submit">Register</button>
          
            </form>
           </div>

      )}

    export default Login;