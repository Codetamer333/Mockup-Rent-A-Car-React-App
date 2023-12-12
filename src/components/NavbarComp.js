

import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';

export default class NavbarComp extends Component {
  render() {
    const { showSignInLink, showSignUpLink } = this.props;

    return (
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand className='ps-5'>
              <img src="/images/wlogo.png" alt='logo' width={70} />
            </Navbar.Brand>
            
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto  my-lg-0 "
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='me-4 col-6' href="/">Home</Nav.Link>
                <Nav.Link className='me-4 col-6' href="/page2">How It Work</Nav.Link>
                <Nav.Link className='me-4 col-6' href="/page3">Why Choose Us</Nav.Link>
              </Nav>
              {showSignInLink && (
                <Form className="d-flex me-4 ps-5">
                  <Button className='rounded-pill' variant="outline" href='/SignInPage'>Sign In</Button>
                </Form>
              )}
              {showSignUpLink && (
                <Form className="d-flex me-3">
                  <Button className='sign-button rounded-pill' variant='warning' href='/SignUpPage'>Sign Up</Button>
                </Form>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
