import React from "react";
import { useRef, useState, useEffect } from "react";
import UserContainer from "../userContainer";
import { useNavigate } from "react-router-dom";




const Register = (props) => {
    const { newUserServerError } = props;
    const navigate = useNavigate();
    const [showing, setShowing] = useState(false)
    //function for showing our form when button is clicked
    const toggleShowing = () => {
        //sets variable equal to its opposite for toggling
        setShowing(!showing)
    }
    //sets 2 types of states to determine whether state is valid
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    //setting an object in state: this state is gonna keep track of what the user has put in the form and build this object as the user updates the form
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        email: "",
        mod: false,
    })

    //for every input we listen for a change and update the User in state whenever the user changes it
    const handleInputChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        setNewUser({
            //gives us old properties using e.target(like an event listener) for universal application to all of our properties that we're changing inputs for
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    //function for submitting a newUser with a clustertruck of frontend validation with error messages which are actually pretty cool
    const submitNewUser = async (e) => {
        e.preventDefault()
        let validSubmission = true;
        //prevents user from submitting empty string or 1 character as username
        if (newUser.username.length < 2) {
            setIsValidState({
                valid: false,
                message: "Name needs to be longer"
            })
        }
        else if (newUser.password.length < 4) {
            setIsValidState({
                valid: false,
                message: "Password must be at least 4 characters"
            })
            //if productName input is less than 2 characters, validSubmission state is false
            validSubmission = false;
        }
        if (validSubmission) {
            const success = await props.createNewUser(newUser);
            if (success) {
                //when submit button is pressed, form is reset to this original state
                setNewUser({
                    username: "",
                    password: "",
                    email: "",
                })
            
                //when submit button is pressed and more than 2 characters, setIsValidState returns as true
                setIsValidState({
                    valid: true,
                    message: ""
                })
            
                //closes form after we createNewUser
                setShowing(false);
                navigate('/create');
            } else {
                if (success && success.error) {
                    setIsValidState({ valid: false, message: success.error });
                } else {
                    setIsValidState({ valid: false, message: "An unknown error occurred." });
                }
            }
        }
    }









    return (
        <div className="registration">
            <h1>Register</h1>
            {
                newUserServerError ? <p className="form-error">{newUserServerError}</p> : null
            }
            <form className="registration" onSubmit={submitNewUser}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={newUser.username} onChange={handleInputChange} required /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={newUser.password} required onChange={handleInputChange} /><br />
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={newUser.email} required onChange={handleInputChange} /><br />
                <button type="submit">Register</button>

            </form>
        </div>
    )
}

export default Register