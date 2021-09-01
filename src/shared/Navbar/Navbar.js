import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css'

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="navbar-brand" href="">
          CS Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 navbar-elements-container"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav className="navbar-element">
              <Link className="navbar-element-link" to="/">
                Home
              </Link>
            </Nav>
            <Nav className="navbar-element">
              <Link className="navbar-element-link" to="/progress">
                Progress
              </Link>
            </Nav>
            <Nav className="navbar-element">
              <Link className="navbar-element-link" to="/about">
                About
              </Link>
            </Nav>
            <Nav className="navbar-element">
              <Link className="navbar-element-link" to="/login">
                Login
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
