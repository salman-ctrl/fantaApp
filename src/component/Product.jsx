import React from 'react'
import aleJeruk from '../assets/aleJeruk.png'
import aleAnggur from '../assets/aleAnggur.png'
import aleStroberi from '../assets/aleStroberi.png'

const Product = () => {
    return (
        <div className='h-screen w-screen bg-red-500'>
            <div className='h-full w-full flex justify-center items-center space-x-2.5'>
                <div className='container w-40 h-50 bg-primary'>
                    <img src={aleJeruk} alt="" className='w-full h-30' />
                    <p className='text-white '>Jeruk</p>
                </div>
                <div className='container w-40 h-50 bg-primary'>
                    <img src={aleAnggur} alt="" className='w-full h-30' />
                    <p className='text-white '>Mangga</p>
                </div>
                <div className='container w-40 h-50 bg-primary'>
                    <img src={aleStroberi} alt="" className='w-full h-30' />
                    <p className='text-white '>Stroberi</p>
                </div>
            </div>
        </div>
    )
}

export default Product
