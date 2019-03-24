import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import logo from "../assets/logo_black.png"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header;

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
          <img src={logo} alt="logo"></img>
          기술 블로그
          </Link>
      </h1>
    )

    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(1.5),
          }}
        >
          Copyright © <a href="https://github.com/jeIIyqueen">jeIIyqueen</a>, All rights reserved.
        </footer>
      </div>
    )
  }
}

export default Layout