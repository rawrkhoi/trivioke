import React, { Component } from 'react';
import { FormGroup, ControlLabel,FormControl } from 'react-bootstrap';

class Table extends Component {
  render() {
    for (var i = 1; i < 4; i++){
      return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Team 1 Name</ControlLabel>
          <FormControl
            type="text"
            name={`team${i}`}
            placeholder="Enter text"
            onChange={this.props.handleChange}
          />
        </FormGroup>
      </form>
      )

    }
  
  }
}


export default Table;
