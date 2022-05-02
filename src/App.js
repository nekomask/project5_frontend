import './App.css';
import ItemContainer from './itemContainer/itemContainer';
import UserContainer from './userContainer/userContainer';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
<<<<<<< HEAD:src/App.js
import Users from './userContainer/users';
=======
import NewUserComponent from "./userContainer/newUserComponent/newUserComponent"
>>>>>>> 04eaf75e6fa5e855669820dfa3518bb129c65a93:project5_frontend/src/App.js
import Home from "./Pages/Home"
import About from "./Pages/About"
import Show from './Pages/Show';
import Login from './userContainer/loginComponent/loginComponent'

function App() {
  const [currentUser, setCurrentUser] = useState([])
  const [currentItem, setCurrentItem] = useState([])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ItemContainer currentItem={currentItem} setCurrentItem={setCurrentItem}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/item" element={<Show currentItem={currentItem}/>} />
<<<<<<< HEAD:src/App.js
        <Route path="/register" element={<UserContainer currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/register" element={<NewUserComponent currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
>>>>>>> 04eaf75e6fa5e855669820dfa3518bb129c65a93:project5_frontend/src/App.js
        </Routes>
    </Router>
  );
}



export default App;
