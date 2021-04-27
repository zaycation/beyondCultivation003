import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import SEO from "../components/seo"
import HomeNavbar from "../components/HomeNavbar"

const Template = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const excerpt = data.markdownRemark.frontmatter.excerpt
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html

  return (
    <>
      <HomeNavbar />
      <SEO title={title} description={excerpt} />
      <Container>
        <Row>
          <Col>
            <h1>{title}</h1>
            <div>
              <em>{date}</em>
            </div>
            <br />
            <div
              className="blogpost"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
