import React from 'react'
import Hero from './component/Hero'
import Information from './component/Information'
import Product from "./component/Product"

function App() {
  return (
    <>
      <div className='min-h-screen relative bg-gray-100'>
        <Hero />
        <Product />
        <Information />
      </div>

    </>
  )
}
export default App

