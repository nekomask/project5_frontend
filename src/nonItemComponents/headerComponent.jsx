import { Link } from 'react-router-dom';
import Logout from '../userContainer/logoutComponent/logout';

const Header = ({ username, setToken, setUsername }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {!username ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>{username}</li>
              <li>
                <Logout setToken={setToken} setUsername={setUsername} />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;