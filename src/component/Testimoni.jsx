import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; import { FaStar } from "react-icons/fa";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dataClient = [
    {
        id: 1,
        name: 'Asep',
        age: 25,
        deskripsi: "Rasanya enak sih, tapi manisnya kaya hidup aku pas gajian!",
        skor: 3,
        varianFavorit: "Ale-Ale Jeruk",
        img: asep
    },
    {
        id: 2,
        name: 'Burhan',
        age: 30,
        deskripsi: "Seger kayak mandi ujan, tapi ini bisa diminum!",
        skor: 4,
        varianFavorit: "Ale-Ale Anggur",
        img: burhan
    },
    {
        id: 3,
        name: 'Jamal',
        age: 28,
        deskripsi: "Kurang berasa buahnya, tapi tetep lebih berasa dari perhatian doi.",
        skor: 3,
        varianFavorit: "Ale-Ale Leci",
        img: jamal
    },
    {
        id: 4,
        name: 'Johan',
        age: 27,
        deskripsi: "Temen setia pas begadang, ga bisa pisah sama yang rasa mangga!",
        skor: 5,
        varianFavorit: "Ale-Ale Mangga",
        img: johan
    },
    {
        id: 5,
        name: 'Leha',
        age: 23,
        deskripsi: "Anak-anak suka, emak juga suka, bapaknya mah ngikut aja!",
        skor: 4,
        varianFavorit: "Ale-Ale Guava",
        img: leha
    },
    {
        id: 6,
        name: 'Mael',
        age: 31,
        deskripsi: "Biasa aja, tapi kalau gratis sih enak banget!",
        skor: 3,
        varianFavorit: "Ale-Ale Melon",
        img: mael
    },
    {
        id: 7,
        name: 'Neneng',
        age: 26,
        deskripsi: "Rasanya pas, stroberinya ga lebay, beda sama mantan!",
        skor: 5,
        varianFavorit: "Ale-Ale Stroberi",
        img: neneng
    },
    {
        id: 8,
        name: 'Siti',
        age: 29,
        deskripsi: "Kelapanya berasa banget, kayak lagi liburan di pantai!",
        skor: 4,
        varianFavorit: "Ale-Ale Kelapa",
        img: siti
    },
    {
        id: 9,
        name: 'Sukiman',
        age: 34,
        deskripsi: "Kurang dingin, kurang greget. Tapi tetep lumayan lah!",
        skor: 3,
        varianFavorit: "Ale-Ale Lemon",
        img: sukiman
    },
    {
        id: 10,
        name: 'Sukmo',
        age: 32,
        deskripsi: "Minum Ale-Ale Apel dingin itu nikmat yang hakiki!",
        skor: 5,
        varianFavorit: "Ale-Ale Apel",
        img: sukmo
    },
    {
        id: 10,
        name: 'Sukmo',
        age: 32,
        deskripsi: "Minum Ale-Ale Apel dingin itu nikmat yang hakiki!",
        skor: 5,
        varianFavorit: "Ale-Ale Apel",
        img: sukmo
    },
    {
        id: 10,
        name: 'Sukmo',
        age: 32,
        deskripsi: "Minum Ale-Ale Apel dingin itu nikmat yang hakiki!",
        skor: 5,
        varianFavorit: "Ale-Ale Apel",
        img: sukmo
    },
];


const Testimoni = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
    };

    return (
        <div className="py-16 bg-gray-300 px-4 w-full" id="testimoni">
            <h1 className="text-center font-merienda text-3xl mb-16">Apa kata mereka?</h1>

            <div className="w-full mt-20 px-20 mx-auto">
                <Slider {...settings}>
                    {dataClient.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up" // Animasi naik ke atas saat muncul
                            data-aos-delay={index * 200}

                            className="px-4 pt-20">
                            <div className="h-72 items-center flex flex-col bg-primary rounded-md p-4 relative z-50">
                                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                                    <img
                                        src={item.img}
                                        alt={`Test imoni dari ${item.name}`}
                                        className="border-amber-500 border-2 w-40 h-40 rounded-full "
                                    />
                                </div>
                                <h1 className="text-center text-lg font-merienda  text-white mt-24">{item.name}</h1>
                                <p className="text-sm text-white/80">{item.age} tahun</p>
                                <p className="text-center px-2 font-merienda text-white mt-2 flex-grow">{item.deskripsi}</p>
                                <p className="flex">
                                    {[...Array(5)].map((_, lb) => (
                                        <FaStar
                                            key={lb}
                                            className={lb < item.skor ? "text-yellow-200 text-lg" : "text-gray-500 text-lg"}
                                        />
                                    ))}
                                </p>
                                <p className="mt-2 text-amber-300 font-medium">
                                    Varian Favorit: {item.varianFavorit}
                                </p>

                            </div>

                        </div>
                    ))}
                </Slider>
                <div className="h-50"></div>
            </div>
        </div>
    );
};

export default Testimoni;