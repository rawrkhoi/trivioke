/* eslint-disable react/prop-types */
import React from 'react';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // function element_do(my_element, what_to_do) {
  //   document.getElementById(my_element).style.display = what_to_do;
  // }
  componentDidMount() {

  }

  render() {
    const {
      currTeam, teams, team1, team2, name1, name2,
    } = this.props;
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
              <td>{name1}</td>
              <td>{team1}</td>
            </tr>
            <tr id="team2" style={{ background: currTeam === 'team2' ? 'red' : 'white' }}>
              <td>{name2}</td>
              <td>{team2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Scoreboard;
