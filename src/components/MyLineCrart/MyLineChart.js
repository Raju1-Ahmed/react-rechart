import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: "Supplier A",
          uv: 4000,
          sales: 2400,
          amt: 2400
        },
        {
          name: "Supplier B",
          uv: 3000,
          sales: 1398,
          amt: 2210
        },
        {
          name: "Supplier C",
          uv: 2000,
          sales: 9800,
          amt: 2290
        },
        {
          name: "Supplier D",
          uv: 2780,
          sales: 3908,
          amt: 2000
        },
        {
          name: "Supplier E",
          uv: 1890,
          sales: 4800,
          amt: 2181
        },
        {
          name: "Supplier F",
          uv: 2390,
          sales: 3800,
          amt: 2500
        },
        {
          name: "Supplier G",
          uv: 3490,
          sales: 4300,
          amt: 2100
        }
      ];
      
    return (
        <div>
            <h1>My MyLineChart</h1>
            <LineChart width={800} height={500} data={data}>
                <Line dataKey={'price'}></Line>
                <Line dataKey={'sales'}></Line>
               <XAxis dataKey={"name"}></XAxis>
                <Tooltip></Tooltip>
               <YAxis></YAxis> 
            </LineChart>
        </div>
    );
};

export default MyLineChart;