import React from "react"
import { useState} from "react"


const Login = (props) =>{

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

    function onSubmit(e) {
        e.preventDefault();
        return fetch(`https://mybikedatabase-backend.herokuapp.com/users`, {
          method: "POST",
          body: JSON.stringify(userLogin),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((responseData) => {
            if (responseData.key) {
              props.setToken(responseData.key);
            }
          })
          .catch((error) => console.log("error ->", error));
      }

    

      return (


<div className="login">
<hr/>
            <h2 id="login"><u>Login</u></h2>
            <h3>(Not working yet, don't bother)</h3>
<form onSubmit={onSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username"  onChange={handleInputChange} /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={handleInputChange} /><br />
                <button type="submit">Submit</button>
          
            </form>
           </div>

      )}

    export default Login;