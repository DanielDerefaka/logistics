import React from "react";
import svg from "../img/wallet.svg";
import w1 from "../img/w1.PNG";
import w2 from "../img/w2.PNG";
import bnb from "../img/bnb.PNG";
import w3 from "../img/w3.PNG";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Walled = () => {
  return (
    <div className="ser_g">
      Hello
      <h1> Hello</h1>
      <div className="containr">
        <div className="cop">
          <p className="abd">
            {" "}
            <Link className="lk" to={"/"}>
              {" "}
              <FaArrowAltCircleLeft /> Back
            </Link>{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={svg} className="cp" alt="" />
          </div>
          <div className="col-md-6 pc">
            <h1>Wallet and added services</h1>
            <p>
              {" "}
              E-commerce should be more than transporting shipments… Now you
              have access to so much more including CRYPTO BANKING. As your
              global logistics partner, we are advocates for economic freedom
              and borderless transactions; hence, our commitment to delivering
              both physical and digital goods for you.
            </p>
            <p>
              {" "}
              Believe it when we say we care about your personal and business
              growth and the ability to do things quickly and without
              limitations. It is the reason we facilitate commerce by moving
              your shipments across the world, the reason we predict your needs
              and deliver before you ask; it is the same reason we expand our
              service portfolio to meet your dynamic needs.
            </p>
            <p>
              {" "}
              We will continue to build features and products that ease daily
              transactions and accelerate growth for you because we are your
              partner in progress!
            </p>
          </div>
        </div>
        <div>
          <div className="codp">
            <h3> Added Services</h3>
          </div>

          <div className="fns">
            <div className="dxx2b">
              <h5 className=""> Bills Payment</h5>
            </div>
            <div className="dfl">
              <div>
                <img src={w1} className="fgf" alt="" />
              </div>

              <div className="dxx2">
                <p>
                  The bills pop in non-stop, and it can be tough toggling from
                  one app to the other. We know you have your GIGGo app on the
                  move and thought it great to make managing bills a lot easier
                  by infusing the ability to make payments for recurring bills
                  like communication, electricity, entertainment, and much one
                  all from on app”. Buy data, airtime, and pay for utility bills
                  on the move.
                </p>
              </div>
            </div>
            <div className="fns">
              <div className="dxx2b">
                <h5 className=""> Crypto Wallet</h5>
              </div>
              <div className="dfl">
                <div>
                  <img src={w2} className="fgf" alt="" />
                </div>

                <div className="dxx2">
                  <p>
                    E-commerce should be more than transporting goods. Now you
                    have access to a crypto wallet, to help you buy, send, store
                    and withdraw digital assets . Pay for transactions across
                    the globe without restrictions and also change your
                    cryptocurrency to Naira anytime you need to.
                  </p>
                </div>
              </div>
            </div>
            <div className="fns">
              <div className="dxx2b">
                <h5 className="">E-Wallet</h5>
              </div>
              <div className="dfl">
                <div>
                  <img src={w3} className="fgf" alt="" />
                </div>

                <div className="dxx2">
                  <p>
                    Most people want convenience and like paying for
                    transactions without cash or card. We get it! That is why we
                    provided the E-wallet feature, a flexible and convenient
                    payment option for online and offline transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bnnd">
        <img src={bnb} className="dcv" alt="" />
      </div>
    </div>
  );
};

export default Walled;
