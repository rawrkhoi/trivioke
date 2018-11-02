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
          <MenuItem name="cat" id="9" onClick={this.props.click}>General</MenuItem>
          <MenuItem name="cat" id="11" onClick={this.props.click}>Movies</MenuItem>
          <MenuItem name="cat" id="14" onClick={this.props.click}>TV</MenuItem>
          <MenuItem name="cat" id="14" onClick={this.props.click}>TV</MenuItem>
          <MenuItem name="cat" id="15" onClick={this.props.click}>Video Games</MenuItem>
          <MenuItem name="cat" id="17" onClick={this.props.click}>Science</MenuItem>
          <MenuItem name="cat" id="22" onClick={this.props.click}>Geography</MenuItem>
          <MenuItem name="cat" id="23" onClick={this.props.click}>History</MenuItem>
          <MenuItem name="cat" id="26" onClick={this.props.click}>Celebs</MenuItem>
          <MenuItem name="cat" id="27" onClick={this.props.click}>Animals</MenuItem>
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
