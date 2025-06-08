import { useContext } from 'react'
import { GlovalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { WeatherContext } from '../../context/context'
import styles from './ThisDayInfo.module.scss'


const ThisDayInfo = () => {
    const {weather} = useContext(WeatherContext);
    
    const toCelsius = (kelvin:number): number => Math.round(kelvin - 273.15)
    const toMmOfMercury = (preasure: number):number => Math.round(preasure/1.333)
    
    let celsiusTemp: number | undefined;
    let mmOfMercuryPreasure: number | undefined

    if(weather && typeof weather.main.temp === 'number') {
        celsiusTemp = toCelsius(weather?.main.temp);
        mmOfMercuryPreasure = toMmOfMercury(weather.main.pressure)
    }


    return (
        <div className={styles.container}>

            <div className={styles.indicatorLeft}>
                <div className={styles.indicator}>
                    <div className={styles.round}>
                        <GlovalSvgSelector id='temp'/>
                    </div>
                    <p className={styles.indicatorName}>Температура</p>
                </div>
                <div className={styles.indicator}>
                    <div className={styles.round}>
                        <GlovalSvgSelector id='preasure'/>
                    </div>
                    <p className={styles.indicatorName}>Давление</p>
                </div>
                <div className={styles.indicator}>
                    <div className={styles.round}>
                        <GlovalSvgSelector id='precipitation'/>
                    </div>
                    <p className={styles.indicatorName}>Осадки</p>
                </div>
                <div className={styles.indicator}>
                    <div className={styles.round}>
                        <GlovalSvgSelector id='wind'/>
                    </div>
                    <p className={styles.indicatorName}>Ветер</p>
                </div>
            </div>

            <div className={styles.indicatorRight}>
                <p className={styles.indicatorValue}>{celsiusTemp}°</p>
                <p className={styles.indicatorValue}>{mmOfMercuryPreasure} мм ртутного столба</p>
                <p className={styles.indicatorValue}>{weather?.weather[0].description}</p>
                <p className={styles.indicatorValue}>{Math.round(weather?.wind.speed)} м/с юго-запад - легкий ветер</p>
            </div>
                
        </div>
    )
}

export default ThisDayInfo