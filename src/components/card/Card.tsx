import { useContext } from "react"
import { GlovalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector"
import { WeatherContext } from "../../context/context"

import styles from './Card.module.scss'

interface IDay {
    day: string
}

const Card = ({day}: IDay) => {
    const {weather} = useContext(WeatherContext)

    const toCelsius = (kelvin:number): number => Math.round(kelvin - 273.15)
    
    let celsiusTempMax: number | undefined;
    let celsiusTempMin: number | undefined;

    if(weather && typeof weather.main.temp === 'number') {
        celsiusTempMax = toCelsius(weather?.main.temp_max)
        celsiusTempMin = toCelsius(weather?.main.temp_min)
    }


    return (
        <div className={styles.card}>
            <p className={styles.day}>{day}</p>
            <p className={styles.date}>28 авг</p>
            <GlovalSvgSelector id="sun-rain"/>
            <p className={styles.tempDay}>{celsiusTempMax}°</p>
            <p className={styles.tempNight}>{celsiusTempMin}°</p>
            <p className={styles.desc}>Облачно</p>
        </div>
    )
}

export default Card