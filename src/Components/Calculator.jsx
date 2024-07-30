import React,{useState,useEffect} from 'react'


const Calculator = () => {
    const [number, setNumber]=useState(0);

    useEffect(()=>{
       return function inputValue(n){
            setNumber(n)
        }

    },[])
    console.log(number)
  return (
    <div className='text-white'>
        <h1 className='text-6xl text-bold text-center'>Calculator</h1>
       <div className='flex flex-col items-center '>
            <div className='mt-[140px] ml-[40px]'>
                <input className='w-[300px]' type="number" />
            </div>
            <div className='grid-cols-3 mt-[10px] ml-10'>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'onClick={()=>inputValue(1)}>1</button>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>2</button>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>3</button>
            </div>
            
            <div className='grid-cols-3 mt-[10px] ml-10'>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>4</button>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>5</button>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>6</button>
            </div>
            <div className='grid-cols-3 mt-[10px] ml-10'>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>7</button>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>8</button>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>9</button>
            </div>
            <div className='grid-cols-3 mt-[10px] ml-10'>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>0</button>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>=</button>
                <button className='bg-green-500 w-[80px] rounded-md font-medium mx-3'>+</button>
            </div>
       </div>

    </div>
  )
}

export default Calculator