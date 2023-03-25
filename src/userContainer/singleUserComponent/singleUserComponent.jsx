import { useState } from "react"
import { Navigate, useNavigate, Link } from "react-router-dom"
import apiURL from "../../apiConfig"

const SingleUserComponent = (props) => {
    const [errorMessage, setErrorMessage] = useState(null);
    //sets 2 types of states to determine whether state is valid
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    //setting an object in state: this state is gonna keep track of what the user has put in the form
    // and change this object as the user updates the form
    const [showing, setShowing] = useState(false)
    //function for showing our form when button is clicked
    const toggleShowing = () => {

        //sets variable equal to its opposite for toggling
        setShowing(!showing)
    }


    const navigate = useNavigate()

    const [updateUser, setUpdateUser] = useState({
        username: props.user.username,
        password: props.user.password,
        email: props.user.email,
        mod: props.user.mod
    })
    //show route

    const showUser = async () => {
        try {
            const user = await fetch(`${apiURL}/users/${props.user._id}`)
            const parsedUser = await user.json();
            console.log(parsedUser)
            props.setCurrentUser(parsedUser.data)
        } catch (err) {
            console.log(err)
        }
    }

    //for every input we listen for a change and update the User in state whenever the user changes it
    const handleInputChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setUpdateUser({
            //gives us old properties using e.target(like an event listener) for universal application to all of our properties that we're changing inputs for
            ...updateUser,
            [e.target.name]: e.target.value
        })
    }
    const submitUpdateUser = (e) => {
        e.preventDefault();
        console.log("updating user!")
        //call function from the Parent to be given the form data
        props.updateUser(props.user._id, updateUser);
        setShowing(false)
    }
    return (
        <div className="index-single-user">
            <div className="user-name">
                <h2 onClick={showUser}>{props.user.username}</h2>
            </div>
            <div id="user-buttons">
            <button className="user-buttons" id="delete" onClick={() => {
                if (window.confirm(`Do you want to delete ${props.user.username}?`)) {
                    return props.deleteUser(props.user._id)
                }

            }}>Delete</button>
            {
                showing ?
                    <div id="edit-user-form">
                        <button onClick={toggleShowing}>x</button>
                        <form onSubmit={submitUpdateUser}>
                            {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                            {props.newUserServerError ? <p className="form-error">{props.newUserServerError}</p> : null}
                            <div className="edit-form">
                            Username: <input onChange={handleInputChange} type="text" name="username" value={updateUser.username} /><br />
                            Password: <input onChange={handleInputChange} type="text" name="password" value={updateUser.password} /><br />
                            Email: <input onChange={handleInputChange} type="text" name="email" value={updateUser.email} /><br />
                            Moderator: <input onChange={handleInputChange} type="text" name="mod" value={updateUser.mod} /><br />
                            </div>
                            <br></br>
                            <button id="submit" type="submit">Submit</button>
                        </form>
                    </div>
                    :
                    <button className="user-buttons"  id="edit" onClick={toggleShowing}>Edit this user</button>
            }
            </div>
            <>
            </>
            <Link to="/user">
                <button className="user-buttons"  id="view" onClick={showUser}>View</button>
            </Link>
        </div>
    )
}

export default SingleUserComponent;