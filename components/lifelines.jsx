/* eslint-disable react/prop-types */
import React from 'react';

class Lifelines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.handleClick = this.handleClick.bind(this)
  }

  handleChange() {
    this.setState({
    });
  }

  // handleClick() {
  //   this.props.question.incorrect_answers.splice(2);
  // }

  render() {
    const { handleClick, triviaRequest } = this.props;
    return (
      <div>
        Lifelines
        <button type="button" onClick={handleClick}>50/50</button>
        <button type="button" onClick={triviaRequest}>Change Question</button>
        <button type="button" onClick={triviaRequest}>Change Category</button>
      </div>
    );
  }
}
export default Lifelines;
