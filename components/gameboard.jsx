import React from 'react';
import ReactDOM from 'react-dom';

const GameBoard = ({ questions }) => (
  <div>
    <h4> Repo List Component </h4>
    There are {questions.length} questions.
    {questions.map(question => (
      <li key={question.category}> <em>Questions: {question.question}</em> | | <strong> Answer:</strong> {question.correct_answer} |
        | <i>Wrong Answers: </i> <li> {question.incorrect_answers}</li>
      </li>
    ))}
  </div>
);

export default GameBoard;
