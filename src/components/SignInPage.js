

import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import NavbarComp from './NavbarComp';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Authenticate user (you can replace this with your authentication logic)
    const storedCredentials = localStorage.getItem('userCredentials');
    const credentials = storedCredentials ? JSON.parse(storedCredentials) : null;

    if (credentials && credentials.email === email && credentials.password === password) {
      window.location.href = '/RegisterPage';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='container'>
      <NavbarComp showSignUpLink={false} showSignInLink={false} />
      <div className='row'>
        <div className='pb-5'>
          <MDBContainer
            fluid
            className='d-flex align-items-center justify-content-center bg-image'
            // style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}
          >
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
              <MDBCardBody className='px-5'>
                <h2 className='text-uppercase text-center mb-5'>Sign In</h2>
                <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
                <div className='d-flex flex-row justify-content-center mb-4'></div>
                <Button
                  className='mb-4 w-100 gradient-custom-4'
                  size='lg'
                  variant='warning'
                  type='button'
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
