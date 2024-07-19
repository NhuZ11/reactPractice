import React from 'react'
import Calendar from 'react-calendar'
import MyCalendar from '../Components/BigCalendar'
import CountUp from 'react-countup'

const AboutUs = () => {
  return (
    <div style={{width: "300px"}}>
        <Calendar />

        <CountUp end={1000} duration={10}/> 

    </div>
  )
}

export default AboutUs