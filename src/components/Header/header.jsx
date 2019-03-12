import React from "react";

import Logo from "../Logo/logo.jsx";
import Nav from "../Nav/nav.jsx";

class Header extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-sm'>
                    <Logo />
                    <Nav />
                </div>            
            </div>
        );
    }
}

export default Header;
