import React, { Component } from 'react';
import Filters from './filters.jsx'

class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {

  }

  render() {
    return (
      <div bsStyle="">
        <Filters />
      </div>
    );
  }
}
export default Load;