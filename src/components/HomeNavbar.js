import React from "react"
import Flip from "react-reveal/Flip"
import { FaCannabis } from "react-icons/fa"
import { Link } from "gatsby"
import { Navbar, Nav, Button } from "react-bootstrap"

import "../css/Navbar.css"
const HomeNavbar = () => {
  const discInv = "https://discord.gg/n6YcyNm9sb"

  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        sticky="top"
        variant="dark"
        className="navbar__main"
      >
        <Flip top>
          <Navbar.Brand
            href="/"
            className="logo__text text-white d-flex flex-row align-items-center justify-content-center "
            style={{ fontSize: "95%" }}
          >
            <FaCannabis className="mr-1 text-white" size={24} />
            Beyond Cultivation
          </Navbar.Brand>
        </Flip>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Flip top>
              <Link to="/success">
                <Nav.Link href="#success">Success</Nav.Link>
              </Link>
              <Link to="/faq">
                <Nav.Link href="#faq">Grower FAQ</Nav.Link>
              </Link>
            </Flip>
          </Nav>
          <Button
            variant="outline-light"
            className="navbar-btn"
            onClick={() => window.open(discInv)}
          >
            <Flip top>Join Our Discord</Flip>
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default HomeNavbar
