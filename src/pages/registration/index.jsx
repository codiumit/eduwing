import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Apply from './components/Apply'
import Banner from './components/Banner'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'

function Registration() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <Banner />
            <Screen1 />
            <Screen2 />
            <Apply />
            <Footer />
        </div>
    )
}

export default Registration