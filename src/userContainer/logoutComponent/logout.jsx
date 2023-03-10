import { useNavigate } from "react-router-dom";

const Logout = ({ setToken, setUsername, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
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
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;