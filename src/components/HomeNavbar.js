import React from "react"
//import { Link } from "gatsby"
import Flip from "react-reveal/Flip"
import { FaCannabis } from "react-icons/fa"
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap"

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
              <Nav.Link href="/success">Success</Nav.Link>

              <Nav.Link href="/faq">Grower FAQ</Nav.Link>
              <NavDropdown title="Start Here" id="basic-nav-dropdown">
                <Flip top>
                  <NavDropdown.Item href="/getting-started-growing-cannabis">
                    Get Started Guide
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/humidity-temps-for-cannabis-growing">
                    Temp and RH Cheat Sheet
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/understanding-ph">
                    Understanding pH
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/defoliation101">
                    Defoliation 101
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/cannabis-windowsill-tutorial">
                    Windowsill Grow Guide
                  </NavDropdown.Item>
                </Flip>
              </NavDropdown>
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
