import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap';

import { Title } from './styles.js';

class Hello extends React.Component {
  render() {
    return (
      <div className='hello'>
        <Title>I Wanted to Say Hello to {this.props.name}!</Title>
        <div className='alert alert-info'>HELLO {this.props.name}!</div>
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
