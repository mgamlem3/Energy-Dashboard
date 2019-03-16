import React from "react";

import Logo from "../Logo/logo.jsx";
import Nav from "../Nav/nav.jsx";
import { LRColumn } from "../HomepageContent/styles.js";

class Header extends React.Component {
    render() {
        return (
            <LRColumn className='container-fluid'>
                <div className='row'>
                    <div className='col-sm'>
                        <Logo />
                        <Nav />
                    </div>            
                </div>
            </LRColumn>
        );
    }
}

export default Header;
