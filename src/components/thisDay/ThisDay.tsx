import styles from './ThisDay.module.scss';

import { GlovalSvgSelector, MapIcons } from '../../assets/icons/global/GlobalSvgSelector';
import { WeatherContext } from '../../context/context';
import { useContext, useEffect } from 'react';


const ThisDay = () => {
    const context = useContext(WeatherContext)
    
    if(!context?.weather) {
        return <img src="https://loading.io/assets/mod/spinner/spinner/lg.gif" style={{width:100, height:100}}  alt="Spinner - Build GIF, SVG, APNG, CSS and Lottie Ajax Preloaders with Loading .io"></img>
    }

    const { weather } = context
    
    const toCelsius = (kelvin:number): number => Math.round(kelvin - 273.15)
    
    let celsiusTemp: number | undefined;

    if(weather && weather.main) {
        celsiusTemp = toCelsius(Number(weather?.main.temp))
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
                {/* <GlovalSvgSelector  id='sun' width={119} height={119}/> */}
                {MapIcons.get(weather.weather[0].description.toLowerCase())}
            </div>
            
        </div>
    )
}

export default ThisDay