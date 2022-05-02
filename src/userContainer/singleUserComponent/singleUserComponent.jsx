import { useState } from "react"
import { Navigate, useNavigate, Link } from "react-router-dom"

const SingleUserComponent = (props) => {
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
        password: props.user.password
    })
    //show route

    const showUser = async () => {
        try {
            const user = await fetch(`http://localhost:3001/users/${props.user._id}`)
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
             <h4 onclick={showUser}>{props.user.username}</h4>
            </div>
            <button id="delete" onClick={() => {
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
            
                            </div>
                            <br></br>
                            <button id="submit" type="submit">Submit</button>
                        </form>
                    </div>
                    :
                    <button id="edit" onClick={toggleShowing}>Edit this User</button>
            }
            <>
            </>

        </div>
    )
}

export default SingleUserComponent;