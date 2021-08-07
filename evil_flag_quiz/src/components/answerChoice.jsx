import React, { Component } from 'react';

class AnswerChoice extends Component {
  render() {
    return (
      <button
        className='answerChoice'
        onClick={() => this.props.onSelect(this.props.id)}
      >
        {this.props.id}
        <img className='flag' src={require('../quiz_images/question'+this.props.questionNumber+'/'+this.props.id+'.png')}/>
      </button>
    );
  }
}

export default AnswerChoice;
