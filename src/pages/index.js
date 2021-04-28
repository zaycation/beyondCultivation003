import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"

import Header from "../components/header"
import Footer from "../components/footer"
import HomeNavbar from "../components/HomeNavbar"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <>
      <HomeNavbar />

      <Header />

      <Container className="container-fluid">
        <Row>
          <Col>
            <h4 className="my-3 ml-1">Recent Blog Posts</h4>
          </Col>
        </Row>
        <Row>
          {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
              <>
                <Col xs={12} sm={12} md={3} lg={4} xl={4}>
                  <div
                    key={frontmatter.path}
                    className="my-3 d-flex align-items-center justify-content-center"
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={frontmatter.image} />
                      <Card.Body>
                        <Link className="title-link" to={frontmatter.path}>
                          <Card.Title>{frontmatter.title}</Card.Title>
                        </Link>
                        &nbsp;
                        <small>
                          <em>published on</em> {frontmatter.date}
                        </small>
                        <Badge pill variant="success">
                          {frontmatter.tags}
                        </Badge>
                        <Card.Text className="my-3">
                          {frontmatter.excerpt}
                        </Card.Text>
                        <Link className="title-link" to={frontmatter.path}>
                          <Button variant="dark">View Post</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </>
            )
          })}
        </Row>
      </Container>
      <Footer />
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
