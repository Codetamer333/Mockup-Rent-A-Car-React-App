import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import NavbarComp from './NavbarComp';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Save credentials to local storage
    localStorage.setItem('userCredentials', JSON.stringify({ name, email, password }));
    // Redirect to SignInPage after successful signup
    window.location.href = '/SignInPage';
  };

  return (
    <div className='container'>
      <NavbarComp showSignUpLink={true} showSignInLink={true} />
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
                <h2 className='text-uppercase text-center mb-5'>Create an account</h2>
                <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={(e) => setName(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
                <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' />
                <div className='d-flex flex-row justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                </div>
                <Button
                  className='mb-4 w-100 gradient-custom-4'
                  size='lg'
                  variant='warning'
                  type='register'
                  onClick={handleSignUp}
                >
                  Register
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
