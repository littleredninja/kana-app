import React from 'react'

class Navigation extends React.Component {
  state = {
    activeTab: '',
  }

  onClick = pageId => {
    this.props.handleClick(pageId)
  }

  render() {
    return (
      <nav className="navigation">
        <ul>
          <li onClick={() => this.onClick('hiragana')}>Hiragana</li>
          <li onClick={() => this.onClick('katakana')}>Katakana</li>
          <li onClick={() => this.onClick('about')}>About</li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
