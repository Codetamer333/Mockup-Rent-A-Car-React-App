import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import NavbarComp from './NavbarComp';

export default class HomeComp extends Component {
  render() {
    const { showForm } = this.props;
    return (
    <> 
     { !showForm && <NavbarComp showSignInLink={true} showSignUpLink={true} />} 
      <div className='container pt-4 pb-5'>
        <div className='row'>
          <div className='col-5 ps-4 pt-5'>
            <h1>
                Fast And Easy Way <br/>To  Rent A Car
            </h1>
      
              <Form className='left_side text-center mt-4'> 

              <Form.Label className='pick_up'>Select Your Car Type</Form.Label>
              <Form.Control className='rounded-pill text-center' type='car' placeholder='Limousine'/>

              <Form.Label className='pick_up mt-3'>Date of Pick Up/Time</Form.Label>
              <Form.Control className='rounded-pill text-center'  placeholder='21/12/2023 11:00 AM'/>

              <Button className='search-button rounded-pill mt-4' variant='warning' type='search' href='/page4'>Search</Button>

            </Form>
            <Form className='right_side text-center mt-4'>

            <Form.Label className='pick_up'>Where to Pick-Up</Form.Label>
            <Form.Control className='rounded-pill text-center' type='location' placeholder='Bucuresti'/>

            <Form.Label className='pick_up mt-3'>Date of Drop Off/Time</Form.Label>
            <Form.Control className='rounded-pill text-center'  placeholder='01/01/2024 10:00 AM'/>

          </Form>
    
          </div>

          <div className='col-5'>
            <div className='home__right mt-5 pt-5 m-5'>
              <img src="/images/tlogo.png" width={700} alt='tesla'/>
            </div>
          </div>                   
        </div>
      </div>
      </>
    )
  }
}
