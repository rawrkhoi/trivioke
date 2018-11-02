import React from 'react';
import axios from 'axios';
import Lifelines from './lifelines.jsx';
import Trivia from './trivia.jsx'
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
      currTeam: null,
      question: null,
      teams: {
        team1: [],
        team2: [],
        team3: [],
        team4: [],
      }
    };
    this.triviaRequest = this.triviaRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  triviaRequest() {
    const url = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple';
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ question: data.results[0] }))
      .catch((err) => { console.error(err); });
  }

  componentDidMount() {
    this.triviaRequest();
  }
  
  handleChange() {
  }
  
  handleClick() {
    this.setState({visibility: !this.state.visibility})
  }
  
  render() {
    return (
      <div>
        <Lifelines handleChange={this.handleChange} triviaRequest={this.triviaRequest} handleClick={this.handleClick}/>
        <Trivia triviaRequest={this.triviaRequest} handleChange={this.handleChange} question={this.state.question} hidden={this.state.visibility}/>
      </div>
    );
  }
}
export default Game;