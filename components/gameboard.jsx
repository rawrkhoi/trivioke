import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Trivia } from '';
class Trivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      }
    };

  
  render() {
    return (
      <div>
        <Trivia>

        </Trivia>
      </div>
    );
  }
}