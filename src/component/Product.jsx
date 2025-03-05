import React from 'react'
import aleJeruk from '../assets/aleJeruk.png'
import aleAnggur from '../assets/aleAnggur.png'
import aleStroberi from '../assets/aleStroberi.png'
import aleJambu from '../assets/aleJambu.png'
import aleMarkisa from '../assets/aleMarkisa.png'
import aleSirsak from '../assets/aleSirsak.png'
import { div, h1, image, img } from 'framer-motion/client'




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
        id: 3,
        product: "Ale-Ale Jambu",
        deskripsi: "rasa Jambu yang segar",
        img: aleJambu,
    },
    {
        id: 3,
        product: "Ale-Ale Markisa",
        deskripsi: "rasa Markisa yang segar",
        img: aleMarkisa,
    },
    {
        id: 3,
        product: "Ale-Ale Sirsak",
        deskripsi: "rasa Sirsak yang segar",
        img: aleSirsak,
    },
]

const Product = () => {
    return (
        <div className='h-auto w-screen overflow-hidden '>
            <h2 className='text-4xl font-merienda text-center pt-30'>Produk Kami</h2>
            <div className='place-items-center mt-12 grid grid-cols-3'>
                {dataProduct.map((item) => (
                    <div className='bg-white shadow-lg pb-7 mt-10 text-center rounded-xl w-72 '>
                        <img src={item.img} alt="" className=' pt-7 hover:scale-110 transition-all duration-500 hover:rotate-5 mx-auto' />
                        <h1 className='text-xl font-merienda'>{item.product}</h1>
                        <p className='text-sm text-gray-600  pt-3'>{item.deskripsi}</p>
                        <button className='border-amber-500 border-2  text-amber-500  px-12 py-2 mt-5 rounded-sm transition-all duration-400 cursor-pointer hover:scale-110 hover:text-white hover:bg-amber-500 '></button>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Product
