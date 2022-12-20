import React from "react";
import { useState } from "react";
import gallery from "../../custom/gallery";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Whatsapp from "../common/Whatsapp";

function Gallery() {
    const [selection, setSelection] = useState(2)
  return (
    <div>
      <Navbar />
      <div className="w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1990.969 199.999"
        >
          <path
            id="Path_1429"
            data-name="Path 1429"
            d="M1989,503.945s151.723-79.6,430.56-42.07,319.071,68.38,441.574,50.49,227.324-66.923,459.138-50.49,297.743,116.093,454.295,82.055,205.4-101.5,205.4-101.5V350.966H1989Z"
            transform="translate(-1989 -350.966)"
            fill="#d5dbdf"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="px-[10%] py-[5%]">
        <h1 className="text-2xl font-bold">Gallery</h1>

        <div className="flex justify-center gap-3 flex-wrap mt-10">
            <button onClick={()=>setSelection(1)} className={`${selection === 1? 'bg-[#e63946] text-white' : null} rounded-xl px-[27px] py-[20px]`}>Featured</button>
            <button onClick={()=>setSelection(2)} className={`${selection === 2? 'bg-[#e63946] text-white' : null} rounded-xl px-[27px] py-[20px]`}>All</button>
            <button onClick={()=>setSelection(3)} className={`${selection === 3? 'bg-[#e63946] text-white' : null} rounded-xl px-[27px] py-[20px]`}>Videos</button>
            <button onClick={()=>setSelection(4)} className={`${selection === 4? 'bg-[#e63946] text-white' : null} rounded-xl px-[27px] py-[20px]`}>2022</button>
            <button onClick={()=>setSelection(5)} className={`${selection === 5? 'bg-[#e63946] text-white' : null} rounded-xl px-[27px] py-[20px]`}>2021</button>
            <button onClick={()=>setSelection(6)} className={`${selection === 6? 'bg-[#e63946] text-white' : null} rounded-xl px-[27px] py-[20px]`}>2020</button>
        </div>

        <div className="flex flex-wrap gap-3 mt-10 justify-center xl:justify-start">
        {
            selection === 1 && gallery.map(e=>e.featured === true && <img className="rounded-xl w-full md:w-auto object-cover h-auto md:h-[215px]" src={`/image/gallery/${e.file}`} alt='' />)
        }
        {
            selection === 2 && gallery.map(e=> <img className="rounded-xl w-full md:w-auto object-cover h-auto md:h-[215px]" src={`/image/gallery/${e.file}`} alt='' />)
        }
        {
            selection === 3 && gallery.map(e=>e.file === 'video' && <img className="rounded-xl w-full md:w-auto object-cover h-auto md:h-[215px]" src={`/image/gallery/${e.file}`} alt='' />)
        }
        {
            selection === 4 && gallery.map(e=>e.year === 2022 && <img className="rounded-xl w-full md:w-auto object-cover h-auto md:h-[215px]" src={`/image/gallery/${e.file}`} alt='' />)
        }
        {
            selection === 5 && gallery.map(e=>e.year === 2021 && <img className="rounded-xl w-full md:w-auto object-cover h-auto md:h-[215px]" src={`/image/gallery/${e.file}`} alt='' />)
        }
        {
            selection === 6 && gallery.map(e=>e.year === 2020 && <img className="rounded-xl w-full md:w-auto object-cover h-auto md:h-[215px]" src={`/image/gallery/${e.file}`} alt='' />)
        }
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default Gallery;
