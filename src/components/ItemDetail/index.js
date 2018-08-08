import React, { Component } from 'react'
import Breadcrumb from '../Breadcrumb'
import axios from 'axios'
import './ItemDetail.scss'

class ItemDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }
  componentDidMount() {
    axios.get(`/api/items/${this.props.query}`).then(resp => {
      console.log(resp.data)
      this.setState({
        data: resp.data.item,
      })
    })
  }
  render() {
    return (
      <div className="ItemDetail">
        <Breadcrumb />
        <div className="container">
          <div className="item-holder">
            <div className="item-image">
              <img src={this.state.data.picture} />
            </div>
            <div className="item-information">
              <span className="sales">
                {this.state.data.condition} - {this.state.data.sold_quantity}{' '}
                vendidos
              </span>
              <h2 className="name">{this.state.data.title}</h2>
              {this.state.data.price ? (
                <span className="price">
                  $ {this.state.data.price.amount}
                  <span />
                </span>
              ) : (
                ''
              )}
              <button className="buy-button">Comprar</button>
            </div>
          </div>
          <div className="item-description">
            <h3 className="title">Descripción del producto</h3>
            <p className="text">
              {this.state.data.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemDetail
