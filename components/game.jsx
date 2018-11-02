import React from 'react';
import axios from 'axios';
import Lifelines from './lifelines.jsx';
import Trivia from './trivia.jsx'
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currTeam: null,
      teams: {
        team1: [],
        team2: [],
        team3: [],
        team4: [],
      }
    };


  }
  handleChange() {
    this.setState({
    })
  }

  render() {
    return (
      <div>
        <Lifelines handleChange={this.handleChange}/>
        <Trivia handleChange={this.handleChange}/>
      </div>
    );
  }
}
export default Game;