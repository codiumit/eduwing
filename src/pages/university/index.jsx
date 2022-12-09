import React from "react";
import { Link } from "react-router-dom";
import university from "../../custom/university";
import Banner from "../common/Banner";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Whatsapp from "../common/Whatsapp";

function University() {
  return (
    <div>
      <Navbar />
      <Whatsapp />
      <Banner
        banner={"/image/careers/banner.png"}
        heading="Academic Partners"
        para={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"}
      />

      <div className="px-[10%] py-[5%]">
        <h1 className="text-2xl font-bold">Our Universities</h1>
        <div className="flex flex-wrap gap-5 justify-center mt-10">
          {university.map((e) => (
            <Uni name={e.name} logo={e.logo} id={e.id} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default University;

const Uni = ({ name, logo, id }) => (
  <div className="w-[400px] h-[288px] border border-[#EAEDEF] bg-[#EAEDEF] rounded-3xl overflow-hidden">
    <Link to={`${id}`}>
      <div className="w-full h-[calc(100%-45px)] flex flex-col justify-center items-center">
        <img src={`/image/university/logo/${logo}`} alt="" />
        <h2>{name}</h2>
      </div>
    </Link>
    <div className="w-full h-[45px] bg-white flex divide-x p-1 text-xs">
      <button className="h-full w-1/3">Application Form</button>
      <button className="h-full w-1/3">Visit University Website</button>
      <button className="h-full w-1/3">More information</button>
    </div>
  </div>
);
