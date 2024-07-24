import React, {useState,useEffect} from 'react'


const Practice = () => {
    const [count, setCount] = useState(0)

    const addUp = ()=>{
        setCount(c=>c+1)
    }

    
        document.title= `${count}`
    

  return (
    <div className='text-white'>
        <button className='bg-green-500 w-[130px] rounded-md font-medium mx-auto my-3 py-2' onClick={addUp}>Add</button>
        <p>{count}</p>

    </div>
  )
}

export default Practice