import React, { Component } from 'react';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';



class Filters extends Component {
  render() {
    const BUTTONS = ['Select Category'];
    const renderDropdownButton = (title, i) => {
      return (
        <DropdownButton
          bsStyle={title.toLowerCase()}
          title={title}
          key={i}
          id={`dropdown-basic-${i}`}
        >
          <MenuItem eventKey="9">General</MenuItem>
          <MenuItem eventKey="11">Movies</MenuItem>
          <MenuItem eventKey="14">TV</MenuItem>
          <MenuItem eventKey="15">Video Games</MenuItem>
          <MenuItem eventKey="17">Science</MenuItem>
          <MenuItem eventKey="22">Geography</MenuItem>
          <MenuItem eventKey="23">History</MenuItem>
          <MenuItem eventKey="26">Celebs</MenuItem>
          <MenuItem eventKey="27">Animals</MenuItem>
        </DropdownButton>
      );
    }
    
    const buttonsInstance = (
      <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
    );
    
    return buttonsInstance;
    
  }
}


export default Filters;
