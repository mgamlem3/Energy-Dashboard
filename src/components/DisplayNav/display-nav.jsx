import React from "react";
import "bootstrap";

import Logo from "../Logo/logo.jsx";

class DisplayNav extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <a className='navbar-brand' href='./index.html'><Logo /></a>
            </div>
        );
    }
}


export default DisplayNav;
