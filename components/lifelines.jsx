/* eslint-disable react/prop-types */
import React from 'react';

class Lifelines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { handleClick, triviaRequest, changeCat } = this.props;
    return (
      <div>
        Lifelines
        <button type="button" onClick={handleClick}>50/50</button>
        <button type="button" onClick={triviaRequest}>Change Question</button>
        <button type="button" onClick={changeCat}>Change Category</button>
      </div>
    );
  }
}
export default Lifelines;
