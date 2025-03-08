import React from 'react'
import Hero from './component/Hero'
import Information from './component/Information'
import Product from "./component/Product"
import Testimoni from './component/Testimoni'

function App() {
  return (
    <>
      <div className='min-h-screen relative bg-gray-100'>
        <Hero />
        <Product />
        <Information />
        <Testimoni />
      </div>

      <div>

      </div>

    </>
  )
}
export default App

