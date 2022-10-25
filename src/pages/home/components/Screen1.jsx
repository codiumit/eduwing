import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import React from 'react'
import 'pure-react-carousel/dist/react-carousel.es.css';
function Screen1() {
    return (
        <CarouselProvider
            className='w-full h-screen relative'
            totalSlides={3}
        >
            <Slider>
                <Slide index={0}><img src="/image/home/carousel-1.jpg" className='w-full' alt="" /></Slide>
                <Slide index={1}><img src="/image/home/carousel-2.jpg" className='w-full' alt="" /></Slide>
                <Slide index={2}><img src="/image/home/carousel-1.jpg" className='w-full' alt="" /></Slide>
            </Slider>
            <ButtonBack className='inset-y-0 my-0 absolute'>Back</ButtonBack>
            <ButtonNext className='inset-y-0 my-0 absolute right-0'>Next</ButtonNext>
        </CarouselProvider>
    )
}

export default Screen1