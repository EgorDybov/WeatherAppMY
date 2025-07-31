import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useContext, useEffect, useState } from 'react';

import { Button } from 'antd';
// import { Switch } from "antd";

import { WeatherContext } from '../../context/context';

import type { IHourData, IModalProps } from './types';

import styles from './Modal.module.scss';



const Modal = ({isOpen, onClose}: IModalProps) => {
  const [hourData, setHourData] = useState<IHourData[]>([]);
  const [isBarChart, setBarChaet] = useState<boolean>(true);
  
  const context = useContext(WeatherContext);

  useEffect(() => {
    const data = context?.day || [];

    if(Array.isArray(context?.day)) {
      const preparedData = data.map((hour) => {
        return {
          name: hour.time.slice(-5),
          temperature: hour.temp_c,
        }
      })
      
      setHourData(preparedData)
    }
  }, [context?.day]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const date = context?.date ? context?.date.replaceAll('-', '.').split('.').reverse().join('.') : 'Нет данных';

  if(!isOpen) return null

    return (
      <div className={styles.overlay}>

        <div className={styles.wrapper}>
          <div className={styles.modalUp}>
            <div className={styles.modalCityName}>
              <p 
                className={styles.cityName}>
                Город: 
                <span> {context?.city}</span>
              </p>
              <p 
                className={styles.date}>
                Дата: 
                <span> {date}</span>
              </p>
              <Button type='primary' style={{marginTop: 20}}
                onClick={() => setBarChaet(!isBarChart)}>
                {isBarChart ? 'Открыть диаграмму' : 'Открыть график'}
              </Button>
              
            </div>
            <button 
              className={styles.closeBtn} 
              onClick={onClose}>  
            </button>
          </div>
          {hourData.length > 0 && 
            (isBarChart ? 
            <LineChart 
              width={730} 
              height={350} 
              margin={{ top: 20, right: 50, left: 0, bottom: 20 }}
              data={hourData}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#4793ff" />
            </LineChart>
          : <BarChart 
              width={730} 
              height={350} 
              margin={{ top: 20, right: 50, left: 0, bottom: 20 }}
              data={hourData} 
              >
              
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend type='line'/>
              <Bar dataKey="temperature" fill="#4793ff" />
            </BarChart>)}
        </div>

      </div>
      
  )
}

export default Modal