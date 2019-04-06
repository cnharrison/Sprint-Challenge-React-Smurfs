import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

function myNav(props) {
  return (
    <nav>
      <div className="nav">
      <Navbar color="#62cdfd">
      <NavbarBrand href="/">Smurf Village</NavbarBrand>
        <NavItem><NavLink><RouterNavLink to="/">Home</RouterNavLink></NavLink></NavItem>
        <NavItem><NavLink><RouterNavLink to="/smurf-form">Add Smurf</RouterNavLink></NavLink></NavItem>
        </Navbar>
      </div>
    </nav>
  );
}

export default myNav;
