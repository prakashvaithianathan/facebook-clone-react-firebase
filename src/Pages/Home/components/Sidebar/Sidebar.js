import React from "react";
import style from "./Sidebar.module.css";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={style.sidebar}>
        <SidebarItem title={user.displayName} src={user.photoURL}></SidebarItem>
      <SidebarItem title='COVID-19 Information Center' Icon={LocalHospital}></SidebarItem>
      <SidebarItem title='Pages' Icon={EmojiFlags}></SidebarItem>
      <SidebarItem title='Friends' Icon={People}></SidebarItem>
      <SidebarItem title="Messenger" Icon={Chat}></SidebarItem>
      <SidebarItem title="MarketPlace" Icon={Storefront}></SidebarItem>
      <SidebarItem title='Videos' Icon={VideoLibrary}></SidebarItem>
      <SidebarItem title="More Items" Icon={ExpandMoreOutlined}></SidebarItem>
    </div>
  );
};

export default Sidebar;
