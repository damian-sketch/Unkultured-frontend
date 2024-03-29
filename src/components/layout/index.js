import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './styles.css'
import Header from "../header"
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bodywrap">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className= "maincontainer"
        style={{
          marginTop: `40px`,
          marginLeft: `40px`,
          maxWidth: 1180,
          padding: `0 1.0875rem 1.45rem`,
          
        }}
      >
        <main>{children}</main>
        
      </div>
      <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
