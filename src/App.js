import './App.css';
import ItemContainer from './itemContainer/itemContainer';
import UserContainer from './userContainer/userContainer';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from './userContainer/users';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Show from './Pages/Show';
import Login from './userContainer/loginComponent/loginComponent'
import Blog from './Pages/Blog'

function App() {
  const [username, setUsername] = useState([])
  const [currentItem, setCurrentItem] = useState([])
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ItemContainer currentItem={currentItem} setCurrentItem={setCurrentItem} username={username} setToken={setToken} setUsername={setUsername} />} />
        <Route path="/about" element={<About />} />
        <Route path="/item" element={<Show currentItem={currentItem}/>} />
        <Route path="/register" element={<UserContainer />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login setToken={setToken}  setUsername={setUsername} />} />
        <Route path="/blog" element={<Blog />} />
        </Routes>
    </Router>
  );
}



export default App;