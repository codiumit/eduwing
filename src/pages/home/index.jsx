import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Whatsapp from '../common/Whatsapp'
import ApplyToday from './components/ApplyToday'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import Screen4 from './components/Screen4'
import Screen5 from './components/Screen5'
import Screen6 from './components/Screen6'
import Screen7 from './components/Screen7'
import Screen8 from './components/Screen8'

function Home() {
    return (
        <div>
            <Navbar />
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Screen4 />
            <Screen5 />
            <Screen6/>
            <Screen7 />
            <Screen8 />

            <ApplyToday/>
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default Home