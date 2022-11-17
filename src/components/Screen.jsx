import React from "react";
import app from "../img/appscreen.png";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Screen = () => {
  return (
    <section className="ng">
      <div className="screen">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="gg">
                {" "}
                GIGGo, the app for local and international shipping
              </h2>
              <span>
                {" "}
                <button class="btnp btn-secondary " type="submit">
                  {" "}
                  <FaApple className="icond" />{" "}
                  <span className="sp1"> Download on the</span>
                  <br /> <span className="sp2"> App Store</span>{" "}
                </button>
              </span>
              <span className="h">
                {" "}
                <button class="btnp2 btn-secondary " type="submit">
                  {" "}
                  <FaGooglePlay className="icond" />{" "}
                  <span className="sp1"> Get it on</span>
                  <br /> <span className="sp2"> Google Play</span>{" "}
                </button>
              </span>
            </div>

            <div className="col-md-5 df">
              <img src={app} className="imga" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screen;
