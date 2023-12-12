
import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HomeComp from './HomeComp';
import NavbarComp from './NavbarComp';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user credentials from local storage
    const storedCredentials = localStorage.getItem('userCredentials');
    if (storedCredentials) {
      setUser(JSON.parse(storedCredentials));
    } else {
      // If no credentials found, navigate back to SignInPage
      navigate('/SignInPage');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear user credentials from local storage
    navigate('/SignInPage');
  };

  return (
    
    <div className='container'>
      <NavbarComp showSignUpLink={false} showSignInLink={false} />
      <div className='row'>
        <div className='pb-2'>
          <MDBContainer
            fluid
            className='d-flex align-items-center justify-content-center'
            // style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}
          >
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
              <MDBCardBody className='px-5'>
                <h2 className='text-uppercase text-center mb-5'>Welcome, {user && user.name}!</h2>
                <div className='d-flex flex-row justify-content-center mb-4'></div>
                <Button className='mb-4 w-100 gradient-custom-4' size='lg' variant='warning' type='button' onClick={handleLogout}>
                  Logout
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
      <HomeComp showForm = {true} /> 
    </div>
  );
};

export default RegisterPage;
