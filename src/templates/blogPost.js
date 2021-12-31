import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Slide from "react-reveal/Slide"
import Flip from "react-reveal/Flip"
import { Container, Row, Col, Button, Card } from "react-bootstrap"

import Seo from "../components/seo"
import Footer from "../components/footer"
import HomeNavbar from "../components/HomeNavbar"

const Template = ({ data }) => {
  const title = data.frontmatter.title
  const excerpt = data.frontmatter.excerpt
  const post = data.markdownRemark
  const blogImg = post.frontmatter.image
  //const { previous, next } = data
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(blogImg)
  })

  return (
    <>
      <Seo title={title} description={excerpt} />
      <HomeNavbar />
      <div
        className="frame"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.15)), url("${blogImg}")`,
        }}
      >
        <Container>
          <Row>
            <Col>
              <div className="py-5 text-white text-center">
                <header>
                  <Flip top>
                    <h1 itemProp="headline" className="py-5">
                      {post.frontmatter.title}
                    </h1>
                  </Flip>
                  <Flip top>
                    <p>{post.frontmatter.date}</p>
                  </Flip>
                </header>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col className="my-2">
            <Slide right>
              <br />
              <Card>
                <Card.Body className="d-flex align-items-center justify-content-between mx-2">
                  <div>
                    <p className="mb-2">
                      Check your eligibility for a VA Home Loan in less than two
                      minutes:
                    </p>
                    <br />
                    <p className="text-muted">
                      No long forms · No spam · No fees
                    </p>
                  </div>
                  <div className="text-center">
                    <Link to="/form" className="card-link">
                      <Button block variant="light" className="card-btn">
                        Find Savings
                      </Button>
                    </Link>
                    <br />
                    <a
                      href="https://goo.gl/maps/Ev9Bu8NkZ2cNcz5M6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      4.5 / 5.0 Stars on Google Reviews
                    </a>
                  </div>
                </Card.Body>
              </Card>
              <br />
            </Slide>
            <hr className="colored-div" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Slide bottom>
              <article
                className="blog-post my-3"
                itemScope
                itemType="http://schema.org/Article"
              >
                <section
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  itemProp="articleBody"
                />
                <hr className="colored-div" />
              </article>
            </Slide>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Template

export const postQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        image
      }
    }
  }
`
