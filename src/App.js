import React, { Component } from 'react'
import { DICTIONARY } from './constants'
import './App.css'

class App extends Component {
  state = {
    library: 'hiragana',
    question: '',
    answerKey: '',
    isAnswer: null,
  }

  componentDidMount() {
    this.getRandomKana()
  }

  getRandomKana = libraryId => {
    const library = DICTIONARY[this.state.library]
    const kana = library[Math.floor(Math.random() * library.length)]
    this.setState({
      question: kana[1],
      answerKey: kana[0],
      isAnswer: null,
    })
  }

  selectLibrary = libraryId => {
    this.setState({
      library: libraryId,
    })
  }

  onSubmit = evt => {
    evt.preventDefault()
    const answerInput = document.getElementById('answerInput').value
    if (answerInput === this.state.answerKey) {
      this.setState({
        isAnswer: true,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header>Kana Practice</header>
        <div class="main">
          <div>{this.state.question}</div>
          {this.state.isAnswer ? (
            <div>
              <div>That's right!</div>
              <button onClick={() => this.getRandomKana()}>Next</button>
            </div>
          ) : (
            <div>
              <form>
                {!this.state.isAnswer && <div>Nope!</div>}
                <input id="answerInput" name="answerInput" type="text" />
                <button onClick={this.onSubmit} type="submit">
                  Check your answer
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
