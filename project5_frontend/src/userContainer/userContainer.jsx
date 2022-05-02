import { useEffect, useState } from "react";
import Register from "./newUserComponent/newUserComponent";
import SingleUserComponent from "./singleUserComponent/singleUserComponent";
import NewUserComponent from "./newUserComponent/newUserComponent"

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
    
        return (
            <div className="userContainer">
<div className="nav">
               <h2 id="myBikeDatabase"><a id="navlinks" href="/">myBikeDatabase</a></h2>
            <div className="links">
            <a id="navlinks" href="/create">Bikes</a>
                <a id="navlinks" href="/about">About</a>
            </div></div><br />
          
                <aside className="register">
             
                    <h2 id="register">Sign Up</h2>
                    <h3>(Login isn't working yet)</h3>
                    <NewUserComponent
                        newUserServerError={newUserServerError}
                        createNewUser={createNewUser}></NewUserComponent>
                </aside>
                <section id="list">
               
                </section>
            </div>
        )
    }

    export default UserContainer;