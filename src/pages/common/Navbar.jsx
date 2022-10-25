import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className="h-9 flex">
                <div className="h-full w-1/2 bg-[#dc3545] text-white flex items-center px-12 text-xs">
                    <span>Download Our App</span>
                </div>

                <ul className="h-full w-1/2 bg-[#212529] flex justify-center items-center gap-20 text-white  text-sm">
                    <li>Student Login</li>
                    <li>Pay Online</li>
                </ul>

            </div>
            <div className="w-full h-24 flex justify-between items-center">
                <header>
                    <img src="/image/common/logo.png" className='h-24' alt="Logo" />
                </header>
                <ul className='flex gap-10 font-bold group h-full items-center'>
                    <li className='hover:opacity-100 group-hover:opacity-50 h-full flex justify-center items-center'>ABOUT US</li>
                    <li className='hover:opacity-100 group-hover:opacity-50 h-full flex justify-center items-center'>DISTANCE EDUCATION</li>
                    <li className='hover:opacity-100 group-hover:opacity-50 h-full flex justify-center items-center'>STUDY ABROUD</li>
                    <li className='hover:opacity-100 group-hover:opacity-50 h-full flex justify-center items-center'>ATTESTATION</li>
                    <li className='hover:opacity-100 group-hover:opacity-50 h-full flex justify-center items-center'>GALLERY</li>
                    <li className='hover:opacity-100 group-hover:opacity-50 h-full flex justify-center items-center'>CAREER</li>
                    <li className='hover:opacity-100 group-hover:opacity-50 h-full flex justify-center items-center'>CONTACT US</li>
                </ul>
                <div className="w-72 h-full bg-[#fa183e] hover:bg-[#4e6471] duration-200 flex flex-col justify-center items-center gap-1 text-white">
                    <span className='font-bold'>REGISTER NOW</span>
                    <span className='text-xl'>+971 52 52 52 704</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar