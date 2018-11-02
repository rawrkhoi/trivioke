import React from 'react';
import axios from 'axios';
class Lifelines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.handleClick = this.handleClick.bind(this)
  }
  handleChange() {
    this.setState({
    })
  }

  // handleClick() {
  //   this.props.question.incorrect_answers.splice(2);
  // }

  render() {
    return (
      <div>
        Lifelines
        <button type="button" onClick={this.props.handleClick}>50/50</button>,
        <button type="button" onClick={this.props.triviaRequest}>Change Question</button>,
        <button type="button" onClick={this.props.triviaRequest}>Change Category</button>
        
      </div>
    );
  }
}
export default Lifelines;