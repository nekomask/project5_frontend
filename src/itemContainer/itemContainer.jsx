import { useEffect, useState } from "react";
import SingleItemComponent from "./singleItemComponent/singleItemComponent";
import NewItemComponent from "./newItemComponent/newItemComponent";
import Loading from "../nonItemComponents/loading";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../userContainer/logoutComponent/logout";
import Header from "../nonItemComponents/headerComponent";

import apiURL from "../apiConfig";



const ItemContainer = (props) => {
  const [currentItem, setCurrentItem] = useState(props.currentItem);
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  //requestError is a variable in state that setRequestError is the function we use to set that value when we want to update it
  //whenever something might possibly go wrong on the frontend
  const [requestError, setRequestError] = useState("")
  //setting up state with dummy data and figuring out how to get it from API later;
  //setItems is a free simple useState function that just says whatever item we call to update it to whatever we call it
  const [items, setItems] = useState([])
  //a new item server error that we're passing to the child in our newItemContainer
  const [newItemServerError, setNewItemServerError] = useState("")
  //loading animation for loading bikes
  const [loading, setLoading] = useState(false)
  const setToken = props.setToken;
  const isLoggedIn = props.isLoggedIn;



  //retrieve username from location state or props
  useEffect(() => {
    if (location.state && location.state.username) {
      setUsername(location.state.username);
      sessionStorage.setItem("username", location.state.username);
    } else {
      const usernameFromSession = sessionStorage.getItem("username");
      setUsername(usernameFromSession || props.username);
    }
  }, [location.state, props.isLoggedIn, props.username]);

  //function that lifts state from child to parent
  const createNewItem = async (newItem) => {
    console.log(newItem);
    console.log("Let's create this!")

    const apiResponse = await fetch(`${apiURL}/items`, {
      credentials: 'include',
      method: "POST",
      body: JSON.stringify(newItem),
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
      setItems([parsedResponse.data, ...items])
      //Else show the error message in the form, don't change it back to showing? 
    } else {
      setNewItemServerError(parsedResponse.data);
    }
  }
  //function creating a new array out of all the filtered item objects that return true to delete a specific one
  const deleteItem = async (idToDelete) => {
    //fetch our item ID from the database to delete one
    try {
      const apiResponse = await fetch(`${apiURL}/items/${idToDelete}`, {
        method: "DELETE",
        credentials: 'include'
      })
      const parsedResponse = await apiResponse.json()
      if (parsedResponse.success) {
        const newItems = items.filter(item => item._id !== idToDelete)
        setItems(newItems);
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
  const getItems = async () => {
    try {
      const items = await fetch(`${apiURL}/items`, {
        credentials: 'include'
      });

      const parsedItems = await items.json();
      setItems(parsedItems.data)
    } catch (err) {
      console.log(err)
    }
  }

  //function to edit/update our items from the form
  const updateItem = async (idToUpdate, itemToUpdate) => {

    //calling our API to store our updated item data to the backend
    const apiResponse = await fetch(`${apiURL}/items/${idToUpdate}`, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify(itemToUpdate),

      headers: {
        "Content-Type": "application/json"
      }
    })


    const parsedResponse = await apiResponse.json();
    if (parsedResponse.success) {
      //shortcut version that checks the item to see if it equals the id to the item we want to update-- if so, update that-- otherwise send the old version
      const newItems = items.map(item => item._id === idToUpdate ? itemToUpdate : item)
      //calling our set function
      setItems(newItems)
    } else {
      setRequestError(parsedResponse.data)
    }


  }

  //loads the object items in our backend database to the page
  useEffect(() => {
    getItems()
  }, [])

  useEffect(() => {
    setCurrentItem(props.currentItem);
  }, [props.currentItem]);


  return (
    <div className="itemContainer">
      <div className="nav">
        <h2 id="myBikeDatabase"><a id="navlinks" href="/">myBikeDatabase</a></h2>
        {isLoggedIn ? (
          <>
          <p>Welcome, {username}!</p>
          <a id="navlinks" href="/create">Bikes</a>
          <a id="navlinks" href="/about">About</a>
          <Logout setToken={setToken} setUsername={setUsername} setIsLoggedIn={props.setIsLoggedIn}/>
          </>
        ) : (
    
              
        <div className="links">
          <a id="navlinks" href="/login">Login</a>
          <a id="navlinks" href="/create">Bikes</a>
          <a id="navlinks" href="/about">About</a>
          <a id="navlinks" href="/register">Register</a>
        </div>
 )}
      </div><br />
      <div className="list-of-bikes">
        <h2 id="list-bikes"><u>List of Bikes</u></h2>
        <aside className="list-of-bikes">
          {loading ? <Loading /> : items.map((item) => {
            return <SingleItemComponent currentItem={props.currentItem} setCurrentItem={props.setCurrentItem} key={item._id} username={username} item={item} deleteItem={deleteItem} updateItem={updateItem}></SingleItemComponent>
          })}
          <hr />
        </aside>
      </div>
      <aside className="create">
        <hr />
        <h2 id="create">Create a Bike</h2>
        <NewItemComponent
          newItemServerError={newItemServerError}
          createNewItem={createNewItem} username={username}></NewItemComponent>
      </aside>
      <section id="list">
      
      </section>

    </div>
  )
};

export default ItemContainer;