import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  const navigate = useNavigate();
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

  const onSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch(`http://localhost:3001/users/login`, {
    method: "POST",
    body: JSON.stringify(userLogin),
    headers: {
      "Content-Type": "application/json",
    },
  })
  console.log(response.ok)

  const responseData = await response.json()
  // Here you'll need responseData assigned from somewhere above the below line

  if (responseData.username) {
    try {
      props.setToken(responseData.key);
      props.setUsername(responseData.username.username)
      props.setIsLoggedIn(true)
      // If everything went well since you're using `react-router` you probably want to check out https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
      // (Wait until you get the rest of the code working first!)
      console.log(responseData.username.username)
      console.log(responseData.username)
      navigate("/create", { state: { username: responseData.username }});
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("Invalid response data");
  }
  console.log(responseData)

}
  return (


    <div className="login">
      <hr />
      <h2 id="login"><u>Login</u></h2>
      <form class="login" onSubmit={onSubmit}>

        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={userLogin.username} onChange={handleInputChange} /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={userLogin.password} onChange={handleInputChange} /><br />
        <button type="submit">Login</button>
     
      </form>
    </div>

  )
}

export default Login;