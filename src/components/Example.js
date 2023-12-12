import React, { Component } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap'
import Popup from './Popup';
import { useState } from 'react';
import NavbarComp from './NavbarComp'


function Example() {
  
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
      <div className='container'>
        <NavbarComp showSignInLink={false} showSignUpLink={false} />
        <div className='row'>
            <div className='pb-5'>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-center mb-5">Your Personal<br/> Information</h2>
          <MDBInput wrapperClass='mb-4' label='Full Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='E-mail' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Mobile Number' size='lg' id='form3' type='phone'/>
          {/* <MDBInput wrapperClass='mb-4' label='' size='lg' id='form4' type='phone'/> */}
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='By providing my phone number, I consent to receive automated calls and texts regarding important information about my transactions.' />
          </div>
          <Button className='mb-4 w-100 gradient-custom-4' size='lg' variant='warning' type='submit' onClick={() => setButtonPopup(true)}>Submit</Button>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className='text-center'>
            <h5>Thank you for choosing DriveVista for your car rental needs!</h5><br/> We are thrilled to be a part of your upcoming journey and appreciate the trust you've placed in us.
            We will contact you soon!
          </div>
        </Popup>
            </div>
        </div>
        
      </div>
      );
    }
  
  export default Example;



