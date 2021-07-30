import React from "react";
import { useSelector } from "react-redux";
import style from './Home.module.css'
import Login from "../Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from './components/Feed/Feed'
import Ads from './components/Ads/Ads'

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {!user ? (
        <Login></Login>
      ) : (
        <div>
          <Header></Header>
          <div className={style.body}>
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Ads></Ads>
          </div>
         
         
          
        </div>
      )}
    </div>
  );
};

export default Home;
