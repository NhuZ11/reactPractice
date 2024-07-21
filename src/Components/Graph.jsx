import React  from "react";
import { useState } from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


function Graph() {
    
    const [chartData, setChartData] = useData();     

    return(
        <div style={{height: "500px", width: "500px"}}>
            <Chart type='line' data={chartData} />
        </div>
    )
}

export default Graph;

const useData = ( data = {} ) =>  {        
    const [state, setState] = useState(data);
    data = {            
        labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        datasets: [
            {   
                label: 'The Level',
                data: [21, 53, 65, 12, 32]
            },
        ]
    }

return [data]
}