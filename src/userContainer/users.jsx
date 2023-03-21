import React from "react"
import UserContainer from "./userContainer"
import SingleUserComponent from "./singleUserComponent/singleUserComponent"
import { useState, useEffect, useNavigate, Link } from "react"
import apiURL from "../apiConfig"

const Users = (props) => {
    //requestError is a variable in state that setRequestError is the function we use to set that value when we want to update it
    //whenever something might possibly go wrong on the frontend
    const [requestError, setRequestError] = useState("")
    //setting up state with dummy data and figuring out how to get it from API later;
    //setUsers is a free simple useState function that just says whatever item we call to update it to whatever we call it
    const [users, setUsers] = useState([])
    //a new item server error that we're passing to the child in our newItemContainer
    const [newUserServerError, setNewUserServerError] = useState("")



    
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


    //function creating a new array out of all the filtered User objects that return true to delete a specific one
    const deleteUser = async (idToDelete) => {
        //fetch our item ID from the database to delete one
        try {
            const apiResponse = await fetch(`${apiURL}/users/${idToDelete}`, {
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


    //function that fetches users from server into our userContainer
    const getUsers = async () => {
        try {
            const token = sessionStorage.getItem("token")
            const users = await fetch(`${apiURL}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            const parsedUsers = await users.json();
            setUsers(parsedUsers.data)
        } catch (err) {
            console.log(err)
        }
    }

    //function to edit/update our Users from the form
    const updateUser = async (idToUpdate, userToUpdate) => {

        //calling our API to store our updated item data to the backend
        const apiResponse = await fetch(`${apiURL}/users/${idToUpdate}`, {
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
    //loads the object users in our backend database to the page
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="App">
           <div className="nav">
              <h2 id="myBikeDatabase"><a id="navlinks" href="/">myBikeDatabase</a></h2>
                <div className="links">
                  <a id="navlinks" href="/login">Login</a>
                  <a id="navlinks" href="/create">Bikes</a>
                  <a id="navlinks" href="/about">About</a>
                  <a id="navlinks" href="/register">Register</a>
                </div>
              </div>
                      
              {props.currentUser && (props.currentUser.username === "brandon" || props.currentUser.username === "admin") ? (
                <>
              <div className="list-of-users">
                  <h2 id="list-of-users"><u id="list-of-users">List of Users</u></h2>
                  <aside className="list-of-users">
                      {users.map((user) => {
                          return <SingleUserComponent
      
                              currentUser={props.currentUser}
                              setCurrentUser={props.setCurrentUser}
                              key={user._id} user={user}
                              deleteUser={deleteUser}
                              updateUser={updateUser}>
      
                          </SingleUserComponent>
                      })}
         
                  </aside>
              </div>
              </>
              ) : (
                  <p>You don't belong here.</p>
              )}
              </div>
          )
      

}

export default Users;