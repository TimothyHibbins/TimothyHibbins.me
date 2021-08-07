import React, { Component } from 'react';
import AnswerChoice from './components/answerChoice';
import FunctionButton from './components/functionButton';
import './App.css';

class App extends Component {
  state = {
    questions: [
      'South Korea',
      'United Kingdom',
      'Nepal',
      'Australia',
      'United States of America',
    ],
    answerChoices: [
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
    ],
    answerKey: [
      'a',
      'b',
      'c',
      'd',
      'e',
    ],
    currentQuestionNumber: 0,
    questionsCorrect: 0,
    showAnswer: false,
    selectedAnswer: null

  }

  handleSelect = (answerChoiceID) => {
    console.log(answerChoiceID);

    const selectedAnswer = answerChoiceID
    this.setState( {selectedAnswer} );
  }

  handleSubmit = () => {
    if (!this.showAnswer && this.state.selectedAnswer) {
      console.log(this.state.selectedAnswer);

      // if (answerChoiceID == this.state.answerKey[this.state.currentQuestionNumber]) {
      //   const questionsCorrect = this.state.questionsCorrect + 1;
      //   this.setState( { questionsCorrect } );
      // }

      const showAnswer = true;
      this.setState( {showAnswer} );
    }
  }

  nextQuestion = () => {
    const currentQuestionNumber = this.currentQuestionNumber + 1;
    this.setState( {currentQuestionNumber} );
  }

  render() {
    const q = this.state.currentQuestionNumber;

    return (
      <React.Fragment>

        <h1>Evil Flag Quiz 😈</h1>
        <p>Correct: {this.state.questionsCorrect}/{this.state.questions.length}</p>

        <h2>Q{q+1}: {this.state.questions[q]}</h2>

        <div className='container'>
          {this.state.answerChoices[q].map(answerChoice => (
            <AnswerChoice
              key={answerChoice}
              id={answerChoice}
              questionNumber={q+1}
              onSelect={this.handleSelect}
              selected={false}
            />
          ))}
        </div>

        <FunctionButton text={'Previous Question'}function={this.previousQuestion}/>
        <FunctionButton text={'Submit Answer'}function={this.handleSubmit}/>
        <FunctionButton text={'Next Question'}function={this.nextQuestion}/>
      </React.Fragment>
    );
  }
}

export default App;
