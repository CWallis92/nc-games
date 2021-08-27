import logo from "../assets/nc-logo.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
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
      <NavLink to="/users/jessjelly" id="nav-profile">
        <img src={logo} alt="logo" />
      </NavLink>
    </nav>
  );
};

export default Nav;
