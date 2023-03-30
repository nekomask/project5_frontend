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
import GoogleAnalytics from './nonItemComponents/GoogleAnalytics'

function App() {
  const [username, setUsername] = useState([])
  const [currentItem, setCurrentItem] = useState([])
  const [token, setToken] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

 const handleLogin = (username, token) => {
  setUsername(username);
  setToken(token);
  setIsLoggedIn(true);
  sessionStorage.setItem("username", username); // Set the username in sessionStorage
  sessionStorage.setItem("token", token);
};
  
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedUsername = sessionStorage.getItem("username");
    if (storedToken && storedUsername) {
      setUsername(storedUsername);
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);
  


  return (
    <>
    <Router>
    <GoogleAnalytics measurementId={process.env.REACT_APP_GA_MEASUREMENT_ID} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ItemContainer currentItem={currentItem} setCurrentItem={setCurrentItem} username={username} setToken={setToken} setUsername={setUsername} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={sessionStorage.getItem("token")}/>} />
        <Route path="/about" element={<About username={username} setToken={setToken} setUsername={setUsername} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={sessionStorage.getItem("token")}/>} />
        <Route path="/item" element={<Show currentItem={currentItem}/>} />
        <Route path="/register" element={<UserContainer />} />
        <Route path="/users" element={<Users currentUser={{username: username}} setToken={setToken} setUsername={setUsername} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={sessionStorage.getItem("token")}/>} />
        <Route path="/login" element={<Login setToken={setToken} setUsername={setUsername} handleLogin={handleLogin} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/blog" element={<Blog username={username} setToken={setToken} setUsername={setUsername} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={sessionStorage.getItem("token")}/>} />
      </Routes>
    </Router>
    </>
  );
}
export default App;
