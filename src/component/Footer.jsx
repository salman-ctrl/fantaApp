import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            data-aos="fade-up" // Animasi naik ke atas saat muncul
            data-aos-delay={1000}
            className="w-full bg-primary text-white py-24 text-center ">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <p className="text-3xl font-merienda top-0 pb-5">PT.Ale-Ale</p>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-white hover:text-gray-300 transition"><FaFacebookF size={20} /></a>
                    <a href="#" className="text-white hover:text-gray-300 transition"><FaTwitter size={20} /></a>
                    <a href="#" className="text-white hover:text-gray-300 transition"><FaInstagram size={20} /></a>
                </div>
                <p className="text-sm mt-2">&copy; 2025 Ale Ale. All rights reserved.</p>

            </div>
        </footer>
    );
}

export default Footer;
