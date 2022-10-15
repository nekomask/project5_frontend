import React from "react"
import { useState } from "react"



const Login = (props) => {

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

  // Var Type Def
  //   |    Var Name
  //   |       |
  //                   Assignment Indicator
  //                    |  Async func modifier
  //                        |
  //                               Function shorthand indicator
  //                                |  
  // const VariableName = async () => { console.log("Huzzah!"); }

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/users/`, {
      method: "POST",
      body: JSON.stringify(userLogin),
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(response.ok)

    const responseData = await response.json()
      // Here you'll need responseData assigned from somewhere above the below line

            if (responseData.key) {
      try {
        props.setToken(responseData.key);
        // If everything went well since you're using `react-router` you probably want to check out https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
        // (Wait until you get the rest of the code working first!)
      
          }
          // To convert this from a promise to async-land you'll want to wrap the code you were running
          // before in a `try/catch`
         catch (error) { 
          console.error(error) }
         }
}
return (


  <div className="login">
    <hr />
    <h2 id="login"><u>Login</u></h2>
    <h3>(Not working yet, don't bother)</h3>
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" onChange={handleInputChange} /><br />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" onChange={handleInputChange} /><br />
      <button type="submit">Login</button>

    </form>
  </div>

)}

export default Login;