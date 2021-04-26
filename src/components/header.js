import React from "react"
import Flip from "react-reveal/Flip"
import { Link } from "gatsby"

import { Container, Row, Col, Button } from "react-bootstrap"

import "../css/Homepage.css"

const Header = () => {
  const discInv = "https://discord.gg/n6YcyNm9sb"
  return (
    <>
      <Container className="container-fluid" style={{ margin: "auto" }}>
        <Row>
          <div className="hdr-img">
            <Col>
              <Flip bottom>
                <div className="hdr-text">
                  <p className="text-white text-center">
                    Where you can be yourself
                  </p>
                  <h4 className="text-white text-center">
                    Cannabis Growing Guides, Tips, and Help
                  </h4>
                  <div className="d-flex align-items-center justify-content-center">
                    <hr className="divider my-4" />
                  </div>
                  <div className="text-center">
                    <Button
                      className="hdr-btns"
                      variant="outline-light"
                      onClick={() => window.open(discInv)}
                    >
                      Join our Discord
                    </Button>{" "}
                    <Link to="/faq">
                      <Button className="hdr-btns" variant="outline-light">
                        View the FAQs
                      </Button>{" "}
                    </Link>
                  </div>
                </div>
              </Flip>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Header
