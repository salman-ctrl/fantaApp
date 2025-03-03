import React from 'react'
import aleJeruk from '../assets/aleJeruk.png'
import aleAnggur from '../assets/aleAnggur.png'
import aleStroberi from '../assets/aleStroberi.png'

const Product = () => {
    return (
        <div className='h-screen'>
            <h1>Information</h1>
            <div className='container'>
                <img src={aleJeruk} alt="" />
                <p>Jeruk</p>
            </div>
        </div>
    )
}

export default Product
