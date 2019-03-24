import React from "react"
import { StaticQuery, graphql } from "gatsby"

import team from '../assets/team.gif'
import './_styles.scss';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div className="intro-container">
            <img src={team} className="intro-img" alt="intro-img"></img>
            <div className="intro-title-container">
              <h1 className="main-title">'길 위의 생명에게 도움의 손길을, Rescat'</h1>
              <h4 className="main-sub-title">
                이 세상에 소중하지 않은 <strong>생명</strong>은 없습니다. 이곳은 <strong>생명을 존중하는 {author} 개발자</strong>들이 만들어가는 <strong>세상</strong>입니다.
            </h4>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/corporation/main_logo.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          facebook
        }
      }
    }
  }
`

export default Bio