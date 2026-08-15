import React from 'react'

import {Form,Button,Container,Row,Col,InputGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";

function LoginScreen() {
  return (
    <>
    <Container>
      <Row className="justify-content-md-center text-dark fs-4 mt-5 ">
        <Col className="border border-2 border-dark opacity-0.4 p-3" md={6}><Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" size="md">
       Login
      </Button>
    </div>
    <br />
     <div className="d-flex align-items-center gap-2 mb-3 justify-content-center">
  <Form.Label className="mb-0">New user?</Form.Label>
      <Link class="navbar-brand text-danger" to="/signup"> Sign up</Link>
  {/* <Button variant="link">Sign Up</Button> */}
</div>
    </Form></Col>
        
      </Row>
      </Container>
    </>
  )
}

export default LoginScreen