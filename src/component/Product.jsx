import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aleJeruk from '../assets/aleJeruk.png'
import aleAnggur from '../assets/aleAnggur.png'
import aleStroberi from '../assets/aleStroberi.png'
import aleJambu from '../assets/aleJambu.png'
import aleMarkisa from '../assets/aleMarkisa.png'
import aleSirsak from '../assets/aleSirsak.png'
import { motion, easeInOut } from "framer-motion";




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

const dataProduct = [
    {
        id: 1,
        product: "Ale-Ale Jeruk",
        deskripsi: "rasa jeruk yang segar",
        img: aleJeruk,
    },
    {
        id: 2,
        product: "Ale-Ale Anggur",
        deskripsi: "rasa Anggur yang segar",
        img: aleAnggur,
    },
    {
        id: 3,
        product: "Ale-Ale Stroberi",
        deskripsi: "rasa Stroberi yang segar",
        img: aleStroberi,
    },
    {
        id: 4,
        product: "Ale-Ale Jambu",
        deskripsi: "rasa Jambu yang segar",
        img: aleJambu,
    },
    {
        id: 5,
        product: "Ale-Ale Markisa",
        deskripsi: "rasa Markisa yang segar",
        img: aleMarkisa,
    },
    {
        id: 6,
        product: "Ale-Ale Sirsak",
        deskripsi: "rasa Sirsak yang segar",
        img: aleSirsak,
    },
]

useEffect(() => {
    AOS.init({
        duration: 1000, // Durasi animasi (ms)
        once: false, // Animasi bisa terjadi berulang kali saat discroll
    });
}, []);

const Product = () => {
    return (
        <div className='h-auto w-screen overflow-hidden '>
            <h2 className='text-4xl font-merienda text-center pt-30'>Produk Kami</h2>
            <div className='place-items-center mt-12 grid grid-cols-3'>
                {dataProduct.map((item) => (
                  
                ))}
            </div>

        </div>
    )
}

export default Product
