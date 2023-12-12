import React, { Component } from 'react'
import "./Footer.css"
import { BsFillGeoAltFill, BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { SiBmw, SiMercedes, SiAudi, SiTesla, SiPorsche } from "react-icons/si"


export default class FooterComp extends Component {
  render() {
    return (
      <div className='main-footer mt-5'>
        <div className='cars-logo'>
          <div className='d-flex justify-content-evenly'>
          <SiBmw size={50}/>
          <SiMercedes size={50}/>
          <SiAudi size={50}/>
          <SiTesla size={50}/>
          <SiPorsche size={50}/>

          </div>
        </div>
        
        <div className='container'>
          <div className='row p-5'>

            <div className='col'>
              <img src="/images/wlogo.png" alt='logo' width={200} />
            </div>

            <div className='col'>
            <div className='text-center p'>
              <h4 className='pb-2'>Contact Info</h4>
              <BsFillGeoAltFill/>
              <ul className='list-unstyled'>
                <li className='pb-2'>897 Yorkshire Circle Rocky Mount, Norh Carolina 27801</li>
                <BsFillTelephoneFill/>
                <li>+81-02446-3369</li>
                <li>+51-03506-3366</li>
                <BsFillEnvelopeFill/>
                <li>rentacar@gmail.com</li>
              </ul>
              </div>
            </div>

            <div className='col'>
            <div className='text-center'>
              <h4 className='pb-2'>Information Links</h4>
              <ul className='list-unstyled'>
                <li>Terms & Conditions</li>
                <li>Cancelation</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            </div>

            <div className='col'>
            <div className='text-center'>
              <h4>Newsletter</h4>
              <ul className='list-unstyled'>
                <li>subscribe to our newsletter</li>
              </ul>
              <div>
            <input
              type="text"
              placeholder="Your email"
            />
            <button>
              Submit
            </button>
          </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
