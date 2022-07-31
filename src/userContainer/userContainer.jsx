import { useEffect, useState } from "react";
import Register from "./newUserComponent/newUserComponent";
import SingleUserComponent from "./singleUserComponent/singleUserComponent";
import NewUserComponent from "./newUserComponent/newUserComponent"
import Login from "./loginComponent/loginComponent";

const UserContainer = (props) => {
    //requestError is a variable in state that setRequestError is the function we use to set that value when we want to update it
    //whenever something might possibly go wrong on the frontend
    const [requestError, setRequestError] = useState("")
    //setting up state with dummy data and figuring out how to get it from API later;
    //setUsers is a free simple useState function that just says whatever item we call to update it to whatever we call it
    const [users, setUsers] = useState([])
    //a new item server error that we're passing to the child in our newItemContainer
    const [newUserServerError, setNewUserServerError] = useState("")

    //function that lifts state from child to parent
    const createNewUser = async (newUser) => {
        console.log(newUser);
        console.log("Let's create this!")


        //Send a request to our back-end
        const apiResponse = await fetch("http://localhost:3001/users", {
            method: "POST",
            body: JSON.stringify(newUser),
            //need this to POST-- where's this request coming from? What type of Content is it?
            headers: {
                "Content-Type": "application/json"
            }
        })
        //Parse the response from the back-end
        const parsedResponse = await apiResponse.json()
        //If the response is successful:
        console.log(parsedResponse)
        if (parsedResponse.success) {
            //Add the new item to state!
            setUsers([parsedResponse.data, ...users])
            //Else show the error message in the form, don't change it back to showing? 
        } else {
            setNewUserServerError(parsedResponse.data);
        }
    }
    //function creating a new array out of all the filtered User objects that return true to delete a specific one
    const deleteUser = async (idToDelete) => {
        //fetch our item ID from the database to delete one
        try {
            const apiResponse = await fetch(`http://localhost:3001/users/${idToDelete}`, {
                method: "DELETE"
            })
            const parsedResponse = await apiResponse.json()
            if (parsedResponse.success) {
                const newUsers = users.filter(user => user._id !== idToDelete)
                setUsers(newUsers);
            } else {
                //TODO: handle an unsuccessful delete

            }
        } catch (err) {
            console.log(err);
            setRequestError(err.message)
        }

        console.log("deleting item ID" + idToDelete)
        // One way besides making a For Loop to delete an item
        // const newItems = items.filter((item) => {
        //     return item._id !== idToDelete
        // })

    }


        //function that fetches items from server into our itemContainer
        const getUsers = async () => {
            try {
                const users = await fetch("http://localhost:3001/users")
                const parsedUsers = await users.json();
                setUsers(parsedUsers.data)
            } catch (err) {
                console.log(err)
            }
        }

        //function to edit/update our Users from the form
        const updateUser = async (idToUpdate, userToUpdate) => {

            //calling our API to store our updated item data to the backend
            const apiResponse = await fetch(`http://localhost:3001/users/${idToUpdate}`, {
                method: "PUT",
                body: JSON.stringify(userToUpdate),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await apiResponse.json();
            if (parsedResponse.success) {
                //shortcut version that checks the user to see if it equals the id to the user we want to update-- if so, update that-- otherwise send the old version
                const newUsers = users.map(user => user._id === idToUpdate ? userToUpdate : user)
                //calling our set function
                setUsers(newUsers)
            } else {
                setRequestError(parsedResponse.data)
            }


        }
        //loads the object items in our backend database to the page
        useEffect(() => {
            getUsers()
          }, [])

        return (
            <div className="userContainer">
<div className="nav">
               <h2 id="myBikeDatabase"><a id="navlinks" href="/">myBikeDatabase</a></h2>
            <div className="links">
            <a id="navlinks" href="/create">Bikes</a>
                <a id="navlinks" href="/about">About</a>
            </div></div><br />
            <div className="list-of-users">
            <h2 id="list-of-users"><u>List of Users</u></h2>
                <aside className="list-of-users">
                    {users.map((user) => {
                        return <SingleUserComponent currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} key={user._id} user={user} deleteUser={deleteUser} updateUser={updateUser}></SingleUserComponent>
                    })}
                       <hr />
                       </aside>
                       </div>
                <aside className="create">
                    <hr />
                    <h2 id="create">Create a User</h2>
                    <Register
                        newUserServerError={newUserServerError}
                        createNewUser={createNewUser}></Register>
                        <Login />
                </aside>
                <section id="list">
                    <hr />
                </section>
            </div>
        )
    }

    export default UserContainer;