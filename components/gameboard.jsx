import React, { Component } from 'react';

class Trivia extends Component {
  constructor(props) {
    super(props);
  this.state = {
    questions: [],
  };
}

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = 'https://opentdb.com/api.php?amount=2&category=9&difficulty=medium&type=multiple';

    fetch(url)
      .then(result => result.json())
      .then((data) => {
        this.setState({
          questions: data.results,
        });
        console.log(data.results);
      })
      .catch((err) => { console.error(err); });
  }

  render() {
    const { questions } = this.state;
    const questArray = [];
    function escapeHtml(text) {
      return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&ldquo;/g, '"')
        .replace(/&rsquo;/g, "'");
    }
    questions.forEach((entry) => {
      const multiChoice = [
        <li key={entry.category}>{escapeHtml(entry.question)}</li>,
        <div key="answers">
          <button type="button">{escapeHtml(entry.correct_answer)}</button>
          <button type="button">{escapeHtml(entry.incorrect_answers[0])}</button>
          <button type="button">{escapeHtml(entry.incorrect_answers[1])}</button>
          <button type="button">{escapeHtml(entry.incorrect_answers[2])}</button>
        </div>,
      ];
      questArray.push(multiChoice);
    });

    return <ul>{questArray[0]}</ul>;
  }
}

export default Trivia;
