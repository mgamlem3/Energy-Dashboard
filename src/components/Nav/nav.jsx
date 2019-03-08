import React from "react";
import "bootstrap";

import { SubMenu } from "./styles.js";

class Nav extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark'>
                <a className='navbar-brand' href='#'>Energy Dashboard</a>
                <SubMenu className='nav-item nav-link active' href='./index.html'>Home <span className='sr-only'>(current)</span></SubMenu>
                <SubMenu className='nav-item nav-link' href='./building_details.html'>Buildings</SubMenu>
                <SubMenu className='nav-item nav-link' href='./building_comparison.html'>Compare</SubMenu>
                <SubMenu className='nav-item nav-link' href='#'>Display</SubMenu>
                <SubMenu className='nav-item nav-link' href='#'>Log in</SubMenu>
                
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav'>
                        <SubMenu className='nav-item nav-link' href='#'>Settings</SubMenu>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Nav;
