/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

class Filters extends Component {
  render() {
    const { click } = this.props;
    const BUTTONS = ['Select Category'];
    const renderDropdownButton = (title, i) => (
      <DropdownButton
        bsStyle="default"
        title={title}
        key={i}
        id={`dropdown-basic-${i}`}
      >
        <MenuItem name="cat" id="9" onClick={click}>General</MenuItem>
        <MenuItem name="cat" id="11" onClick={click}>Movies</MenuItem>
        <MenuItem name="cat" id="14" onClick={click}>TV</MenuItem>
        <MenuItem name="cat" id="15" onClick={click}>Video Games</MenuItem>
        <MenuItem name="cat" id="17" onClick={click}>Science</MenuItem>
        <MenuItem name="cat" id="22" onClick={click}>Geography</MenuItem>
        <MenuItem name="cat" id="23" onClick={click}>History</MenuItem>
        <MenuItem name="cat" id="26" onClick={click}>Celebs</MenuItem>
        <MenuItem name="cat" id="27" onClick={click}>Animals</MenuItem>
      </DropdownButton>
    );

    const buttonsInstance = (
      <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
    );

    return buttonsInstance;
  }
}


export default Filters;
