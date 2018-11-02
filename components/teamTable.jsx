import React, { Component } from 'react';
import { FormGroup, ControlLabel,FormControl } from 'react-bootstrap';

class Table extends Component {
  render() {
      return (
        <div>
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Team 1 Name</ControlLabel>
          <FormControl
            type="text"
            name="team1"
            placeholder="Enter text"
            onChange={this.props.handleChange}
          />
        </FormGroup>
      </form>
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Team 2 Name</ControlLabel>
            <FormControl
              type="text"
              name="team2"
              placeholder="Enter text"
              onChange={this.props.handleChange}
            />
          </FormGroup>
        </form>
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Team 3 Name</ControlLabel>
            <FormControl
              type="text"
              name="team3"
              placeholder="Enter text"
              onChange={this.props.handleChange}
            />
          </FormGroup>
        </form>
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Team 4 Name</ControlLabel>
            <FormControl
              type="text"
              name="team4"
              placeholder="Enter text"
              onChange={this.props.handleChange}
            />
          </FormGroup>
        </form>
        </div>
      )
  }
}

export default Table;
