import './App.css';
import ItemContainer from './itemContainer/itemContainer';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Pages/Register"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Show from './Pages/Show';

function App() {
  const [currentItem, setCurrentItem] = useState([])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ItemContainer currentItem={currentItem} setCurrentItem={setCurrentItem}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/item" element={<Show currentItem={currentItem}/>} />
        </Routes>
    </Router>
  );
}



export default App;
