import React, { Component } from 'react'
import NavbarComp from './NavbarComp'

export default class HowItWorkPage extends Component {
  render() {
    return (
      <div>
         <NavbarComp showSignInLink={true} showSignUpLink={true} />
        <div className='how-it-work-text text-center'>
        <div className='mb-5'>
          <h1>How It Work</h1>
          <span>With us, you can plan your trip with ease, arranging to pick up your hire car at one location and drop off at another.<br/> Choose from a roomy family car to fit everyone in or a sporty number to travel in style.</span>
        </div>
      </div>
      <div>
        <div className='container'>
          <div className='how-it-work'>
            <div className=' row d-flex justify-content-around text-center'>
              <div className='col-md-4 col-sm-6'>
                <img className='how-to mb-3' src="/images/location.png" width={80} alt='location'/>
                <h4>Choose Location</h4>
                {/* <span>Aliquam consectetur nisl at dui mattis consectetur.<br/> Nisl at dui mattis consectetur nisl at fend purus <br/> dui mattis sed eleifend.</span> */}
              </div>
              <div className='col-md-4 col-sm-6'>
                <img className='how-to mb-3' src="/images/calendarus.png" width={100} alt='calendar'/>
                <h4>Pick-Up Date</h4>
                {/* <span>Aliquam consectetur nisl at dui mattis consectetur.<br/> Nisl at dui mattis consectetur nisl at fend purus <br/> dui mattis sed eleifend.</span> */}
              </div>
              <div className='col-md-4 col-sm-6'>
                <img className='how-to mb-3' src="/images/car2.png" width={80} alt='car'/>
                <h4>Book Your Car</h4>
                {/* <span>Aliquam consectetur nisl at dui mattis consectetur.<br/> Nisl at dui mattis consectetur nisl at fend purus <br/> dui mattis sed eleifend.</span> */}
              </div>
            </div> 
          </div>
        </div>
      </div>
      </div>
    )
  }
}
