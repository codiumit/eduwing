import React from 'react'

function Banner() {
    return (
        <div className="h-[335px]">
            <img src="/image/contact/banner.png" alt="banner" className='h-full w-full brightness-[.3]' />
            <div className="relative bottom-32 left-32 text-white space-y-3">
                <h1 className='text-2xl font-medium'>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </p>
            </div>
        </div>
    )
}

export default Banner