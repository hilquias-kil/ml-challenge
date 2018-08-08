import React, { Component } from 'react'
import Breadcrumb from '../Breadcrumb'
import Search, { SearchItem } from '../Search'
import axios from 'axios'

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      items: [],
      loading: false,
    }
  }
  componentDidMount() {
    this.changeQuery(this.props.query)
  }
  componentWillReceiveProps(nextProps) {
    this.changeQuery(nextProps.query)
  }
  changeQuery(query) {
    if (query !== this.state.query) {
      this.setState(
        {
          query: query,
        },
        () => this.getResult()
      )
    }
  }
  getResult() {
    this.setState({ loading: true })
    axios.get(`/api/items${this.state.query}`).then(resp => {
      this.setState({
        items:
          resp.data.items.length > 4
            ? resp.data.items.slice(0, 4)
            : resp.data.items,
        loading: false,
      })
    })
  }
  render() {
    return (
      <div className="SearchResult">
        <Breadcrumb />
        <Search cssCLass={this.state.loading ? 'loading' : ''}>
          {this.state.items.map(item => (
            <SearchItem data={item} key={item.id} />
          ))}
        </Search>
      </div>
    )
  }
}

export default SearchResult
