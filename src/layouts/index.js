import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import "./index.scss"

import Header from '../components/Header'

const Layout = ({ children, data }) => (
  <main className="Page">
    <Helmet
      title={"Front end test"}
    />
    <Header />
    <div className="content">
      <div className="wrapper">{children()}</div>
    </div>
  </main>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
