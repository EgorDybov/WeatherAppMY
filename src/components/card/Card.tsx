import { GlovalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector"
import { dictionary, translate } from "../../utils/utils";

import styles from './Card.module.scss'

// interface IDay {
//     day: string,
//     forecast: {}
// }

const Card = ({date, forecast}: any ) => {

    const { day } = forecast

    const maxTemp = day?.maxtemp_c;
    const minTemp = day?.mintemp_c;

    console.log(day);
    
    
    return (
        <div className={styles.card}>
            {date ? <p className={styles.day}>{date}</p> : <p className={styles.day}>2025-00-00</p>}
            {date ? <p className={styles.date}>{date.split('-').reverse().join('-')} </p> : <p className={styles.date}>2025-00-00</p>}
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