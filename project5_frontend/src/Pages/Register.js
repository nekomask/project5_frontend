import React from "react";
import { useRef, useState, useEffect } from "react";

const USER_REG = /^[a-zA-Z][a-zA-Z0-0-_]{3,23}$/;
const PWD_REG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    

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