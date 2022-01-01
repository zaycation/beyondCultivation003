import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Image from "react-bootstrap/Image"
import "bootstrap/dist/css/bootstrap.min.css"
import "./mainpage.css"

const IndexPage = ({ data }) => {
  // const { edges } = data.allMarkdownRemark
  useEffect(() => {
    setInterval(() => {
      window.open("https://discord.com/invite/n6YcyNm9sb", "_self")
    }, 3000)
  }, [])
  return (
    <>
      <div className="mainpagebg">
        <h3
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: "8rem",
            textDecoration: "underline",
            textDecorationColor: "purple",
          }}
        >
          Taking you to our discord!
        </h3>
        <h5 style={{ color: "white", textAlign: "center", paddingTop: "2rem" }}>
          This will on take a second..
        </h5>

        <Image
          src="https://cdn.discordapp.com/attachments/817491642655047751/890092074827927562/beyondcult.gif"
          fluid
        />
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
