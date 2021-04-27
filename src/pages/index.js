import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"

import Header from "../components/header"
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
            <div>
              {edges.map(edge => {
                const { frontmatter } = edge.node
                return (
                  <>
                    <div key={frontmatter.path} className="my-3">
                      <Card>
                        <Card.Body>
                          <Link className="title-link" to={frontmatter.path}>
                            <Card.Title>{frontmatter.title}</Card.Title>
                          </Link>
                          &nbsp;
                          <small>
                            <em>published on</em> {frontmatter.date}
                          </small>
                          <Card.Text className="my-3">
                            {frontmatter.excerpt}
                          </Card.Text>
                          <div className="d-flex align-items-center justify-content-between">
                            <Link className="title-link" to={frontmatter.path}>
                              <Button variant="dark">View Post</Button>
                            </Link>
                            <Badge pill variant="success">
                              {frontmatter.tags}
                            </Badge>
                          </div>
                        </Card.Body>
                        <Card.Img variant="bottom" src={frontmatter.image} />
                      </Card>
                    </div>
                  </>
                )
              })}
            </div>
          </Col>
        </Row>
      </Container>
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
          }
        }
      }
    }
  }
`

export default IndexPage
