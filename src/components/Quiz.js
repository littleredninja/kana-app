import React from 'react'
import './Quiz.css'

class Quiz extends React.Component {
  state = {
    isCorrectAnswer: false,
    hasInput: false,
    hasSubmittedAnswer: false,
  }

  skipQuestion = () => {
    document.getElementById('answerForm').reset()
    this.getNextQuestion()
  }

  getNextQuestion = () => {
    this.setState(
      {
        isCorrectAnswer: false,
        hasSubmittedAnswer: false,
        hasInput: false,
      },
      this.props.getNextQuestion(),
    )
  }

  onInput = () => {
    if (!document.getElementById('answerInput').value) {
      this.setState({
        hasInput: false,
      })
    } else {
      this.setState({
        hasInput: true,
      })
    }
  }

  onSubmitAnswer = () => {
    const answerInput = document.getElementById('answerInput').value
    if (answerInput === this.props.answerKey) {
      this.setState({
        isCorrectAnswer: true,
      })
      return
    }
    this.setState(
      {
        hasSubmittedAnswer: true,
      },
      () => {
        document.getElementById('answerForm').reset()
      },
    )
  }

  renderCorrectGuess = () => {
    return (
      <div>
        <div className="Quiz-answerGrade">Yes!</div>
        <button className="Quiz-primaryButton" onClick={this.getNextQuestion}>
          Next
        </button>
      </div>
    )
  }

  renderTry = () => {
    return (
      <div>
        <form id="answerForm" onSubmit={evt => evt.preventDefault()}>
          {!this.state.isCorrectAnswer &&
            this.state.hasSubmittedAnswer && (
              <div className="Quiz-answerGrade">Nope!</div>
            )}
          <input
            id="answerInput"
            name="answerInput"
            className="Quiz-answerInput"
            type="text"
            autoComplete="nope"
          />
          <button
            className="Quiz-primaryButton"
            onClick={this.onSubmitAnswer}
            type="button"
          >
            Try
          </button>
          <button
            className="Quiz-secondaryButton"
            onClick={this.skipQuestion}
            type="button"
          >
            Next
          </button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="Quiz-question">{this.props.question}</div>
        {this.state.isCorrectAnswer
          ? this.renderCorrectGuess()
          : this.renderTry()}
      </div>
    )
  }
}

export default Quiz
