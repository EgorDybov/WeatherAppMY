import styles from './ThisDay.module.scss';

import { MapIcons } from '../../assets/icons/global/GlobalSvgSelector';
import { WeatherContext } from '../../context/context';
import { useContext } from 'react';
import { Spin } from "antd";


const ThisDay = () => {
    const context = useContext(WeatherContext)
    
    if(!context?.weather) {
        return <div className={styles.container} style={{justifyContent: 'center'}}>
            <Spin size='large'/>
        </div>
    }

    const { weather } = context
    
    // const toCelsius = (kelvin:number): number => Math.round(kelvin - 273.15)
    
    // let celsiusTemp: number | undefined;

    // if(weather && weather.main) {
    //     celsiusTemp = toCelsius(Number(weather?.main.temp))
    // }


    return (
        <div className={styles.container}>
            <div className={styles.currentDayUp}>
                <p className={styles.currentWeather}>{Math.round(weather.current.temp_c)}°</p>
                <p className={styles.currentDay}>Сегодня</p>
            </div>
            <div className={styles.currentDayBottom}>
                <p className={styles.currentTime}>{weather.location.localtime}</p>
                <p className={styles.currentTown}>{weather.location.name}</p>
            </div>
            <div className={styles.svgWeather}>
                {/* <GlovalSvgSelector  id='sun' width={119} height={119}/> */}
                {MapIcons.get(weather?.current.condition.text)}
            </div>
            
        </div>
    )
}

export default ThisDay