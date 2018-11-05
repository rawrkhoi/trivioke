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
        <table style={{ width: '400px', textAlign: 'center' }}>
          <thead>Lifelines</thead>
          <tbody>
            <tr>
              <td><button type="button" onClick={handleClick}>50/50</button></td>
              <td><button type="button" onClick={triviaRequest}>Change Question</button></td>
              <td><button type="button" onClick={changeCat}>Change Category</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Lifelines;
