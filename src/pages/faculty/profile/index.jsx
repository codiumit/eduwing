import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../common/Banner'
import Footer from '../../common/Footer'
import Navbar from '../../common/Navbar'
import faculty from '../../../custom/faculty'

function Profile() {
    const { id } = useParams()
    const profile = faculty.find(e => e.id === Number(id))

    return (
        
        <div className='w-full overflow-hidden'>
            <Navbar/>
            <Banner banner={'/image/faculty/banner.png'} heading='Faculty' para={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed '} />

            <div className="px-[10%] py-[5%]">
                <div className="flex gap-10">
                    <img src={profile.image} className='w-[250px] h-[300px] object-cover' alt="" />
                    <div className="h-full w-full flex flex-col gap-3">
                        <h2 className='text-2xl font-bold'>{profile.name}</h2>
                        <h2>{profile.label}</h2>
                        <p className='text-justify'>{profile.desc}</p>
                    </div>
                </div>
                <Detail profile={profile}/>
            </div>
            <Footer />
        </div>
    )
}

export default Profile

function Detail({profile}) {
    const [select, setSelect] = useState(1)
    return(
        <div className="flex gap-10 h-[300px]">
                    <div className="w-[1228px] h-full">
                        <div className="w-full h-[45px] flex items-center">
                            <h2 onClick={()=>{setSelect(1)}} className={`${select === 1 && 'bg-[#EAEDEF] text-red-500'} cursor-pointer w-[150px] h-full flex justify-center items-center rounded-t-3xl`}>Qualifications</h2>
                            <h2 onClick={()=>{setSelect(2)}} className={`${select === 2 && 'bg-[#EAEDEF] text-red-500'} cursor-pointer w-[150px] h-full flex justify-center items-center rounded-t-3xl`}>Experience</h2>
                            <h2 onClick={()=>{setSelect(3)}} className={`${select === 3 && 'bg-[#EAEDEF] text-red-500'} cursor-pointer w-[150px] h-full flex justify-center items-center rounded-t-3xl`}>Achivements</h2>
                        </div>
                        <div className={`${select !== 1 && 'rounded-3xl'} w-full h-[255px] bg-[#EAEDEF] rounded-b-3xl rounded-r-3xl p-[5%]`}>
                            <ul className='list-disc space-y-3'>
                                {
                                    select===1 && profile.qualification.map(e=><li>
                                        <h2 className='text-lg font-medium'>{e.title}</h2>
                                        <h2>{e.university} {e.year}</h2>
                                    </li>)
                                }
                                {
                                    select === 2 && profile.exp.map(e=><li>
                                        <h2 className='text-lg font-medium'>{e.company}</h2>
                                        <h2>{e.position} {e.duration}</h2>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="w-[288px] h-full bg-[#EAEDEF] rounded-3xl p-[20px] space-y-5">
                        <h2 className='text-2xl text-red-500 text-center'>Quick Links</h2>
                        <ul className='space-y-3'>
                            <li> {'>>'} About US</li>
                            <li> {'>>'} Why Eduwing</li>
                            <li> {'>>'} Our Team</li>
                            <li> {'>>'} Contact Us</li>
                        </ul>
                    </div>
                </div>
    )
}