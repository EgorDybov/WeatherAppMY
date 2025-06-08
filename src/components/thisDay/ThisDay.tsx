import styles from './ThisDay.module.scss';

import { GlovalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { WeatherContext } from '../../context/context';
import { useContext } from 'react';


const ThisDay = () => {
    const { weather } = useContext(WeatherContext)
    console.log(weather);
    
    const toCelsius = (kelvin:number): number => Math.round(kelvin - 273.15)
    
    let celsiusTemp: number | undefined;

    if(weather && typeof weather.main.temp === 'number') {
        celsiusTemp = toCelsius(weather?.main.temp)
    }

    return (
        <div className={styles.container}>
            <div className={styles.currentDayUp}>
                <p className={styles.currentWeather}>{celsiusTemp}°</p>
                <p className={styles.currentDay}>Сегодня</p>
            </div>
            <div className={styles.currentDayBottom}>
                <p className={styles.currentTime}> Время: 21:54</p>
                <p className={styles.currentTown}>{weather?.name}</p>
            </div>
            <div className={styles.svgWeather}>
                <GlovalSvgSelector  id='sun' width={119} height={119}/>
            </div>
            
        </div>
    )
}

export default ThisDay