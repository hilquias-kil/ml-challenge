import React, { Component } from 'react'
import SearchResult from '../../components/SearchResult'
import ItemDetail from '../../components/ItemDetail'

const detail = url => {
  let arr = url.split('/items/')
  return arr.length > 1 ? arr[arr.length - 1] : ''
}

class Items extends Component {
  constructor(props) {
    super(props)
    let location = props.location
    this.state = {
      search: !!location.search,
      detail: detail(location.pathname),
    }
  }
  render() {
    return (
      <div>
        {this.state.search && <SearchResult query={location.search} />}
        {this.state.detail ? <ItemDetail query={this.state.detail} /> : ''}
      </div>
    )
  }
}

export default Items
