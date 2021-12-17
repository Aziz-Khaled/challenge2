import  React from 'react'
import {Nav, Offcanvas,Navbar,Container } from 'react-bootstrap'
import '../NavBar/NavBar.css'

const NavBar = (props) => {
    return (
        <div >
            <Navbar className='NavBar' bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand className='Font' href="#">{props.title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">{props.title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#About-css">About</Nav.Link>
          <Nav.Link href="#pro">Projects</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar
