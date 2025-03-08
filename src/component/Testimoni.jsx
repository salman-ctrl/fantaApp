import { data } from 'framer-motion/client'
import React, { useState } from 'react'
import asep from '../assets/dataClient/asep.jpg';
import burhan from '../assets/dataClient/burhan.jpg';
import jamal from '../assets/dataClient/jamal.jpg';
import johan from '../assets/dataClient/johan.jpg';
import leha from '../assets/dataClient/leha.jpg';
import mael from '../assets/dataClient/mael.jpg';
import neneng from '../assets/dataClient/neneng.jpg';
import siti from '../assets/dataClient/siti.jpg';
import sukiman from '../assets/dataClient/sukiman.jpg';
import sukmo from '../assets/dataClient/sukmo.jpg';
import Slider from 'react-slick';

const dataClient = [
    {
        id: 1,
        name: 'Asep',
        age: 25,
        deskripsi: "Rasanya lumayan enak, tapi agak terlalu manis buat saya. Lebih suka yang rasa jeruk sih!",
        skor: 3,
        varianFavorit: "Ale-Ale Jeruk",
        img: asep
    },
    {
        id: 2,
        name: 'Burhan',
        age: 30,
        deskripsi: "Seger banget, cocok diminum pas siang hari. Rasa anggur favorit saya!",
        skor: 4,
        varianFavorit: "Ale-Ale Anggur",
        img: burhan
    },
    {
        id: 3,
        name: 'Jamal',
        age: 28,
        deskripsi: "Enak sih, tapi menurut saya agak kurang berasa buahnya. Lebih suka varian leci.",
        skor: 3,
        varianFavorit: "Ale-Ale Leci",
        img: jamal
    },
    {
        id: 4,
        name: 'Johan',
        age: 27,
        deskripsi: "Minuman wajib buat nemenin kerja! Rasa mangga favorit saya.",
        skor: 5,
        varianFavorit: "Ale-Ale Mangga",
        img: johan
    },
    {
        id: 5,
        name: 'Leha',
        age: 23,
        deskripsi: "Rasa guavanya enak, segarnya pas! Anak-anak saya juga suka.",
        skor: 4,
        varianFavorit: "Ale-Ale Guava",
        img: leha
    },
    {
        id: 6,
        name: 'Mael',
        age: 31,
        deskripsi: "Menurut saya biasa aja, tapi lumayan kalau lagi haus.",
        skor: 3,
        varianFavorit: "Ale-Ale Melon",
        img: mael
    },
    {
        id: 7,
        name: 'Neneng',
        age: 26,
        deskripsi: "Bener-bener seger, rasa stroberinya enak dan nggak terlalu manis!",
        skor: 5,
        varianFavorit: "Ale-Ale Stroberi",
        img: neneng
    },
    {
        id: 8,
        name: 'Siti',
        age: 29,
        deskripsi: "Suka banget sama rasa kelapanya, beda dari yang lain!",
        skor: 4,
        varianFavorit: "Ale-Ale Kelapa",
        img: siti
    },
    {
        id: 9,
        name: 'Sukiman',
        age: 34,
        deskripsi: "Minuman yang cukup oke buat harga segini, tapi kurang dingin kurang mantap.",
        skor: 3,
        varianFavorit: "Ale-Ale Lemon",
        img: sukiman
    },
    {
        id: 10,
        name: 'Sukmo',
        age: 32,
        deskripsi: "Gue doyan banget rasa apel, apalagi kalau diminum dingin!",
        skor: 5,
        varianFavorit: "Ale-Ale Apel",
        img: sukmo
    }
];




const Testimoni = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }

        ]
    }


    return (
        <>
            <div className='mt-30 '>
                <h1 className='justify-center flex font-merienda text-3xl'>Apa kata mereka?</h1>

                <div className='flex space-x-20 mb-40 mt-40 justify-center'>
                    <Slider {...settings}>
                        {dataClient.map((item) => (
                            <div key={item.id} className='h-72 items-center flex flex-col w-96 bg-primary rounded-md'>
                                <img src={item.img} alt="" className='border-amber-500 border-2 w-40 -mt-20 h-40     rounded-full' />
                                <h1 className='text-center text-lg font-merienda text-white mt-7'>{item.name}</h1>
                                <p className='text-sm'>{item.age}</p>
                                <p className='text-center px-10 font-merienda text-white'>{item.deskripsi}</p>

                                <p className='mt-2 '>
                                    Best Varian :  {item.varianFavorit}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div>

            </div>

        </>

    )
}

export default Testimoni
