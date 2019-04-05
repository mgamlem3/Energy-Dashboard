import React from "react";
import "bootstrap";

import Logo from "../Logo/logo.jsx";
import { myNav } from "./styles.js";

class DisplayNav extends React.Component {
    render() {
        return (
            <myNav className='navbar'>
            {/* <myNav className='navbar navbar-dark bg-dark'> */}
                <a className='navbar-brand' href='./index.html'><Logo /></a>
            </myNav>
        );
    }
}


export default DisplayNav;
