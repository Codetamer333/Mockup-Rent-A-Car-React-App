import React, { Component } from 'react'
import { BiSupport } from "react-icons/bi"
import './Footer.css';
import Card from 'react-bootstrap/Card';
import {TbCurrentLocation} from "react-icons/tb"
import {MdOutlineCancel} from "react-icons/md"
import NavbarComp from './NavbarComp';

export default class WhyChooseUs extends Component {
  render() {
    return (
        <>
         <NavbarComp showSignInLink={true} showSignUpLink={true} />
        <div className='title-page3 text-center pt-3 mb-3'>
            <h1>Best Services and <br/>Luxuries Cars </h1>
            <span>We promise to put you first, with exceptional customer service and vehicles that are maintained and cleaned to our high-quality standards.<br/>Everything we do, we do with our Standard of Care.
</span>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='left_side_car pt-5 mt-5'>
                    <img src="/images/mercedes-logo.png" width={700} alt='mercedes'/>
                    </div>
                </div>
                <div className='col-6 mt-4'>
                  <div className='row mt-5'>

                      <div className='col-12'>
                      <BiSupport size={80} alt='first-logo' className=' ms-5'/>
                    <span className='ps-5 fw-bold fs-3'>Customer Support</span>
                      </div>

                      <div className='col-12 mt-5'>
                      <TbCurrentLocation size={80} alt='first-logo' className='ms-5'/>
                    <span className='ps-5 fw-bold fs-3'>Many Locations</span>
                      </div>

                      <div className='col-12 mt-5'>
                      <MdOutlineCancel size={80} alt='first-logo' className='ms-5'/>
                    <span className='x-x ps-5 fw-bold fs-3'>Free Cancelation</span>
                      </div>

                  </div>
                </div>
            </div>
        </div>
        <div className='title-page3 text-center pt-5'>
            <h1>What People Say  <br/>About Us?</h1>
        </div>
        <div className='container'>
            <div className='d-flex justify-content-around pt-5 pb-5'>

            
        <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>Richie Andreas<img src="/images/stars.png" width={100} alt='rating'/></Card.Header>
        <Card.Body>
          <Card.Text>
          This was the first time I have used this car rental but will definitely be using again in the future. They were helpful, knowledgeable and professional.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header>Precious Hamiltion <img src="/images/stars.png" width={100} alt='rating'/></Card.Header>
        <Card.Body>
          <Card.Text>
          It was an excellent experience. Even though none of us spoke the other's language, we worked through it using a translation tool, an experience we thoroughly enjoyed.          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header>Harold R. Morris <img src="/images/stars.png" width={100} alt='rating'/></Card.Header>
        <Card.Body>
          <Card.Text>
          Second time I've used them now, because the first experience was so good. And this time from Carcassonne was also great service. They are also cheaper than most others and have very reasonable additional insurance cover.          </Card.Text>
        </Card.Body>
      </Card>
        </div>
        </div>
        </>
    )
  }
}

