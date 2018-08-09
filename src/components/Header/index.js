import React, { Component } from 'react'
import Link, { push } from 'gatsby-link'
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
  }
  sendSearch() {
    if (this.state.search) {
      push(`/items?q=${this.state.search}`)
    }
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.sendSearch()
    }
  }
  render() {
    return (
      <header className="Header">
        <div className="wrapper">
          <Link to="/">
            <img src="/Logo_ML.png" />
          </Link>
          <div className="search">
            <input
              className="search-field"
              type="text"
              name="search"
              placeholder="Nunca dejes de buscar"
              onChange={e => this.setState({ search: e.target.value })}
              onKeyPress={e => this.handleKeyPress(e)}
              value={this.state.search}
            />
            <button className="search-button" onClick={() => this.sendSearch()}>
              Search
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
