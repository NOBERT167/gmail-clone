import React from "react";
import "./Header.styles.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import { IconButton, Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./Firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className="header__img"
          src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
          alt="gmail logo"
          srcset=""
        />
        <h1 className="header__title">Gmail</h1>
        <div className="header__inputContainer"></div>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="search mail" />
        <TuneIcon />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoURL} />
      </div>
    </div>
  );
}

export default Header;
