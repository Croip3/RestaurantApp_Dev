import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElement';

const Navbar = ({ toggle }) => {
  return (
   
      <Nav >
        <NavLink to='/restaurants'>Restaurants</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menü</p>
          <Bars />
        </NavIcon>
      </Nav>
   
  );
};

export default Navbar;