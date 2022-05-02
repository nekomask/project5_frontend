import { useEffect, useState } from "react";
import SingleItemComponent from "./singleItemComponent/singleItemComponent";
import NewItemComponent from "./newItemComponent/newItemComponent";
import FrameTypeComponent from "../nonItemComponents/frameTypeComponent/frameTypeComponent";


const ItemContainer = (props) => {
    //requestError is a variable in state that setRequestError is the function we use to set that value when we want to update it
    //whenever something might possibly go wrong on the frontend
    const [requestError, setRequestError] = useState("")
    //setting up state with dummy data and figuring out how to get it from API later;
    //setItems is a free simple useState function that just says whatever item we call to update it to whatever we call it
    const [items, setItems] = useState([])
    //a new item server error that we're passing to the child in our newItemContainer
    const [newItemServerError, setNewItemServerError] = useState("")

    //function that lifts state from child to parent
    const createNewItem = async (newItem) => {
        console.log(newItem);
        console.log("Let's create this!")


        //Send a request to our back-end
        const apiResponse = await fetch("https://mybikedatabase-frontend.herokuapp.com/items", {
            method: "POST",
            body: JSON.stringify(newItem),
            //need this to POST-- where's this request coming from? What type of Content is it?
            headers: {
                "Access-Control-Allow-Origin": "*",
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
            const apiResponse = await fetch(`https://mybikedatabase-frontend.herokuapp.com/items/${idToDelete}`, {
                method: "DELETE"
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
                const items = await fetch("https://mybikedatabase-frontend.herokuapp.com/items")
                const parsedItems = await items.json();
                setItems(parsedItems.data)
            } catch (err) {
                console.log(err)
            }
        }

        //function to edit/update our items from the form
        const updateItem = async (idToUpdate, itemToUpdate) => {
            //blank array for creating a new array with all the stuff we want
            // const newItems = []
            // //forLoop for looking through all the items that already exist in state
            // for(let i = 0; i< items.length; i++){
            //     //this specific item we need to change to the new item (idToUpdate) coming into the form
            //     if(items[i]._id === idToUpdate._id){
            //         newItems.push(itemToUpdate)
            //     }else{
            //         //all other items get a pass to the new array
            //         newItems.push(items[i])
            //     }
            // }

            //calling our API to store our updated item data to the backend
            const apiResponse = await fetch(`https://mybikedatabase-frontend.herokuapp.com/items/${idToUpdate}`, {
                
                method: "PUT",
                body: JSON.stringify(itemToUpdate),
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

        return (
            <div className="itemContainer">
<div className="nav">
               <h2 id="myBikeDatabase"><a id="navlinks" href="/">myBikeDatabase</a></h2>
            <div className="links">
            <a id="navlinks" href="/create">Bikes</a>
                <a id="navlinks" href="/about">About</a>
            </div></div><br />
            <div className="list-of-bikes">
            <h2 id="list-bikes"><u>List of Bikes</u></h2>
                <aside className="list-of-bikes">
                    {items.map((item) => {
                        return <SingleItemComponent currentItem={props.currentItem} setCurrentItem={props.setCurrentItem} key={item._id} item={item} deleteItem={deleteItem} updateItem={updateItem}></SingleItemComponent>
                    })}
                       <hr />
                       </aside>
                       </div>
                <aside className="create">
                    <hr />
                    <h2 id="create">Create a Bike</h2>
                    <NewItemComponent
                        newItemServerError={newItemServerError}
                        createNewItem={createNewItem}></NewItemComponent>
                </aside>
                <section id="list">
                    <hr />
                </section>
            </div>
        )
    }

    export default ItemContainer;