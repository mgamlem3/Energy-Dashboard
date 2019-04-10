import React from "react";

import Logo from "../Logo/logo.jsx";
import Nav from "../Nav/nav.jsx";

class Header extends React.Component {
    render() {
        return (
            <div className='d-flex flex-column'>
                <Logo />
                <Nav />
            </div>
        );
    }
}

export default Header;
