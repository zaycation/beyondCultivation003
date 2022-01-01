import React, { useEffect } from "react"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = ({ data }) => {
  // const { edges } = data.allMarkdownRemark
  useEffect(() => {
    window.open("https://discord.com/invite/n6YcyNm9sb", "_self")
  }, [])
  return (
    <>
      <div>
        <h3
          style={{
            textAlign: "center",
            paddingTop: "15rem",
            textDecoration: "underline",
            textDecorationColor: "purple",
          }}
        >
          Taking you to our discord!
        </h3>
        <h5
          style={{
            textAlign: "center",
            paddingTop: "2rem",
          }}
        >
          This will just take a second or two..
        </h5>
      </div>
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
            image
          }
        }
      }
    }
  }
`

export default IndexPage
