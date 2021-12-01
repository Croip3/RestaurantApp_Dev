import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
import { FaHome } from "react-icons/fa";
import { Signout } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/restaurants">
          <FaHome class="mr-5" /> Restaurants
        </SidebarLink>
        <SidebarLink to="/login">
          <Signout class="mr-4"></Signout>Ausloggen
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
