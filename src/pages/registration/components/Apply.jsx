import React from 'react'

function Apply() {
    return (
        <div className="flex flex-col justify-center items-center gap-3 py-10">
            <h3>Apply Online</h3>
            <div className="flex gap-3 mt-5">
                <input className='w-[440px] h-[66px] bg-[#D6DBDF]' type="text" placeholder='' />
                <input className='w-[440px] h-[66px] bg-[#D6DBDF]' type="text" placeholder='' />
                <input className='w-[440px] h-[66px] bg-[#D6DBDF]' type="text" placeholder='' />
            </div>
            <div className="flex gap-3">
                <input className='w-[440px] h-[66px] bg-[#D6DBDF]' type="text" placeholder='' />
                <input className='w-[440px] h-[66px] bg-[#D6DBDF]' type="text" placeholder='' />
                <input className='w-[440px] h-[66px] bg-[#D6DBDF]' type="text" placeholder='' />
            </div>
            <button className='w-[230px] h-[66px] bg-[#E63946] rounded-xl text-white'>Submit</button>
        </div>
    )
}

export default Apply