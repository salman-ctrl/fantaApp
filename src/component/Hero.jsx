import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import aleJeruk from '../assets/aleJeruk.png'
import aleAnggur from '../assets/aleAnggur.png'
import aleStroberi from '../assets/aleStroberi.png'
import AOS from "aos"
import "aos/dist/aos.css";
import { AnimatePresence, delay, easeInOut, motion } from "framer-motion"




const SlideRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                duration: 0.5,
                ease: easeInOut,
            },
        }
    };
}

const HeroData = [
    {
        id: 1,
        title: "Ale Stroberi",
        image: aleStroberi,
        description: "Ale Mangga adalah minuman beralkohol yang terbuat dari buah Stroberi",
        price: "Rp. 50.000",
        bgColor: "#D72638",
        diskon: "70.000"

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
        <motion.div animate={{ backgroundColor: activeData.bgColor }} transition={{ duration: 0.7 }} className=' h-[100vh] relative'>
            <Navbar />
            <div className='grid grid-cols-2  h-full px-20'>
                <div className='mt-30 '>
                    <div  >
                        <AnimatePresence mode='wait'>
                            <motion.h1
                                key={activeData.id}
                                variants={SlideRight(0.5)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className='text-5xl text-white font-merienda font-bold'>{activeData.title}</motion.h1>
                        </AnimatePresence>

                        <AnimatePresence mode='wait' >
                            <motion.h1
                                key={activeData.id}
                                variants={SlideRight(0.4)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className='pt-7 text-2xl font-merienda text-white'>
                                Minuman favorit yang siap nemenin harimu! Pilih rasa favoritmu dan rasakan keseruannya</motion.h1>
                        </AnimatePresence>

                    </div>
                    <AnimatePresence mode='wait'>
                        <motion.button
                            key={activeData.id}
                            variants={SlideRight(0.2)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className='cursor-pointer shadow-2xl hover:scale-105 transition-transform duration-500 px-5 py-3 bg-green-600 rounded-md text-white mt-10'>
                            Cobain Sekarang
                        </motion.button>
                    </AnimatePresence>

                    <div className='flex items-center justify-center mt-2'>
                        <div className='h-0.5 bg-white w-30'></div>
                        <h2 className='px-5 text-xl font-merienda text-white'>Rekomendasi Rasa Terbaik</h2>
                        <div className='h-0.5 bg-white w-30'></div>
                    </div>
                    <div className='mt-10 flex'>

                        {HeroData.map((item) => (

                            <div key={item.id} onClick={() => handleActiveData(item)} className='text-center'>
                                <div data-aos='fade-right' data-aos-delay='1000' >
                                    <img src={item.image} alt="" className={`hover:rotate-[5deg] w-70 h-45 fotoku hover:scale-105 transition-transform duration-1000 will-change-transform ${activeData.image === item.image ? "opacity-100 scale-110" : "opacity-50"}`} />
                                </div>

                                <h2 className='text-gray-200 text-xs line-through font-merienda'>Rp.{item.diskon}</h2>
                                <h2 className='text-white font-merienda'>{item.price}</h2>
                            </div>

                        ))}

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