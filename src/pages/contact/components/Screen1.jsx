import React from 'react'

function Screen1() {
  return (
    <div className=''>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="199.999" viewBox="0 0 1990.969 199.999">
                <path id="Path_1429" data-name="Path 1429" d="M1989,503.945s151.723-79.6,430.56-42.07,319.071,68.38,441.574,50.49,227.324-66.923,459.138-50.49,297.743,116.093,454.295,82.055,205.4-101.5,205.4-101.5V350.966H1989Z" transform="translate(-1989 -350.966)" fill="#d5dbdf" opacity="0.5" />
            </svg>
        <div className="flex justify-center items-start gap-10 pb-10">
                <img src="/image/contact/img1.png" className='w-[580px] h-[400px] object-cover rounded-2xl' alt="" />
                <div className="space-y-3">
                    <h3 className='text-2xl font-bold'>Get In Touch</h3>
                    <p className='max-w-[650px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos </p>
                    <div className="flex flex-wrap w-[650px] gap-y-3 gap-x-3">
                        <input type="text" className='w-[300px] h-10 border rounded-md' />
                        <input type="text" className='w-[300px] h-10 border rounded-md' />
                        <input type="text" className='w-[300px] h-10 border rounded-md' />
                        <input type="text" className='w-[300px] h-10 border rounded-md' />
                        <input type="text" className='w-[300px] h-10 border rounded-md' />
                        <input type="text" className='w-[300px] h-10 border rounded-md' />
                        <input type="text" className='w-[300px] h-10 border rounded-md' />
                        <button className='bg-[#E63946] w-[125px] h-10 rounded-xl text-white'>Submit</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Screen1