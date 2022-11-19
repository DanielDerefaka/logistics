

import Dv from "../components/Dv";
import Seemless from "../components/Seemless";
import Screen from "../components/Screen";
import Burdern from "../components/Burdern";



import React from 'react'

const Home = () => {
  return (
    <section>
        
  <Dv />
  <div className="en">
    <div className="inn">
      <input
        className="form2"
        type="text"
        name=""
        id=""
        placeholder="Input tracking ID / Alpha code"
      />
      <button class="btn3 btn-secondary bb" type="submit">
        {" "}
        Search
      </button>
    </div>
    <div className="ab">
      <p> Track shipment / Find and ship a product using Alphacode</p>
    </div>
  </div>
<Seemless />
<Screen />
<Burdern />

    </section>
  )
}

export default Home