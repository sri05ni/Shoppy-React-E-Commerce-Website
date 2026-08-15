import React from 'react'
import { Navbar,Container,Nav,Image } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
function Header(props) {
  return (
    <>
    <Navbar bg='dark' variant='dark' collapseOnSelect>
        <Container>
            <LinkContainer to="/">
            <Navbar.Brand>Ecommerce Layout</Navbar.Brand>
            </LinkContainer>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/product">
            <Nav.Link >Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link > Cart {props.cartcount}</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default Header