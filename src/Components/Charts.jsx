import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

const Charts = () => {
  return (
    <div>
       <Bar 
        data={{
            labels: ["A","B","C"],
            datasets:[
                {
                    label: "Revenue",
                    data: [200,300,400],
                },
            ]
        }}
       /> 
    </div>
  )
}

export default Charts