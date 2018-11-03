/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/sort-comp */
import React from 'react';
import Lifelines from './lifelines.jsx';
import Trivia from './trivia.jsx';
import Scoreboard from './scoreBoard.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
      question: null,
      currTeam: 'team1',
      
      team1: 0,
      team2: 0,
    };
    this.triviaRequest = this.triviaRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.nextTeam = this.nextTeam.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
  }

  triviaRequest() {
    const { category, diff } = this.props;
    const url = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${diff}&type=multiple`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ question: data.results[0] }))
      .catch((err) => { console.error(err); });
  }

  nextTeam() {
    const { currTeam } = this.state;
    return currTeam === 'team1' ? this.setState({ currTeam: 'team2' }) : this.setState({ currTeam: 'team1' });
  }

  // this.setState({ someProperty: { ...this.state.someProperty, flag: false } });

  increaseScore() {
    const { currTeam } = this.state;
    if (currTeam === 'team1') {
      this.setState(prevState => ({
        team1: prevState.team1 + 1,
        visibility: true,
      }));
    } else {
      this.setState(prevState => ({
        team2: prevState.team2 + 1,
        visibility: true,
      }));
    }
  }

  componentDidMount() {
    this.triviaRequest();
  }

  handleClick() {
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });
  }

  render() {
    const {
      question, visibility, currTeam, team1, team2,
    } = this.state;
    const { name1, name2 } = this.props;
    return (
      <div>
        <Lifelines
          handleChange={this.handleChange}
          triviaRequest={this.triviaRequest}
          handleClick={this.handleClick}
        />
        <Trivia
          triviaRequest={this.triviaRequest}
          handleChange={this.handleChange}
          question={question}
          hidden={visibility}
          nextTeam={this.nextTeam}
          increaseScore={this.increaseScore}
        />
        <Scoreboard currTeam={currTeam} team1={team1} team2={team2} name1={name1} name2={name2} />
      </div>
    );
  }
}
export default Game;
