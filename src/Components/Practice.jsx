import React, {useState,useEffect} from 'react'


const Practice = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
      document.title=count>5?"Greater":"lesser"
      console.log("render")
    },[count]);

    const addUp = ()=>{
        setCount(c=>c+1)
    }

    
    
    

  return (
    <div className='text-white'>
        <button className='bg-green-500 w-[130px] rounded-md font-medium mx-auto my-3 py-2' onClick={addUp}>Add</button>
        <p>{count}</p>

    </div>
  )
}

export default Practice