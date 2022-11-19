import React from 'react'
import logo from '../img/logo.png'
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light nnn">
    <div class="container-fluid nn3">
      <a class="navbar-brand" href="#"><img className='img' src={logo} alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ul1">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Link  to = {"/"}> Service Provider</Link> 
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"> <Link  to = {"/domestic_logistics"}> Domestic Logistic</Link> </a></li>
              <li><a class="dropdown-item" href="#"> <Link  to = {"/service"}> Coperate Logistics</Link></a></li>
        
              <li><a class="dropdown-item" href="#"> <Link  to = {"/oversees"}> Overseas Shipping</Link> </a></li>
              <li><a class="dropdown-item" href="#"> <Link  to = {"/ecommerce"}> E-Commerce Logistics</Link> </a></li>
              <li><a class="dropdown-item" href="#"> <Link  to = {"/walled"}> Wallet and Added Services</Link> </a></li>
            </ul>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <Link  to = {"/"}>   Our Service</Link> 
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">  <Link  to = {"/"}>  Nigeria</Link> </a></li>
              <li><a class="dropdown-item" href="#">   <Link  to = {"/"}>   Ghana</Link> </a></li>
        
              <li><a class="dropdown-item" href="#">   <Link  to = {"/"}>   United State</Link>  </a></li>
        
              <li><a class="dropdown-item" href="#">   <Link  to = {"/"}>    United Kingdom</Link> </a></li>
        
              <li><a class="dropdown-item" href="#">   <Link  to = {"/"}>  China</Link> </a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">   <Link  to = {"/"}>   Blog</Link> </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">   <Link  to = {"/"}>    FAQ</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">   <Link  to = {"/"}>   Contact Us</Link> </a>
          </li>
        
        </ul>
        <form class="d-flex" role="search">
        
        <Link  to = {"/"}>    <button class="btn btn-secondary bb" type="submit">     Sign in/Sign Up </button></Link>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
