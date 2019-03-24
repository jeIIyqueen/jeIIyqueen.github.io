import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import logo from "../assets/logo_black.png"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header;

    if (location.pathname === rootPath) {
      header = (
          <h1>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              <img src={logo}></img>
              기술 블로그
            </Link>
          </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            textAlign: 'center',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(1.5),
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://github.com/jeIIyqueen">jeIIyqueen</a>
        </footer>
      </div>
    )
  }
}

export default Layout