import React from "react";
import "bootstrap";

import { SubMenu, MyNav } from "./styles.js";

class Nav extends React.Component {
    render() {
        return (
            <MyNav className='navbar navbar-dark bg-dark'>
                <a className='navbar-brand' href='./index.html'>Energy Dashboard</a>
                <SubMenu className='nav-item nav-link' href='./building_details.html'>Buildings</SubMenu>
                <SubMenu className='nav-item nav-link' href='./building_comparison.html'>Compare</SubMenu>
                <SubMenu className='nav-item nav-link' href='./display.html'>Display</SubMenu>
                <SubMenu className='nav-item nav-link' href='./management.html'>System Management</SubMenu>
            </MyNav>
        );
    }
}


export default Nav;
