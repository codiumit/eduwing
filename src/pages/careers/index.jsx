import React from "react";
import { Link } from "react-router-dom";
import Banner from "../common/Banner";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Whatsapp from "../common/Whatsapp";
import jobs from "../../custom/job";

function Careers() {
  return (
    <div>
      <Navbar />
      <Banner
        banner={"/image/careers/banner.png"}
        heading="Careers"
        para={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed "}
      />

      <div className="px-[10%] py-[5%]">
        <h2 className="text-2xl font-bold">Job Openings</h2>
        <p className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="px-[10%] py-[5%] flex gap-5">
        
        
        <div className="w-4/5 space-y-5">

            {
                jobs.map(e=><Job key={e.id} id={e.id} title={e.title} desc={e.desc} location={e.location} exp={e.exp} type={e.type} deadline={e.deadline}/>)
            }
        </div>


        <div className="w-1/5">

          <div className="w-full py-[40px] bg-[#EAEDEF] rounded-3xl p-[20px] space-y-5">
            <h2 className="text-2xl text-red-500 text-center">Quick Links</h2>
            <ul className="space-y-3">
              <li> {">>"} About US</li>
              <li> {">>"} Why Eduwing</li>
              <li> {">>"} Our Team</li>
              <li> {">>"} Contact Us</li>
            </ul>
          </div>

            <div className="Contact us">

            </div>

        </div>



      </div>

      <Whatsapp />
      <Footer />
    </div>
  );
}

export default Careers;



function Job({title,desc,location,exp,type,deadline,id}) {
    return(
        <div className="w-full h-[280px] bg-[#EAEDEF] flex divide-x divide-black p-7 rounded-2xl">
            <div className="h-full w-4/5 space-y-5 pr-5">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-justify">{desc}</p>
            </div>
            <div className="h-full w-1/5 flex flex-col justify-evenly pl-5">
                <span>{location}</span>
                <span>{exp}</span>
                <span>{type}</span>
                <span>{deadline}</span>
                <Link to={`${id}`}>
                    <button className="w-[148px] h-[44px] rounded-xl bg-[#E63946] text-white">Apply Now</button>
                </Link>
            </div>
        </div>
    )
}