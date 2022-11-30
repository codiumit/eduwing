import React from 'react'

function Screen1() {
  return (
    <div className=''>
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