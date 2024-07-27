import React from 'react'
import Calendar from 'react-calendar'
import MyCalendar from '../Components/BigCalendar'
import CountUp from 'react-countup'
import ReactPlayer from 'react-player'
import Charts from '../Components/Charts';
import Graph from '../Components/Graph';
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div style={{width: "300px"}}>
        <Calendar />

        <CountUp end={1000} duration={2}/> 

        <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
        <div className='flex gap-2'>
        <button className="bg-green-500 w-[130px] rounded-md font-medium mx-auto my-3 py-2 ">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-green-500 w-[130px] rounded-md font-medium mx-auto my-3 py-2 ">
          <Link to="/practice">Practice component</Link>
        </button>
        <button className="bg-green-500 w-[130px] rounded-md font-medium mx-auto my-3 py-2 ">
          <Link to="/check-api">Check API</Link>
        </button>
       
      </div>
        <div>
        <Charts />
        <Graph />
        </div>

    </div>
  )
}

export default AboutUs