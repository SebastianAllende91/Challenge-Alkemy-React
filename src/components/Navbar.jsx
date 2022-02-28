import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { removeItem } from "../utils/localStorage";
import Button from "./Button";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const history = useHistory();

  const logout = () => {
    removeItem("token");
    history.push("/Login");
  };

  return (
    <>
      <nav className="navbar navbar-light" id={styles.navbar}>
        <div className="container-fluid">
          <NavLink to="/App/home">Home</NavLink>| {""}
          <NavLink to="/App/menu">Menu</NavLink> | {""}
          <NavLink to="/App/my-menu">My Menu</NavLink>
          <SearchInput />
          <Button text={"Logout"} color={"outline-light"} action={logout} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
