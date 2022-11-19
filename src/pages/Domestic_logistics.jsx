import React from "react";
import dmain from "../img/dmain.jpg";
import d1 from "../img/d1.PNG";
import d2 from "../img/d2.PNG";
import d3 from "../img/d3.PNG";
import d4 from "../img/d4.PNG";
import d5 from "../img/d5.PNG";
import d6 from "../img/d6.PNG";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Domestic_logistics = () => {
  return (
    <div className="ser_g">
      Hello
      <h1> Hello</h1>
      <div className="containr">
        <div className="cop">
          <h3> DOMESTIC LOGISTICS</h3>
          <p className="abd">
            {" "}
            <Link className="lk" to={"/"}>
              {" "}
              <FaArrowAltCircleLeft /> Back
            </Link>{" "}
          </p>
          <p>
            Reliable, Affordable and Easily Accessible Logistics with Nationwide
            Coverage
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={dmain} className="cp" alt="" />
          </div>
          <div className="col-md-6 pc">
            <p>
              {" "}
              As a logistics company with longstanding operations, we focus on strategic points to fulfil your logistics needs. Our strong network of 122 experience centres spread across Nigeria provides maximum coverage, which makes for the fastest deliveries and easy access to services.
            </p>
            <p>
              {" "}
              We provide multiple options to deliver, at the best rates. Whether you are sending parcels within your city or to a different state, GIG Logistics offers the most affordable domestic courier service to virtually every location in Nigeria. Our Same Day Delivery service has the cheapest prices nationwide!
            </p>
            <p>
              {" "}
              With our domestic courier service, your experience is personalized. We pick up parcels and deliver them to your doorstep, at your convenience. You can request our services online via the website, through the GIGGo App or walk into any of our centres. Our trusted personnel are on standby to find the best solution that meets your needs.


            </p>
<div className="dfl">
<div>
<button class="btn2 btn-secondary bb" type="submit">
              {" "}
              Ship Now
            </button>
</div>
<div className="dxx">
<button class="btnpro btn-secondary " type="submit">
              {" "}
              Get Quote
            </button>
</div>
</div>
           
          </div>
        </div>

        <div className="">
          <div className="cop">
            <h3> Our dedicated offerings to you ?</h3>
          </div>
          <div className="row ror2">
            <div className="col-md-3 cnd">
              <img src={d1} alt="" />
              <h5 className="mg">Priority Shipping</h5>
              <p>
                {" "}
                We put you first! With our established reputation for speed and reliability, GIGL offers priority shipping service to meet your needs daily, every single hour. If getting that package to its destination means a lot to you, then it's important to us.
              </p>
            </div>
            <div className="col-md-3 cnd">
              <img src={d2} alt="" />
              <h5 className="mg">   Xpress Drop-Off</h5>
              <p>
                {" "}
             
Time is precious and we will help you save it. Skip the queues at our experience centres and cut the time it takes to process an item for shipping. Our Xpress Drop-Off service enables you to fast track shipment of your items using the GIGGo App.
              </p>
            </div>
            <div className="col-md-3 cnd">
              <img src={d3} alt="" />
              <h5 className="mg">GIGGo Partners</h5>
              <p>
                {" "}
                Creating opportunities for wealth distribution is an objective we take seriously. Through this service, you get to earn lucrative income on the side. Our most basic requirement from you is a functional vehicle, fit to description and a qualified rider. We bring business your way and split the profits.
              </p>
            </div>
            <div className="col-md-3 cnd">
              <img src={d4} alt="" />
              <h5 className="mg">GIGGo Last-Mile Delivery</h5>
              <p>
                {" "}
                Distance is no barrier. We will pick up items from your doorstep and make special arrangements to deliver exactly to the locations you request, no matter how far. Our experienced dispatch riders are also available for same-day deliveries.
              </p>
            </div>
            <div className="col-md-3 cnd">
              <img src={d5} alt="" />
              <h5 className="mg">Moving & Relocation Services</h5>
              <p>
                {" "}
                For larger companies that often require inter-office mail
                delivery, GIGL offers Mail Room services. Our couriers will pick
                up and disperse office mail on a daily or twice daily basis;
                following your explicit instructions.
              </p>
            </div>
            <div className="col-md-3 cnd">
              <img src={d6} alt="" />
              <h5 className="mg">Specialized Freight</h5>
              <p>
                {" "}
                You can confidently trust our operational capabilities. We are experts at moving high value and sensitive equipment used in diverse industries ranging from Medical to Laboratory, Communications & Broadcasting, Data- Processing sectors and Hi-tech Computers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domestic_logistics;
