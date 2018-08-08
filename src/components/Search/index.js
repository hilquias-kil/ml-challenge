import React from 'react'
import Link from 'gatsby-link'
import './Search.scss'

export const SearchItem = ({ data }) => (
  <div className="SearchItem">
    <Link to={`/items/${data.id}`}>
      <div className="image">
        <img src={data.picture} />
      </div>
    </Link>
    <div className="info">
      <div className="text">
        <span className="price">$ {data.price.amount}</span>
        {data.free_shipping && (
          <img src="/ic_shipping.png" className="shipping" />
        )}
      </div>
      <span className="description">
        <Link to={`/items/${data.id}`}>{data.title}</Link>
      </span>
    </div>
    <div className="city">
      <span>{data.condition}</span>
    </div>
  </div>
)

export default ({ children, cssCLass }) => <div className={`Search ${cssCLass}`}>{children}</div>
