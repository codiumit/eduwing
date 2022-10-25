import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Whatsapp from '../common/Whatsapp'
import Screen1 from './components/Screen1'

function Home() {
    return (
        <div>
            <Navbar />
            <Screen1 />
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default Home