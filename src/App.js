// @flow
import React, { Component } from 'react'
import { DICTIONARY } from './constants'
import Navigation from './components/Navigation'
import Quiz from './components/Quiz'
import './App.css'

type StateT = {
  activePage: string,
  question: string,
  answerKey: string,
}

class App extends Component<{}, StateT> {
  state = {
    activePage: 'hiragana',
    question: '',
    answerKey: '',
  }

  componentDidMount() {
    this.getRandomKana()
  }

  shouldComponentUpdate(nextProps: {}, nextState: StateT) {
    if (this.state.answerKey === nextState.answerKey) {
      this.getRandomKana()
    }
    return true
  }

  handleNavSelect = (pageId: string) => {
    this.setState(
      {
        activePage: pageId,
      },
      this.getRandomKana,
    )
  }

  getRandomKana = () => {
    const library = DICTIONARY[this.state.activePage]

    if (!library) {
      return
    }

    const quiz = library[Math.floor(Math.random() * library.length)]
    this.setState({
      question: quiz.kana,
      answerKey: quiz.romanji,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Let's Learn Kana Together!</header>
        <div className="App-main">
          <Navigation handleClick={this.handleNavSelect} />
          {this.state.activePage === 'hiragana' ||
          this.state.activePage === 'katakana' ? (
            <Quiz
              question={this.state.question}
              answerKey={this.state.answerKey}
              getNextQuestion={this.getRandomKana}
            />
          ) : (
            <div>Let's Learn Kana Together was built by Jennie</div>
          )}
        </div>
      </div>
    )
  }
}

export default App
