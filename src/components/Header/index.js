import React, { Component } from 'react'
import { push } from "gatsby-link"
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
  }
  sendSearch() {
    if(this.state.search){
      push(`/items?q=${this.state.search}`)
    }
  }
  render() {
    return (
      <header className="Header">
        <div className="wrapper">
          {/* <img src="/Logo_ML.png" /> */}
          <div className="search">
            <input
              className="search-field"
              type="text"
              name="search"
              placeholder="Nunca dejes de buscar"
              onChange={e => this.setState({ search: e.target.value })}
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
