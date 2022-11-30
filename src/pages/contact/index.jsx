import React from 'react'
import Banner from '../common/Banner'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'

function Contact() {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />

        <Banner banner={'/image/contact/banner.png'} heading='Contact Us' para={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed '} />
        <Screen1 />
        <Screen2 />
        <Footer />
    </div>
  )
}

export default Contact