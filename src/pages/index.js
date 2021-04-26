import React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"

import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <>
      <Container className="container-fluid fluid">
        <Row>
          <Col>
            <Layout>
              <div>
                {edges.map(edge => {
                  const { frontmatter } = edge.node
                  return (
                    <div key={frontmatter.path}>
                      <Link to={frontmatter.path}>{frontmatter.title}</Link>
                      &nbsp;
                      <small>
                        {" "}
                        <em>published on</em> {frontmatter.date}
                      </small>
                      <p>{frontmatter.excerpt}</p>
                      <br />
                    </div>
                  )
                })}
              </div>
            </Layout>
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
