import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"

import Seo from "../components/seo"
import Footer from "../components/footer"
import HomeNavbar from "../components/HomeNavbar"

const Template = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const blogImg = data.markdownRemark.frontmatter.image
  const excerpt = data.markdownRemark.frontmatter.excerpt
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(blogImg)
  })

  return (
    <>
      <HomeNavbar />
      <Seo title={title} description={excerpt} />
      <Container>
        <Row>
          <Col>
            <h1>{title}</h1>
            <Image src={blogImg} width="100%" rounded />
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
      <Footer />
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
        image
      }
    }
  }
`

export default Template
