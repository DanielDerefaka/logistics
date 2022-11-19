import React from 'react'
import corp from "../img/corp.jpg";
import s1 from "../img/s1.PNG";
import s2 from "../img/s2.PNG";
import s3 from "../img/s3.PNG";
import s4 from "../img/s4.PNG";
import s5 from "../img/s5.PNG";
import s6 from "../img/s6.PNG";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Service = () => {
  return (
    <div className='ser_g'>
      Hello
      <h1> Hello</h1>
   <div className='containr'>
    <div className='cop'>
    <h3> CORPORATE LOGISTICS </h3>
    <p className="abd">  <Link className="lk"  to = {"/"}> < FaArrowAltCircleLeft /> Back</Link>   </p> 
    <p>Corporate logistics solutions in sync with your business goals</p>
    </div>
  <div className="row">
    <div className="col-md-6">
<img src={corp} className="cp" alt="" />
    </div>
    <div className="col-md-6 pc">
<p> Backed by our strategic partnerships, international network, expansive reach, technological innovation and seamless customer experience, our corporate logistics service is a quality choice you can confidently trust. Leading organizations such as SWISS PHARMACEUTICALS, MINISO, BIERSDORF NIVEA, etc. have all established working partnerships with us guaranteed by our history of credibility.</p>
<p> We understand the importance of efficient logistics to your business. Hence, we create a balance that connects our services to your corporate objectives. You will receive an incredibly fair cost plan that matches your budget.</p>
<p> Our services assist businesses across multiple industries and may be booked on demand. A team of dedicated experts will facilitate your request in thorough detail with the highest level of precision.</p>

<button class="btn2 btn-secondary bb" type="submit">
        {" "}
     Sign up as a Coporate
      </button>
    </div>
  </div>

    <div className="">
      <div className="cop">
        <h3> Our dedicated offerings to you</h3>
      </div>
      <div className="row ror2" >
        <div className="col-md-3 cnd"> 
     <img src={s1} alt="" />
     <h5 className='mg'> Personalized Overseas Services</h5>
     <p> Ship items directly into and out of Nigeria hassle-free. You can easily arrange for inbound and outbound delivery through the customized services we provide. GIGL also provides special packaging services and transport solutions for companies within the technology sector.</p>
        </div>
        <div className="col-md-3 cnd">
        <img src={s2} alt="" />
        <h5 className='mg'>Haulage and Freight services</h5>
     <p> SOur extensive fleet of vehicles conveniently accommodates Full Truck Load (FTL) and Less than Truck Load (LTL). This equips us to provide a comprehensive range of services to various industries. To enhance value, we offer a pay as you use service with relative discounts. Our services cater to major sectors of the economy, including agricultural, manufacturing and industrial sectors; as well as speciality project work such as transporting pipes and crane work material.</p>
        </div>
        <div className="col-md-3 cnd">
        <img src={s3} alt="" />
        <h5 className='mg'>Pharma Logistics</h5>
     <p> We completely understand the extremely sensitive and time-critical nature of medical shipments. Our system of handling medical courier services is designed to enable us to offer personalized healthcare logistics solutions to hospitals, laboratories and pharmaceutical industries.</p>
        </div>
        <div className="col-md-3 cnd">
        <img src={s4} alt="" />
        <h5 className='mg'>Warehousing & Inventory Management</h5>
     <p> Here at GIG Logistics, we manage large distribution networks for our internal operations. This first-hand experience sharpens our detailed insight, to help us find the perfect solution for your business. We are experts in the movement of goods across suppliers, vendors, and customers. Tell us what you need.</p>  
        </div>
        <div className="col-md-3 cnd">
        <img src={s5} alt="" />
        <h5 className='mg'>Mail Room Services</h5>
     <p> For larger companies that often require inter-office mail delivery, GIGL offers Mail Room services. Our couriers will pick up and disperse office mail on a daily or twice daily basis; following your explicit instructions.</p>
        </div>
        <div className="col-md-3 cnd">
        <img src={s6} alt="" />
        <h5 className='mg'>Logistics Consultancy</h5>
     <p> Need advice on managing logistics for your business, call us! Let us guide you on how best to manage logistics for your business. We offer complete business solutions that are fast and easy, to drive results for your business. Our services support small, medium, large organizations.</p>  
        </div>
      </div>
     
    </div>
    </div>
   </div>
   

  )
  
}

export default Service
