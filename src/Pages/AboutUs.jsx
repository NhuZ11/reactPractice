import React from 'react'
import Calendar from 'react-calendar'
import MyCalendar from '../Components/BigCalendar'
import CountUp from 'react-countup'
import ReactPlayer from 'react-player'
import Charts from '../Components/Charts';
import Graph from '../Components/Graph';

const AboutUs = () => {
  return (
    <div style={{width: "300px"}}>
        <Calendar />

        <CountUp end={1000} duration={10}/> 

        <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
        <div>
        <Charts />
        <Graph />
        </div>

    </div>
  )
}

export default AboutUs