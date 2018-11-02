import React, { Component } from 'react';

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
    score: 0,
    };
  }

  // triviaRequest() {
  //   const url = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple';
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => this.setState({ question: data.results[0] } ))
  //     .catch((err) => { console.error(err); });
  // }

  componentDidMount() {
    this.setState({score: 1});
  }

  render() {
    const { question } = this.props;
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
      function shuffle(answerArr) {
        for (let i = answerArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [answerArr[i], answerArr[j]] = [answerArr[j], answerArr[i]];
        }
        return answerArr;
      }
      const answers = [
        <button key="c" type="button" onClick={() => this.props.triviaRequest()}>{escapeHtml(question.correct_answer)}</button>,
        <button key="i1" style={{ display: this.props.hidden ? 'block' : 'none' }} type="button" >{escapeHtml(question.incorrect_answers[0])}</button>,
        <button key="i2" style={{ display: this.props.hidden ? 'block' : 'none' }} type="button">{escapeHtml(question.incorrect_answers[1])}</button>,
        <button key="i3" type="button">{escapeHtml(question.incorrect_answers[2])}</button>
      ];
      let shuffleArr = shuffle(answers);
      const multiChoice = [
        <div key="trivia">
          <div key="question">{escapeHtml(question.question)}</div>
          <div key="answers">{shuffleArr.map(answer => <li>{answer}</li>)}</div>
        </div>,
      ];
    return <div>{multiChoice}</div>;
    } else {
      return <div>Loading</div>
    }
  }
}

export default Trivia;