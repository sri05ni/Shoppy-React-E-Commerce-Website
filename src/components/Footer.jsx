import React from "react";
import { Accordion, Col, Row, Container } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Accordion defaultActiveKey="1" className="footer-accordion ">
        <Accordion.Item eventKey="0">
          <Accordion.Header>To Contact</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col>
                  <table style={{ color: "black" }}>
                    <tbody>
                      <tr>
                        <td>Contact No:</td>
                        <td>23458 97844</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
                <Col>
                  <table style={{ color: "black" }}>
                    <tbody>
                    <tr>
                      <td>Email id:</td>
                      <td>ecom@gmail.com</td>
                    </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Footer;
