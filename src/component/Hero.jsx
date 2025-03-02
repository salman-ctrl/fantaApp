import React from 'react'
import Navbar from './Navbar';
import aleMangga from '../assets/aleMangga.png'
import aleJeruk from '../assets/aleJeruk.png'
import aleAnggur from '../assets/aleAnggur.png'
import AOS from "aos"
import "aos/dist/aos.css";
AOS.init();
const Hero = () => {
    return (
        <div className='bg-primary h-[85vh] relative'>
            <Navbar />
            <div className='grid grid-cols-2  h-full px-20'>
                <div className='mt-30 '>
                    <h1 data-aos='fade-right' data-aos-delay='1000' className='text-5xl text-white font-merienda font-bold'>Nikmati Kesegaran Ale-Ale!</h1>
                    <p data-aos='fade-right' data-aos-delay='1100' className='pt-7 text-2xl font-merienda text-white'>
                        Minuman favorit yang siap nemenin harimu! Pilih rasa favoritmu dan rasakan keseruannya</p>
                    <button data-aos='fade-down' data-aos-delay='1300' className='cursor-pointer shadow-2xl hover:scale-105 transition-transform duration-500 px-5 py-3 bg-green-600 rounded-md text-white mt-10'>
                        Cobain Sekarang
                    </button>
                    <div className='mt-10 flex'>
                        <div data-aos='fade-right' data-aos-delay='1000'>
                            <img src={aleMangga} alt="aleMangga" className='hover:rotate-[5deg] w-40 h-50 fotoku hover:scale-105 transition-transform duration-1000 will-change-transform' />
                        </div>
                        <div data-aos='fade-up' data-aos-delay='1000' className='ml-5'>
                            <img src={aleJeruk} alt="" className='w-60  hover:rotate-4 h-50 fotoku  hover:scale-105 transition-transform duration-500' />
                        </div>
                        <div data-aos='fade-left' data-aos-delay='1000'>
                            <img src={aleAnggur} alt="" className='w-60 h-50 fotoku hover:rotate-5 hover:scale-105 transition-transform duration-500' />

                        </div>
                    </div>
                </div>

                <div data-aos="fade-left"
                    data-aos-delay="500" className='absolute bottom-0 right-10 grid-1/2'>
                    <img
                        src={aleJeruk}
                        alt=""

                        className="w-140 h-120 fotoku hover:scale-105 hover:rotate-5 motion-safe:animate-bounce hover:[animation-play-state:paused] transition-transform duration-700 ease-in-out"
                    />
                </div>
            </div>


        </div>

    )
}

export default Hero;