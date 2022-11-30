import React from 'react'
import Banner from '../common/Banner'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import faculty from '../../custom/faculty'

function About() {
  return (
    <div className='w-full overflow-hidden'>
        <Navbar />
        <Banner banner='/image/about/banner.png' heading={'About'} para='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed '/>
        
          <div className="px-[10%] flex flex-col  xl:flex-row justify-between items-center gap-10">
            <div className="space-y-5">
              <h2 className='text-2xl font-bold'>Why Eduwing</h2>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, fugiat. Quisquam laboriosam, expedita quibusdam laudantium sit aliquam excepturi fugit placeat magni quas libero atque et iste quasi harum corporis natus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis excepturi odit quibusdam, maxime aut, et corporis, a dolor provident pariatur iure reiciendis laudantium totam officia omnis adipisci eveniet consequatur.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero facilis placeat voluptas ipsa a maiores, distinctio excepturi corrupti laborum accusantium ratione. Sunt est tempora quidem omnis at maiores vitae molestiae!
              </p>
            </div>
            <img src="/image/about/img.png" className='max-w-[600px] max-h-[400px]' alt="" />
          </div>

          <div className="px-[10%] flex justify-evenly text-red-600">

            <div className="flex flex-col items-center gap-1">
              <span className='text-2xl font-bold'>2000+</span>
              <p>Convocated</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className='text-2xl font-bold'>2000+</span>
              <p>Convocated</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className='text-2xl font-bold'>2000+</span>
              <p>Convocated</p>
            </div>

          </div>



          <div className="px-[10px] flex justify-center py-[5%]">
            <img src="/image/about/certificate.png" width={1000} alt="" />
          </div>

          <div className="flex justify-evenly px-[10%] py-[5%]">
              <button className='px-[100px] py-3 rounded-xl bg-[#E63946] text-white font-semibold'>US License</button>
              <button className='px-[100px] py-3 rounded-xl bg-[#E63946] text-white font-semibold'>Business License</button>
              <button className='px-[100px] py-3 rounded-xl bg-[#E63946] text-white font-semibold'>Professional License</button>
          </div>

          <div className="px-[10%] py-[3%] space-y-5 text-center">
            <h2 className='text-xl font-medium'>Our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui maxime reiciendis, autem, delectus minima ullam ab natus quam amet ducimus rem debitis esse. Id deleniti labore sit ex, quisquam eveniet.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque natus earum mollitia, doloremque rerum quam repellat deserunt ipsa, voluptatem molestias aperiam tenetur velit quidem dolor. Facere quo temporibus veritatis!
            </p>
          </div>

          <div className="flex justify-center items-center px-[10%] py-[5%]">
            <div className="w-[1194px] h-[560px] rounded-[30px] shadow-md flex gap-8 px-2 py-4">
              <img src="/image/faculty/profile/f3.png" className='h-full'  alt="" />
              <div className="space-y-10">
                <h2 className='text-2xl font-bold'>Robert Downy</h2>
                <p className='text-justify'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis error libero aut quae, provident esse! Officiis ipsa similique a, sunt amet vel voluptas inventore atque asperiores optio aperiam voluptates quos!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis similique ullam at laborum fuga aliquid ipsam porro quisquam ducimus suscipit rerum sit labore ratione exercitationem iure, rem incidunt laboriosam. Id.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime tempora temporibus suscipit porro tempore qui, nobis modi id aut iste aliquam delectus distinctio similique maiores fuga adipisci dolorum a.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo expedita iure ratione aliquam fugiat veritatis repudiandae earum minus, ex reiciendis quos vero blanditiis magnam veniam praesentium eaque? Consequatur, distinctio!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi temporibus eligendi laboriosam sed eos, illum, non alias quisquam id, nemo rem a iure earum repellendus exercitationem ullam tempore inventore molestiae.
                </p>
              </div>
            </div>
          </div>

          <div className="px-[1%] py-[5%] flex flex-wrap gap-5 justify-center items-center">
            {
              faculty.map(e=><div className="w-[430px] h-[517px] rounded-3xl border flex-shrink-0">
                <img src={e.image} className='h-3/4 w-full object-cover' alt="" />
                <div className="h-1/4 flex flex-col justify-center items-center gap-3">
                  <h2 className='text-2xl font-bold'>{e.name}</h2>
                  <span>{e.label}</span>
                </div>
              </div>)
            }
          </div>

        <Footer/>
    </div>
  )
}

export default About