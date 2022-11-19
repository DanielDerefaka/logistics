import React from "react";
import ecom from "../img/ecom.jpg";
import e1 from "../img/e1.PNG";
import e2 from "../img/e2.PNG";
import e3 from "../img/e3.PNG";
import e4 from "../img/e4.PNG";
import e5 from "../img/e5.PNG";
import e6 from "../img/e6.PNG";
import e7 from "../img/e7.PNG";
import e8 from "../img/e8.PNG";
import e9 from "../img/e9.PNG";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Ecommerce = () => {
  return (
    <div className="ser_g">
      Hello
      <h1> Hello</h1>
      <div className="containr">
        <div className="cop">
          <h3> E-COMMERCE LOGISTICS </h3>
          <p className="abd">  <Link className="lk"  to = {"/"}> < FaArrowAltCircleLeft /> Back</Link>   </p> 
          <p>Empowering small businesses with innovative logistics support</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={ecom} className="cp" alt="" />
          </div>
          <div className="col-md-6 pc">
            <p>
              {" "}
              A successful E-commerce business needs effective and reliable
              logistics to support its daily delivery needs. As a leading
              logistics service company powered by technology, we fully grasp
              the essence of E-commerce. We are at the forefront of creating
              innovative solutions that empower E-commerce businesses.
            </p>
            <p>
              If you're an online business, Business to Business (B2B), Business
              to Customer (B2C), Customer to Customer (C2C) or multichannel
              retailer, let us work in partnership with you to create the right
              delivery solutions that help you achieve your goals.
            </p>

            <button class="btn2 btn-secondary bb" type="submit">
              {" "}
              Sign up as a Merchant
            </button>
            <p className="mg2">
              {" "}
              Already have an account?{" "}
              <span className="dpv"> Login to your merchant account</span>
            </p>
          </div>
        </div>

        <div className="">
          <div className="cop">
            <h3> Our dedicated offerings to you</h3>
          </div>
          <div className="row ror2">
            <div className="col-md-3 cnd">
              <img src={e1} alt="" />
              <h5 className="mg">Prepaid GIGGo Wallet</h5>
              <p>
                {" "}
                Pay for transactions ahead of time and easily too in a few clicks. With a fully-funded wallet on your GIGGo App, you can pay for all your transactions with GIG Logistics. Save yourself the stress of commuting to our walk-in centres or dealing with the limitations that come with other forms of payments.
              </p>
            </div>
            <div className="col-md-3 cnd">
              <img src={e2} alt="" />
              <h5 className="mg">The GIGL Class Plan</h5>
              <p>
                {" "}
                The GIGL Class plan provides your business with vital support to enable you to offer premium service to your customers, as well as trigger rapid growth. You get up to 25% discount on local shipping fees and 10% on international shipping fees, free insurance cover and more.
              </p>
            </div>
            <div className="col-md-3 cnd">
              <img src={e3} alt="" />
              <h5 className="mg">Cash on Delivery Services</h5>
              <p>
                {" "}
                Customer satisfaction is key. Our Cash on Delivery service offers your customer a convenient means to pay, especially where they insist on physical inspection of the product before accepting delivery. Full payment is collected from the customer on your behalf, either at his doorstep or our experience centres and remitted directly to your bank account.
              </p>
            </div>
          </div>
          <div>
          <div className="cop">
            <h3> How we work</h3>
          </div>
          <div className="row ror2">
        
          <div className="col-md-3 cnd">
              <img src={e4} alt="" />
              <h5 className="mg">Same Day Delivery</h5>
              <p>
                {" "}
                GIG Logistics Same Day Delivery Services is the perfect choice for time-bound shipments intended for either pick-up or delivery. As the standard for logistics in Nigeria, our same day courier service is fast, reliable and easy to use.
              </p>
            </div>
            <div className="col-md-3 cnd">
              <img src={e5} alt="" />
              <h5 className="mg">Next Day Delivery</h5>
              <p>
                {" "}
                Our Next Day Delivery service isn't just swift but also affordable. Efficient express delivery will gain more customer trust for your business and improve your brand appeal. This service is perfect for SMEs looking to satisfy their customers and gain a competitive edge.
              </p>
            </div>
             <div className="col-md-3 cnd">
              <img src={e6} alt="" />
              <h5 className="mg">Cash On Delivery</h5>
              <p>
                {" "}
                The Cash on Delivery Service guarantees secure payment for your goods from customers who prefer physical inspection of items upon delivery before payment. Increase patronage for your brand with this service, latching on the absolute convenience it offers your customer. Simply indicate an option for electronic payment as well Cash on Delivery on your online store.
              </p>
            </div>
             <div className="col-md-3 cnd">
              <img src={e7} alt="" />
              <h5 className="mg">Reverse Logistics Service</h5>
              <p>
                {" "}
                Reverse Logistics manages items that are returned to or within Lagos; either as rejected or not picked up by your customer/other Third Party. We offer three (3) free delivery attempts, after which charges will be made on subsequent attempts, based on the delivery zone.
              </p>
            </div>
             <div className="col-md-3 cnd">
              <img src={e8} alt="" />
              <h5 className="mg">Last-Mile Delivery</h5>
              <p>
                {" "}
                When it comes to going the literal last mile to deliver that package, our Last Mile delivery solution has got you covered. Thanks to our extensive network, we can help you reach customers and suppliers in the most rural and difficult to access locations where most delivery companies in Nigeria refuse to go.
              </p>
            </div>
             <div className="col-md-3 cnd">
              <img src={e9} alt="" />
              <h5 className="mg">Hold For Collection Service</h5>
              <p>
                {" "}
                SOur Hold for Collection Service means that your customers don't have to wait at home to receive their parcels nor will they ever miss any delivery. This on-demand service means we can deliver your parcel for pick up at a GIG Logistics experience centre in your selected destination and notify you immediately of its arrival.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
