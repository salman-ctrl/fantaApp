import React from 'react'
import Navbar from './Navbar';
import aleMangga from '../assets/aleMangga.png'
import aleJeruk from '../assets/aleJeruk.png'


const Hero = () => {
    return (
        <div className='bg-primary h-[85vh] relative'>
            <Navbar />
            <div>
                <h1>Ale-Ale</h1>
                <p>
                    tersedia berbagai varian rasa
                </p>
                <button>
                    detail
                </button>
            </div>
            <div className='absolute bottom-0 right-40'>
                <img
                    src={aleMangga}
                    alt=""
                    className="w-90 h-120 hover:scale-105 motion-safe:animate-bounce hover:[animation-play-state:paused] transition-transform duration-700 ease-in-out"
                />
                <img
                    src={aleJeruk}
                    alt=""
                    className="w-90 h-120 hover:scale-105 motion-safe:animate-bounce hover:[animation-play-state:paused] transition-transform duration-700 ease-in-out"
                />
            </div>
        </div>

    )
}

export default Hero;