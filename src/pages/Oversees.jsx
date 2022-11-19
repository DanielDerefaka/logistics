import React from "react";
import oversees from "../img/oversees.png";
import s1 from "../img/s1.PNG";
import s2 from "../img/s2.PNG";
import s3 from "../img/s3.PNG";
import s4 from "../img/s4.PNG";
import s5 from "../img/s5.PNG";
import s6 from "../img/s6.PNG";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Oversees = () => {
  return (
    <div className="ser_g">
      Hello
      <h1> Hello</h1>
      <div className="containr">
        <div className="cop">
          <h3>OVERSEAS SHIPPING </h3>
          <p className="abd">
            {" "}
            <Link className="lk" to={"/"}>
              {" "}
              <FaArrowAltCircleLeft /> Back
            </Link>{" "}
          </p>
          <p>
            Connect the world to your doorstep. Ship anything, anywhere, anytime
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={oversees} className="cp" alt="" />
          </div>
          <div className="col-md-6 pc">
            <h3>Ship anything, anywhere, anytime…</h3>
            <p>
              {" "}
              Shipping items across countries can be a challenge, especially
              with long delivery timelines and shipping restrictions. However,
              at GIG Logistics, we are bridging that gap by providing seamless,
              fast, and efficient overseas shipping service from Nigeria to the
              world and vice versa.
            </p>
            <p>
              {" "}
              By leveraging on our robust network, fast-growing global footprint
              and the innovative use of technology, we are making it incredibly
              easy to ship and receive items from any city in the world; whether
              Dubai, the UK, USA, Canada, Germany, Ghana and lots more.
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
        <div className="row ron">
          <div className="col-md-6">
            <p className="vb">
              {" "}
              Imports - Inbound Shipping (The United Kingdom)
            </p>
            <p>
              {" "}
              No more restricted shipping from stores in the UK to Nigeria. GIG
              Logistics will ship all your items into Nigeria, promptly and
              efficiently. <br />{" "}
            </p>
            <p>
              {" "}
              For more convenience, you can shop and ship directly from the UK
              using the Overseas Shipping feature on the GIGGo App. You will
              receive your order at your doorstep, anywhere in Nigeria (within
              3– 4 working days) with our competitive shipping rates at
              <b>£4.90/Kg*.</b>
            </p>
            <p>
              {" "}
              "Regardless of your item, its quantity or size, just add to cart,
              we will deliver."
            </p>
          </div>
          <div className="col-md-6">
            <p className="vb"> Import - Inbound Shipping (The USA)</p>
            <p>
              {" "}
              No more restricted shipping from stores in the USA to Nigeria. GIG
              Logistics will ship all your items into Nigeria, promptly and
              efficiently. <br />{" "}
            </p>
            <p>
              {" "}
              For more convenience, you can shop and ship directly from the USA
              using the Overseas Shipping feature on the GIGGo App. You will
              receive your order at your doorstep, anywhere in Nigeria (within
              7– 14 working days) with our competitive shipping rates at
              <b>$4.49/lbs.*</b>
            </p>
          </div>
        </div>
        <div className="row dnm">
          <div className="col-md-12">
            <p className="vb"> Export- Outbound Shipping</p>
            <p>
              {" "}
              Ship out of Nigeria to more than 230 countries worldwide,
              including the UK, Canada, USA, China and Germany.
            </p>
            <p>
              {" "}
              We recognize the pivotal role homegrown brands play in relation to
              commerce in Nigeria. Guided by this reason, our outbound shipping
              service is designed to boost the exports value chain by connecting
              small businesses with international markets.
            </p>
            <p>
              {" "}
              Our services are not marginalized we also cater to individual
              customers.
            </p>
            <p>
              {" "}
              At the cheapest rates and within the fastest delivery timelines,
              you can send items out of Nigeria directly, to more than 230
              countries worldwide from any of our centres across the country.
            </p>
            <p>
              {" "}
              The possibilities are endless with our expansive network of 122
              experience centres nationwide and strategic global partnerships.
              All you need to do is walk-in and Drop-Off, we will ship overseas!
            </p>
            <p> View the full list of countries here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oversees;
