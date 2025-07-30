import { useContext } from "react";
import { GlovalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector"
import { dictionary, translate } from "../../utils/utils";

import styles from './Card.module.scss'
import { WeatherContext } from "../../context/context";

// interface IDay {
//     day: string,
//     forecast: {}
// }

const Card = ({date, forecast}: any ) => {

    const context = useContext(WeatherContext);

    const { day, hour } = forecast

    const maxTemp = day?.maxtemp_c;
    const minTemp = day?.mintemp_c;
    
    return (
        <div className={styles.card} onClick={() => {
            console.log('hour', hour);
            context?.setDay(hour);
        }}>
            {date ? <p className={styles.day}>{date.replaceAll('-', '.').split('.').reverse().join('.')}</p> : <p className={styles.day}>{'2025-__-__'.replaceAll('-','.').split('.').reverse().join('.')}</p>}
            {date ? <p className={styles.date}>{date.replaceAll('-', '.').split('.').reverse().join('.')} </p> : <p className={styles.date}>2025-00-00</p>}
            <GlovalSvgSelector id="sun-rain"/>

            {maxTemp !== undefined ? (
                <p className={styles.tempDay}>{Math.round(day.maxtemp_c)}°</p> 
            ) : ( 
                <p className={styles.tempDay}>Данных нет</p>
            )}
            {minTemp !== undefined ? (
                <p className={styles.tempNight}>{Math.round(day.mintemp_c)}°</p> 
            ) : (
                <p className={styles.tempNight}>Данных нет</p>
            )}

            {day?.condition.text ? <p className={styles.desc}>{translate(day?.condition.text, dictionary, 'ru')}</p> : <p className={styles.desc}>Данных нет</p>}
        </div>
    )
}

export default Card