import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap';

import { SubMenu } from './styles.js'

class Nav extends React.Component {
  render() {
    return (
        <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Energy Dashboard</a>
        <SubMenu class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></SubMenu>
        <SubMenu class="nav-item nav-link" href="#">Buildings</SubMenu>
        <SubMenu class="nav-item nav-link" href="#">Compare</SubMenu>
        <SubMenu class="nav-item nav-link" href="#">Display</SubMenu>
        <SubMenu class="nav-item nav-link" href="#">Log in</SubMenu>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <SubMenu class="nav-item nav-link" href="#">Settings</SubMenu>
                </div>
        </div>
        </nav>
    );
}
}


export default Nav;