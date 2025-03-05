import React from 'react'
import aleJeruk from '../assets/aleJeruk.png'
import aleAnggur from '../assets/aleAnggur.png'
import aleStroberi from '../assets/aleStroberi.png'
import { div, h1, image, img } from 'framer-motion/client'




const dataProduct = [
    {
        id: 1,
        product: "Ale Ale Jeruk",
        deskripsi: "rasa jeruk yang segar",
        img: aleJeruk,
    },
    {
        id: 2,
        product: "Ale Ale Anggur",
        deskripsi: "rasa Anggur yang segar",
        img: aleAnggur,
    },
    {
        id: 3,
        product: "Ale Ale Stroberi",
        deskripsi: "rasa Stroberi yang segar",
        img: aleStroberi,
    },
    {
        id: 3,
        product: "Ale Ale Stroberi",
        deskripsi: "rasa Stroberi yang segar",
        img: aleStroberi,
    },
    {
        id: 3,
        product: "Ale Ale Stroberi",
        deskripsi: "rasa Stroberi yang segar",
        img: aleStroberi,
    },
]

const Product = () => {
    return (
        <div className='h-auto w-screen '>
            <h2 className='text-3xl font-merienda text-center pt-30'>Produk Kami</h2>
            <div className='place-items-center mt-12 grid grid-cols-4'>
                {dataProduct.map((item) => (
                    <div className='bg-white shadow-lg pb-7 mt-10 text-center rounded-md w-72 '>
                        <img src={item.img} alt="" className=' pt-7 hover:scale-110 transition-all duration-500 hover:rotate-360 mx-auto' />
                        <h1 className='text-xl font-merienda'>{item.product}</h1>
                        <p className='text-sm  font-merienda pt-3'>{item.deskripsi}</p>
                        <button className='bg-primary text-white px-13 py-2 mt-5 rounded-sm'>Beli</button>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Product
