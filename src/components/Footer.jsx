import React from 'react'
import '../App.css';
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' text-white bgj '>
<div className='container'>
  <div className='row'>
    <div className='col-md-3  mt-5'>
<h4 className='font-bold'> © 2022 GIG Logistics</h4>
    </div>
    <div className='col-md-3  mt-5'>
<ul className='lk'>
<li className=''>Company</li>
<li> Service Portfolio</li>
<li> About Us</li>
<li> Blog</li>
<li> Terms and Condition</li>

</ul>
    </div>
    <div className='col-md-3  mt-5'>
    <ul className='lk'>
<li className=''>Other Service</li>
<li> Get a Quote </li>
<li> Schedule a Pickup</li>
<li> GIG Alpha </li>
<li> Overseas Shipping</li>
<li> Report Issues</li>

</ul>
    </div>
    <div className='col-md-3  mt-5'>
    <ul className='lk'>
<li className=''>Connect with us</li>
<li>  <span> <FaFacebook /></span>
 <span> <FaInstagram /></span>
 <span> <FaTwitter /> </span> 
 <span> <FaLinkedin /></span></li> 


</ul>
    </div>

  </div>

</div>
    </footer>
  )
}

export default Footer