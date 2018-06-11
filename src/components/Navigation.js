import React from 'react'
import './Navigation.css'

class Navigation extends React.Component {
  state = {
    activeTab: '',
  }

  onClick = pageId => {
    this.props.handleClick(pageId)
  }

  render() {
    return (
      <nav className="Navigation">
        <ul>
          <li
            className="Navigation-link"
            onClick={() => this.onclick('hiragana')}
          >
            Hiragana
          </li>
          <li
            className="Navigation-link"
            onClick={() => this.onClick('katakana')}
          >
            Katakana
          </li>
          <li className="Navigation-link" onClick={() => this.onClick('about')}>
            About
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
