import React, { Component } from 'react';

class FunctionButton extends Component {
  render() {
    return (
      <button
        //className='answerChoice'
        onClick={() => this.props.function()}
      >
        {this.props.text}
      </button>
    );
  }
}

export default FunctionButton;
