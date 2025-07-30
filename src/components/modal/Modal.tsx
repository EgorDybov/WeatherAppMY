import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import styles from './Modal.module.scss';
import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../../context/context';
import type { IHourData } from './types';


const data: IHourData = [
  {
    
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 11890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]


const Modal = () => {
  const [hourData, setHourData] = useState<IHourData[]>([]);

  const context = useContext(WeatherContext);
    
  useEffect(() => {
    const data = context?.day || []
    const preparedData = data.map((hour) => {
      return {
        name: hour.time.slice(-5),
        temperature: hour.temp_c,
      }
    })
    console.log('data', data);
    console.log('hourData', hourData);
    
    
    setHourData(preparedData)
  }, [context?.day]);


    return (
      <div className={styles.wrapper}>
        <div className={styles.cityName}>Moscow</div>
        <div className={styles.date}>21.212.21</div>
       <LineChart width={730} height={350} data={hourData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#4793ff" />
      </LineChart>

          {/* <AreaChart width={730} height={250} data={hourData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="temp" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart> */}
      </div>
  )
}

export default Modal