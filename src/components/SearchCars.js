import React, { Component } from 'react'
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TbManualGearbox } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import NavbarComp from './NavbarComp';



export default class SearchCars extends Component {
  render() {
    return (
        <>
        <NavbarComp showSignUpLink={true} showSignInLink={true} />
      <div className=' text-center pt-5 mb-3'>
            <h1>Top Rated <br/>Rented Cars </h1>
            {/* <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit magna hendrerit.<br/> eget vehicula magna hendrerit quis. Suspendisse potenti. </span> */}
        </div>
        <div className='container'>
          
        <div className='row d-flex justify-content-around text-center p-5'>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/cls.png" />
            <Card.Body>
                <Card.Title>Mercedes-Benz CLS-Class</Card.Title>
                <Card.Text className='car-text'>
                  The CLS remains a fine choice among coupe-style luxury sedans.
                </Card.Text>
                <Card.Text>
                  <FaCar /> 2017
                  <span className='ms-5'>
                  <TbManualGearbox />
                  Automatic</span>
                </Card.Text>
                <span className='fs-5 pb-3'>$180.00 / Day</span><br/>
                <Button variant="warning" href='/rent'>Rent</Button>
            </Card.Body>
                </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="images/porsche.png" />
          <Card.Body>
            <Card.Title>Porsche 911 GT2</Card.Title>
            <Card.Text className='car-text'>
              The Porsche 911 GT2 is a high-performance sports car.
            </Card.Text>

            <Card.Text>
            <FaCar /> 2020 
            <span className='ms-5'>
            <TbManualGearbox />
            Automatic</span>
            </Card.Text>
            <span className='fs-5 pb-3'>$315.00 / Day</span><br/>
            <Button variant="warning" href='/rent'>Rent</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="images/bmw.png"/>
          <Card.Body>
            <Card.Title>Bmw 6 Series</Card.Title>
            <Card.Text className='car-text'>
              The 6 Series is one of the most luxurious cars the company makes.
            </Card.Text>
            <Card.Text>
            <FaCar /> 2016 
            <span className='ms-5'>
            <TbManualGearbox />
            Automatic</span>
            </Card.Text>
            <span className='fs-5 pb-3'>$120.00 / Day</span><br/>

            <Button variant="warning" href='/rent'>Rent</Button>
          </Card.Body>
        </Card>

        </div>

        </div>
        </>
    )
  }
}
