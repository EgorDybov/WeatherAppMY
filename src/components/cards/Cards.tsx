import { useContext } from 'react'
import Card from '../card/Card'
import { WeatherContext } from '../../context/context'

import styles from './Cards.module.scss'
// import type { IForecastday } from './types'

const Cards = () => {

    const context = useContext(WeatherContext)

    if(!context) return undefined

    const { weather } = context
    const forecastDays = weather?.forecast.forecastday || []

    //количество карточек, которое нужно отобразить
    const requiredCountCards = 7;
    const missingCards = requiredCountCards - forecastDays.length;

    const emptyCards = Array.from({length: missingCards}, (_, index) => (
        <Card key={`empty-${index}`} date="" forecast={{}}/>
    ))
    
    return (
        <div className={styles.container}>
            {weather?.forecast.forecastday.map((dayForecast) => (
                <Card key={dayForecast.date} date={dayForecast.date} forecast={dayForecast}/>
            ))}
            {emptyCards}
        </div>
    )
}

export default Cards