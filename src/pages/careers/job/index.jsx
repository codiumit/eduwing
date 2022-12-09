import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jobs from "../../../custom/job";
import Banner from "../../common/Banner";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import Whatsapp from "../../common/Whatsapp";

function Job() {
  const { id } = useParams();
  const job = jobs.find((e) => e.id === Number(id));

  return (
    <div>
      <Navbar />
      <Banner
        banner={"/image/careers/banner.png"}
        heading="Careers"
        para={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed "}
      />

      <div className="px-[10%] pb-[5%] space-y-5">
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <div className="flex gap-5">
          <div className="space-y-5">
            <Screen1 job={job} />
            <Screen2 job={job} />
          </div>

          <SideBar />
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </div>
  );
}

export default Job;

function Screen1({ job }) {
  return (
    <div className="flex gap-10">
      <div className="flex">
        <div className="w-1/2 gap-5 space-y-8">
          <div className="flex gap-10">
            <h2>{job.location}</h2>
            <h2>{job.exp}</h2>
            <h2>{job.deadline}</h2>
          </div>
          <p>{job.desc}</p>
          <button className="w-[148px] h-[44px] rounded-xl bg-[#E63946] text-white">
            Apply Now
          </button>
        </div>
        <div className="w-1/2 gap-5 relative rounded-3xl overflow-hidden">
            <img src="/image/careers/img.png" className="w-full h-auto object-cover" alt="" />
            <div className="h-16 w-full absolute bottom-0 bg-[#E63946] flex divide-x p-2 text-white">
                
                <div className="w-1/4 h-full flex flex-col justify-center items-center">
                    <h2>Post</h2>
                    <h2>{job.post}</h2>
                </div>
                
                <div className="w-1/4 h-full flex flex-col justify-center items-center">
                    <h2>Type</h2>
                    <h2>{job.type}</h2>
                </div>
                
                <div className="w-1/4 h-full flex flex-col justify-center items-center">
                    <h2>Salary</h2>
                    <h2>{job.salary}</h2>
                </div>
                
                <div className="w-1/4 h-full flex flex-col justify-center items-center">
                    <h2>No .Of Vacancy</h2>
                    <h2>{job.vacancy}</h2>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}

const SideBar = () => (
  <div className="w-96 space-y-5">
    <div className="w-full py-[40px] bg-[#EAEDEF] rounded-3xl p-[20px] space-y-5">
      <h2 className="text-2xl text-red-500 text-center">Quick Links</h2>
      <ul className="space-y-3">
        <li> {">>"} About US</li>
        <li> {">>"} Why Eduwing</li>
        <li> {">>"} Our Team</li>
        <li> {">>"} Contact Us</li>
      </ul>
    </div>

    <div className="w-full py-[40px] bg-[#EAEDEF] rounded-3xl p-[20px] space-y-5">
      <h2 className="text-2xl text-red-500 text-center">Quick Links</h2>
      <ul className="space-y-3">
        <li> {">>"} About US</li>
        <li> {">>"} Why Eduwing</li>
        <li> {">>"} Our Team</li>
        <li> {">>"} Contact Us</li>
      </ul>
    </div>
  </div>
);

const Screen2 = ({ job }) => {
  const [select, setSelect] = useState(1);
  return (
    <div className="w-full h-full">
      <div className="w-full h-[45px] flex items-center">
        <h2
          onClick={() => {
            setSelect(1);
          }}
          className={`${
            select === 1 && "bg-[#EAEDEF] text-red-500"
          } cursor-pointer w-[200px] h-full flex justify-center items-center rounded-t-3xl`}
        >
          Job Description
        </h2>
        <h2
          onClick={() => {
            setSelect(2);
          }}
          className={`${
            select === 2 && "bg-[#EAEDEF] text-red-500"
          } cursor-pointer w-[200px] h-full flex justify-center items-center rounded-t-3xl`}
        >
          Experience & Overview
        </h2>
        <h2
          onClick={() => {
            setSelect(3);
          }}
          className={`${
            select === 3 && "bg-[#EAEDEF] text-red-500"
          } cursor-pointer w-[200px] h-full flex justify-center items-center rounded-t-3xl`}
        >
          Requirement
        </h2>
      </div>
      <div
        className={`${
          select !== 1 && "rounded-3xl"
        } w-full h-[255px] bg-[#EAEDEF] rounded-b-3xl rounded-r-3xl p-[5%]`}
      >
        <ul className="list-disc space-y-3">
          {/* {select === 1 &&
            job.map((e) => (
              <li>
                <h2 className="text-lg font-medium">{e.title}</h2>
                <h2>
                  {e.university} {e.year}
                </h2>
              </li>
            ))}
          {select === 2 &&
            job.map((e) => (
              <li>
                <h2 className="text-lg font-medium">{e.company}</h2>
                <h2>
                  {e.position} {e.duration}
                </h2>
              </li>
            ))} */}
        </ul>
      </div>
    </div>
  );
};