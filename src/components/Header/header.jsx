import React from "react";

import Logo from "../Logo/logo.jsx";
import Nav from "../Nav/nav.jsx";

class Header extends React.Component {
    render() {
        return (
            <div class='row'>
                <div class='col-sm'>
                    <Logo />
                    <Nav />
                </div>            
            </div>
        );
    }
}

export default Header;
