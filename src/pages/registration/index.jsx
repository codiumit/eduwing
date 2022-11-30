import React from 'react'
import Banner from '../common/Banner'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Apply from './components/Apply'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'

function Registration() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <Banner banner={'/image/registration/banner.png'} heading='Registation' para={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed'} />
            <Screen1 />
            <Screen2 />
            <Apply />
            <Footer />
        </div>
    )
}

export default Registration