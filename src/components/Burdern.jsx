import React from "react";
import latest from "../img/latest.PNG";
import gua from "../img/gua.PNG";
import social from "../img/social.PNG";
const Burdern = () => {
  return (
    <section className="burden">
      <div className="container">
        <div className="mt">
          <h2> We take the </h2>
          <h2 className="mn"> burden of logistics off </h2>
          <h2 className="mn"> you.</h2>
        </div>

        <div className="mn2">
          <div className="row st">
            <div className="col-md-4">
              <img src={latest} className="imgf" alt="" />
              <div className="mtc">
                <h5 className="mtcc">Latest Technology</h5>
                <p className="mtfh">
                  Technology and its application are fundamental at GIGL. We
                  understand the role of technology in providing an exceptional
                  customer experience. For this reason, our processes, products
                  and services are built around modern technology to help us
                  deliver your shipments cheaper, safely and at the speed of
                  light.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={social} className="imgf" alt="" />
              <h5 className="mtcc">Latest Technology</h5>
              <p className="mtfh">
                  Technology and its application are fundamental at GIGL. We
                  understand the role of technology in providing an exceptional
                  customer experience. For this reason, our processes, products
                  and services are built around modern technology to help us
                  deliver your shipments cheaper, safely and at the speed of
                  light.
                </p>
            </div>
            <div className="col-md-4">
              <img src={gua} className="imgf" alt="" />
              <h5 className="mtcc">Latest Technology</h5>
              <p className="mtfh">
                  Technology and its application are fundamental at GIGL. We
                  understand the role of technology in providing an exceptional
                  customer experience. For this reason, our processes, products
                  and services are built around modern technology to help us
                  deliver your shipments cheaper, safely and at the speed of
                  light.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Burdern;
