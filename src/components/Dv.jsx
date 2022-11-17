import React from 'react'
import os from '../img/shipping.png'
import { Link } from 'react-router-dom'

const Dv = () => {
  return (
    <div className='bgt flex'>
<span> <img className='ship' src={os} alt="" /> <span>GIGL China is LIVE!! Shop, Ship & Make ALL Payments in Naira
</span> </span> <span>    <Link  to = {"/"}>    <button class="btn2 btn-secondary bb" type="submit"> Learn more </button></Link></span>
    </div>
  )
}

export default Dv