import React from 'react'
import aleJeruk from '../assets/aleJeruk.png'
import aleAnggur from '../assets/aleAnggur.png'
import aleStroberi from '../assets/aleStroberi.png'

const dataProduct = [

]

const Product = () => {
    return (
        <div className='h-screen w-screen '>
            <h2 className='text-3xl font-merienda text-center pt-30'>Produk Ale</h2>
            <div className='h-full w-full flex justify-center pt-10 space-x-2.5 text-center'>
                <div className='container w-40 h-50 shadow-lg'>
                    <img src={aleJeruk} alt="" className='w-full h-30' />
                    <p className='text-white font-merienda '>Jeruk</p>
                </div>
                <div className='container w-40 h-50 shadow-lg'>
                    <img src={aleAnggur} alt="" className='w-full h-30' />
                    <p className='text-white font-merienda'>Mangga</p>
                </div>
                <div className='container w-40 h-50 shadow-lg'>
                    <img src={aleStroberi} alt="" className='w-full h-30' />
                    <p className='text-white font-merienda'>Mangga</p>
                </div>

            </div>
        </div>
    )
}

export default Product
