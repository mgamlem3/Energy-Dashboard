import React from "react";
import "bootstrap";

import { SubMenu, myNav } from "./styles.js";

class Nav extends React.Component {
    render() {
        return (
            <myNav className='navbar navbar-dark bg-dark'>
                <a className='navbar-brand' href='#'>Energy Dashboard</a>
                <SubMenu className='nav-item nav-link active' href='./index.html'>Home <span className='sr-only'>(current)</span></SubMenu>
                <SubMenu className='nav-item nav-link' href='./building_details.html'>Buildings</SubMenu>
                <SubMenu className='nav-item nav-link' href='./building_comparison.html'>Compare</SubMenu>
                <SubMenu className='nav-item nav-link' href='#'>Display</SubMenu>
                <SubMenu className='nav-item nav-link' href='./management.html'>Log in</SubMenu>
            </myNav>
        );
    }
}


export default Nav;
