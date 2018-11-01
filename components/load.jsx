import React, { Component } from 'react';
import Filters from './filters.jsx'

class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diff: null,
      cat: null,
    };
    this.handeleClick = this.handeleClick.bind(this)
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {

  }

  handeleClick() {
    this.setState({
      [event.target.name]: event.target.id
    })
  }

  render() {
    return (
      <div>
        <div key="filters">
        <Filters click={this.handeleClick}/>
        </div>
        <div key="diff">
          <button type="button" name="diff" id="easy" onClick={this.handeleClick}>Easy</button>
          <button type="button" name="diff" id="medium" onClick={this.handeleClick}>Medium</button>
          <button type="button" name="diff" id="hard" onClick={this.handeleClick}>Hard</button>
        </div>
        <div key="begin">
          <button type="button">Begin Game</button>
        </div>

      </div>
    );
  }
}
export default Load;