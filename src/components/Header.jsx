import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
function Header(props) {
  return (
    <>
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Shoppy</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/cart">Cart {props.cartcount}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
