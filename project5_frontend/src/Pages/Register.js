import React from "react";
import { useRef, useState, useEffect } from "react";


const Register = (props) => {
    

    return (
        <div>
            <h1>Register</h1>
            <form action="/users" method="POST">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" required /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" required /><br />
                <button type="submit">Register</button>
          
            </form>
        </div>
    )
}

export default Register