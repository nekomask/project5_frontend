import { Link, useNavigate } from "react-router-dom";

const Logout = ({ setToken, setUsername, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    // clear token and username from state
    setToken("");
    setUsername("");
     // remove token and username from sessionStorage
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("username");
      // setting isLoggedIn to false
      setIsLoggedIn(false);
    // navigate to home page
    navigate("/");
  };

  return (
    <a id="navlinks" href="/logout" onClick={handleLogout}>
      (<u>Logout</u>)
    </a>
  );
};

export default Logout;