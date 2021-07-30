import React, { useState } from "react";
import style from "./Header.module.css";
import {
  Search,
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import { Input, Avatar, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);

  const [headerOption, setHeaderOption] = useState("home");

  return (
    <div className={style.container}>
      <div className={style.left}>
        <img
          className={style.logo}
          src="https://img.icons8.com/color/48/000000/facebook-circled--v1.png"
          alt="facebook-logo"
        />
        <div className={style.headerInput}>
          <Search className={style.search}></Search>

          <input
            type="text"
            className={style.searchBar}
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className={style.center}>
        <div
          className={`${style.header__option} ${
            headerOption === "home" ? style.header__optionActive : null
          }`}
          onClick={() => setHeaderOption("home")}
        >
          <Home fontSize="large"></Home>
        </div>
        <div
          className={`${style.header__option} ${
            headerOption === "flag" ? style.header__optionActive : null
          }`}
          onClick={() => setHeaderOption("flag")}
        >
          <Flag fontSize="large"></Flag>
        </div>
        <div
          className={`${style.header__option} ${
            headerOption === "subscription" ? style.header__optionActive : null
          }`}
          onClick={() => setHeaderOption("subscription")}
        >
          <SubscriptionsOutlined fontSize="large"></SubscriptionsOutlined>
        </div>
        <div
          className={`${style.header__option} ${
            headerOption === "store" ? style.header__optionActive : null
          }`}
          onClick={() => setHeaderOption("store")}
        >
          <StorefrontOutlined fontSize="large"></StorefrontOutlined>
        </div>
        <div
          className={`${style.header__option} ${
            headerOption === "supervised" ? style.header__optionActive : null
          }`}
          onClick={() => setHeaderOption("supervised")}
        >
          <SupervisedUserCircle fontSize="large"></SupervisedUserCircle>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.imageLogo}>
          <Avatar src={user.photoURL} className={style.avatar}></Avatar>
          <h4>{user.displayName}</h4>
          <IconButton>
            <Add></Add>
          </IconButton>
          <IconButton>
            <Forum></Forum>
          </IconButton>
          <IconButton>
            <NotificationsActive></NotificationsActive>
          </IconButton>
          <IconButton>
            <ExpandMore></ExpandMore>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
