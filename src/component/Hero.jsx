import React from 'react'
import Navbar from './Navbar';
import aleMangga from '../assets/aleMangga.png'

const Hero = () => {
    return (
        <div className='bg-primary h-[85vh] relative'>
            <Navbar />
            <div className='absolute bottom-0 right-40'>
                <img
                    src={aleMangga}
                    alt=""
                    className="w-90 h-120 hover:scale-105 motion-safe:animate-bounce hover:[animation-play-state:paused] transition-transform duration-700 ease-in-out"
                />
            </div>
        </div>

    )
}

export default Hero;