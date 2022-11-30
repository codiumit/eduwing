import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../common/Banner'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Whatsapp from '../common/Whatsapp'
import faculty from './../../custom/faculty'

function Faculty() {
  return (
    <div className='faculty'>
      <Navbar />
      <Banner banner={'/image/faculty/banner.png'} heading='Faculty' para={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed '} />
      <div className="screen1 w-full overflow-hidden">
        <div className="px-[10%] py-[5%]">
          <h1 className='text-2xl font-bold'>Our Educators</h1>
          <div className="mt-5 flex flex-wrap gap-7 justify-center">
            
            {
              faculty.map(e=><Profile key={e.id} id={e.id} name={e.name} label={e.label} image={e.image}/>)
            }
            
          </div>
        </div>
      </div>
      <Footer />
      
      <Whatsapp />
    </div>
  )
}

export default Faculty


function Profile({ image, name,label,id }) {
  return (
    <div className="w-48 h-96">
      <div className="w-full h-60 rounded-3xl">
      <Link to={`${id}`} >
          <img src={image} className='h-full w-full' alt="" />
        </Link>
      </div>
      <div className="text-center flex flex-col justify-evenly h-36 w-full">
        <h2 className='text-2xl font-bold'>{name}</h2>
        <h2>{label}</h2>
        <div className="w-full flex justify-around">
            <img className='w-5 h-5' src="/image/faculty/icon/facebook.svg" alt="" />
            <img className='w-5 h-5' src="/image/faculty/icon/whatsapp.svg" alt="" />
            <img className='w-5 h-5' src="/image/faculty/icon/twitter.svg" alt="" />
        </div>
      </div>
    </div>
  )
}