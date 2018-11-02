import React, { Component } from 'react';

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
    question: null,
    score: 0,
    };
  }

  triviaRequest() {
    const url = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple';
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ question: data.results[0] } ))
      .catch((err) => { console.error(err); });
  }

  componentDidMount() {
    this.triviaRequest();
  }

  render() {
    const { question } = this.state;
    function escapeHtml(text) {
      return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&ldquo;/g, '"')
        .replace(/&rdquo;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&lsquo;/g, "'")
        .replace(/&rsquo;/g, "'");
    }
    if (question) {
      const multiChoice = [
        <div>
        <div key="question">{escapeHtml(question.question)}</div>
          <button type="button" onClick={() => this.triviaRequest()}>{escapeHtml(question.correct_answer)}</button>
          <button type="button">{escapeHtml(question.incorrect_answers[0])}</button>
          <button type="button">{escapeHtml(question.incorrect_answers[1])}</button>
          <button type="button">{escapeHtml(question.incorrect_answers[2])}</button>
        </div>,
      ];
    return <div>{multiChoice}</div>;
    } else {
      return <div>Loading</div>
    }
  }
}

export default Trivia;