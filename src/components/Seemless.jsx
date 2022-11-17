import React from 'react'
import bag from '../img/bag.PNG'
import alpha from '../img/alpha.PNG'
import over from '../img/over.PNG'
import quick from '../img/quick.PNG'


const Seemless = () => {
  return (
    <div className='sen'>
        <h3 className='seem'> Seamless delivery services</h3>
        <div className='container mx-auto'>
            <div className='row fl sen'>
                <div className='col-md-3 col2'>
                <img src={bag} className="imgd" alt="" />
                <h4 className='tct'> Ship Now</h4>
                <p className='fn'> Request Pick Up / Delivery and Xpress Drop-off</p>
                </div>
                <div className='col-md-3 col2'>
                <img src={over} className="imgd" alt="" />
                <h4 className='tct'> Overseas Shipping </h4>
                <p className='fn'> Ship from UK/USA to Nigeria & Export to 230  plus Location worldwide</p>
                </div> 
                <div className='col-md-3 col2'>
                <img src={quick} className="imgd" alt="" />
                <h4 className='tct'> Get a Quick Note</h4>
                <p className='fn'>Calculate cost estimate for local & international shipment</p>
                </div>
                <div className='col-md-3 col2'>
                <img src={alpha} className="imgd" alt="" />
                <h4 className='tct'> Alpha </h4>
                <p className='fn'> Just begin</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Seemless