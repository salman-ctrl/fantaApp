import React from 'react'
import Hero from './component/Hero'
import Information from './component/Information'
import Product from "./component/Product"
import Testimoni from './component/Testimoni'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <div className='min-h-screen relative overflow-hidden bg-gray-100'>
        <Hero />
        <Product />
        <Information />
        <Testimoni />
        <Footer />
      </div>

      <div>

      </div>

    </>
  )
}
export default App

