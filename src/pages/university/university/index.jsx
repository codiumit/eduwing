import React from 'react'
import { Link, useParams } from 'react-router-dom'
import university from '../../../custom/university'
import Footer from '../../common/Footer'
import Navbar from '../../common/Navbar'
import Whatsapp from '../../common/Whatsapp'

function Uni() {
    const {id} = useParams()
        const uni = university.find(e=>e.id === Number(id))

  return (
    <div >
        <Navbar/>
        <div className="w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1990.969 199.999">
                <path id="Path_1429" data-name="Path 1429" d="M1989,503.945s151.723-79.6,430.56-42.07,319.071,68.38,441.574,50.49,227.324-66.923,459.138-50.49,297.743,116.093,454.295,82.055,205.4-101.5,205.4-101.5V350.966H1989Z" transform="translate(-1989 -350.966)" fill="#d5dbdf" opacity="0.5"/>
            </svg>
        </div>
        <div className="px-[10%] py-[5%] space-y-5">
            <img src={`/image/university/logo/${uni.logo}`}  alt="logo" width={150} height={150} title='logo' />
            <h1 className='text-2xl font-bold'>{uni.name}</h1>
            <p className='xl:w-1/2'>{uni.dec}</p>
            <div className="flex gap-5">
                <button className='w-[193px] h-[44px] rounded-xl bg-[#E63946] text-white'>Application Form</button>
                <button>
                   <a href={uni.website}> Visit University Website</a>
                </button>
            </div>
            <div className="flex flex-wrap gap-5 justify-center items-center">
                {uni.course.map(e=><Link to={`${e.cid}`}>
                    <div className="w-[327px] h-[327px] border rounded-3xl overflow-hidden">
                    <img src={`/image/university/course/${e.image}`} alt={e.title} className='w-full h-[264px]' />
                    <div className="w-full h-[63px] flex justify-center items-center">
                        <h2 className='text-center font-medium text-base'>{e.title}</h2>
                    </div>
                </div>
                </Link>)}
            </div>
        </div>
        <Whatsapp />
        <Footer />
    </div>
  )
}

export default Uni