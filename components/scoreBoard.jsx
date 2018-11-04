/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { currTeam, team1, team2 } = this.props;
    return (
      <div>
        <div>Scoreboard</div>
        <table width="400px" className="table">
          <thead>
            <tr>
              <th scope="col">Team</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr id="team1" style={{ background: currTeam === 'team1' ? 'red' : 'white' }}>
              <td>{sessionStorage.team1}</td>
              <td>{team1}</td>
            </tr>
            <tr id="team2" style={{ background: currTeam === 'team2' ? 'red' : 'white' }}>
              <td>{sessionStorage.team2}</td>
              <td>{team2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Scoreboard;
