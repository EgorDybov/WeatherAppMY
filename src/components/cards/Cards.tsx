import { useContext } from 'react'

import { WeatherContext } from '../../context/context'
import Card from '../card/Card'
import SkeletonCard from '../skeletonCard/SkeletonCard'

import styles from './Cards.module.scss'

type CardsProps = {
    requiredCountCards: number,
    openModal: (v: number) => void
}

const Cards = ({requiredCountCards, openModal}: CardsProps) => {

    const context = useContext(WeatherContext)

    if(!context) return undefined

    const { weather } = context

    const forecastDays = weather?.forecast.forecastday || []

    //количество карточек, которое нужно отобразитьx
    const missingCards = requiredCountCards - forecastDays.length;

    const emptyCards = Array.from({length: missingCards}, (_, i) => (
        <SkeletonCard key={`skeleton-${i}`}/>
    ))
    
    return (
        <div className={styles.container}>
            {weather?.forecast.forecastday.map((dayForecast) => (
                <Card key={dayForecast.date} date={dayForecast.date} forecast={dayForecast} onClick={openModal}/>
            ))}
            {emptyCards}
        </div>
    )
}

export default Cards