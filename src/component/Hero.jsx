import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import aleJeruk from '../assets/aleJeruk.png'
import aleAnggur from '../assets/aleAnggur.png'
import aleStroberi from '../assets/aleStroberi.png'
import AOS from "aos"
import "aos/dist/aos.css";
import { motion } from "framer-motion"

const HeroData = [
    {
        id: 1,
        title: "Ale Stroberi",
        image: aleStroberi,
        description: "Ale Mangga adalah minuman beralkohol yang terbuat dari buah Stroberi",
        price: "Rp. 50.000",
        bgColor: "#D72638",
        diskon: "   70.000"

    },
    {
        id: 2,
        title: "Ale Jeruk",
        image: aleJeruk,
        description: "Ale Jeruk adalah minuman beralkohol yang terbuat dari buah Jeruk",
        price: "Rp. 20.000",
        bgColor: "#FF8C00",
        diskon: "40.000"


    },
    {
        id: 3,
        title: "Ale Anggur",
        image: aleAnggur,
        description: "Ale Anggur adalah minuman beralkohol yang terbuat dari buah anggur",
        price: "Rp. 30.000",
        bgColor: "#800080",
        diskon: "50.000"
    }
]


const Hero = () => {

    const [activeData, setActiveData] = useState(HeroData[2])

    const handleActiveData = (data) => {
        console.log('data di klik', data)
        setActiveData(data);
    }

    useEffect(() => {
        AOS.init();
        AOS.refreshHard();
    }, [activeData])

    return (
        <motion.div animate={{ backgroundColor: activeData.bgColor }} transition={{ duration: 0.7 }} className=' h-[90vh] relative'>
            <Navbar />
            <div className='grid grid-cols-2  h-full px-20'>
                <div className='mt-30 '>
                    <div key={`desc-${activeData.id}`} data-aos='fade-right' data-aos-delay='800' >
                        <h1 className='text-5xl text-white font-merienda font-bold'>{activeData.title}</h1>
                        <h1 className='pt-7 text-2xl font-merienda text-white'>
                            Minuman favorit yang siap nemenin harimu! Pilih rasa favoritmu dan rasakan keseruannya</h1>
                    </div>

                    <button data-aos='fade-down' data-aos-delay='1300' className='cursor-pointer shadow-2xl hover:scale-105 transition-transform duration-500 px-5 py-3 bg-green-600 rounded-md text-white mt-10'>
                        Cobain Sekarang
                    </button>
                    <div className='flex items-center justify-center mt-2'>
                        <div className='h-0.5 bg-white w-30'></div>
                        <h2 className='px-5 text-xl font-merienda text-white'>Rekomendasi Rasa Terbaik</h2>
                        <div className='h-0.5 bg-white w-30'></div>
                    </div>
                    <div className='mt-10 flex'>

                        {HeroData.map((item) => (

                            <div key={item.id} onClick={() => handleActiveData(item)} className='text-center'>
                                <img src={item.image} data-aos='fade-right' data-aos-delay='1000' alt="" className='hover:rotate-[5deg] w-70 h-45 fotoku hover:scale-105 transition-transform duration-1000 will-change-transform' />
                                <h2 className='text-gray-200 text-xs line-through font-merienda'>Rp.{item.diskon}</h2>
                                <h2 className='text-white font-merienda'>{item.price}</h2>

                            </div>

                        ))}
                        {/* <div data-aos='fade-right' data-aos-delay='1000'>
                                <img src={aleMangga} alt="aleMangga" className='hover:rotate-[5deg] w-40 h-50 fotoku hover:scale-105 transition-transform duration-1000 will-change-transform' />
                            </div>
                            <div data-aos='fade-up' data-aos-delay='1000' className='ml-5'>
                                <img src={aleJeruk} alt="" className='w-60  hover:rotate-4 h-50 fotoku  hover:scale-105 transition-transform duration-500' />
                            </div>
                            <div data-aos='fade-left' data-aos-delay='1000'>
                                <img src={aleAnggur} alt="" className='w-60 h-50 fotoku hover:rotate-5 hover:scale-105 transition-transform duration-500' />
                            </div> */}
                    </div>
                </div>

                <div key={`image-${activeData.id}`} data-aos="fade-left"
                    data-aos-delay="500" className='absolute bottom-0 right-10 grid-1/2'>
                    <img
                        src={activeData.image}
                        alt=""

                        className="w-140 h-120 fotoku hover:scale-105 hover:rotate-5 motion-safe:animate-bounce hover:[animation-play-state:paused] transition-transform duration-700 ease-in-out"
                    />
                </div>
            </div>


        </motion.div>

    )
}

export default Hero;