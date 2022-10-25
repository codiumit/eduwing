import React, { useState } from 'react'

function Footer() {
    return (
        <div className='bg-[#f5f5f5]'>
            <div className="w-full h-[518px] flex justify-center items-center gap-3">
                <div className="w-[440px] h-[354px] border"></div>
                <Branches />
                <Form />
            </div>
            <hr />
            <div className="w-full h-16 flex justify-center items-center">
                <p className='text-base font-semibold'>© All rights reserved 2022-23</p>
            </div>
        </div>
    )
}

export default Footer


const Form = () => <div className="w-[440px] min-h-[354px] space-y-4">
    <span className='text-xl'>Quick Enquiry</span>
    <input className='w-full h-8 outline-none rounded-md pl-3' placeholder='Name' type="text" />
    <input className='w-full h-8 outline-none rounded-md pl-3' placeholder='Email' type="text" />
    <input className='w-full h-8 outline-none rounded-md pl-3' placeholder='Contact' type="text" />
    <textarea className='w-full h-28 outline-none rounded-md pl-3' placeholder='Message' type="text" />
    <input className='w-full h-10 outline-none rounded-md border-2   border-[#fa183e] text-[#fa183e] text-sm font-semibold hover:bg-[#fa183e] hover:text-white duration-200' type="button" value="SEND" />
</div>


const Branches = () => {
    const [country, setCountry] = useState('UAE')
    return (
        <div className="w-[440px] h-[354px] space-y-3">
            <div className="buttons flex gap-2">
                <button className={`w-16 h-10 rounded-2xl hover:text-red-400 hover:underline ${country === 'UAE' ? 'bg-black text-white' : ''}`} onClick={() => { setCountry('UAE') }}>UAE</button>
                <button className={`w-16 h-10 rounded-2xl hover:text-red-400 hover:underline ${country === 'USA' ? 'bg-black text-white' : ''}`} onClick={() => { setCountry('USA') }}>USA</button>
                <button className={`w-16 h-10 rounded-2xl hover:text-red-400 hover:underline ${country === 'INDIA' ? 'bg-black text-white' : ''}`} onClick={() => { setCountry('INDIA') }}>INDIA</button>
                <button className={`w-16 h-10 rounded-2xl hover:text-red-400 hover:underline ${country === 'QATAR' ? 'bg-black text-white' : ''}`} onClick={() => { setCountry('QATAR') }}>QATAR</button>
            </div>
            {
                country === 'UAE' && <div className="space-y-3">
                    <div className="address flex gap-5"><span>Address:</span><p>Eduwing Education suite #2148, 21-floor, damas building near general post office al zahra st – sharjah</p></div>
                    <div className="Phone flex gap-5"><span>Phone:</span><p>+971 52 52 52 704</p></div>
                    <div className="mail flex gap-5"><span>Mail:</span><p>info@eduwing.ae</p></div>
                </div>
            }
            {
                country === 'USA' && <div className="space-y-3">
                    <div className="address flex gap-5"><span>Address:</span><p>EDUWING SERVICES.LLC, 30 N Gould Street,Sheridan WY 82801, United States</p></div>
                    <div className="Phone flex gap-5"><span>Phone:</span><p>+1 (332) 242-4565</p></div>
                    <div className="mail flex gap-5"><span>Mail:</span><p>info@eduwing.ae</p></div>
                </div>
            }
            {
                country === 'INDIA' && <div className="space-y-3">
                    <div className="address flex gap-5"><span>Address:</span><p>SONZ & MARZ Tower2nd & 3rd Floor, Cusat, Junction, NH544, South Kalamassery, Kochi, Kerala 682033</p></div>
                    <div className="Phone flex gap-5"><span>Phone:</span><p>+91 6000 9000 28</p></div>
                    <div className="mail flex gap-5"><span>Mail:</span><p>info@eduwing.in</p></div>
                </div>
            }
            {
                country === 'QATAR' && <div className="space-y-3">
                    <div className="address flex gap-5"><span>Address:</span><p>Eduzone services Office No: 316, Regus Blue Tower, Banks Street, Doha, Qatar</p></div>
                    <div className="Phone flex gap-5"><span>Phone:</span><p>+97165212566</p></div>
                    <div className="mail flex gap-5"><span>Mail:</span><p>info@eduzoneqatar.com</p></div>
                </div>
            }
        </div>
    )
}