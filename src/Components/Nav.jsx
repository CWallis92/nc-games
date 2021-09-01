import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../contexts/user";
import logo from "../assets/nc-logo.png";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="App-nav">
      <NavLink exact to="/" id="nav-logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <NavLink
        exact
        to="/reviews"
        activeStyle={{
          color: "red",
        }}
      >
        Reviews
      </NavLink>
      <NavLink
        exact
        to="/users"
        activeStyle={{
          color: "red",
        }}
      >
        Users
      </NavLink>
      <NavLink to={`/users/${user.username}`} id="nav-profile">
        <p>{user.username}</p>
        <img src={user.avatar_url} alt="logo" />
      </NavLink>
    </nav>
  );
};

export default Nav;
