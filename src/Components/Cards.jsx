import React from 'react'
import White from "../assets/whitecar.jpg"

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white text-black'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8'>
            <div className='w-full shadow-2xl flex flex-col p-5 my-4 rounded-lg items-center '>
                <img className='w-30 mx-auto  bg-white' src={White} alt="" />
                <h2 className='text-2xl font-bold text-center'>White Car</h2>
                <p>Price: $150,000</p>
                <button className='bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 hover:scale-105'>BUY NOW</button>
            </div>

        </div>

    </div>
  )
}

export default Cards