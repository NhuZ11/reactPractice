import React from 'react'
import Cards from "../Components/Cards";
import Footer from '../Components/Footer';

export default function Explore() {
  return (
    <div className='text-white'>
      <h1 className='text-4xl font-bold mb-3 text-center'>Explore</h1>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
