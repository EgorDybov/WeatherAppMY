import { GlovalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector"

import styles from './Card.module.scss'

const Card = () => {
    return (
        <div className={styles.card}>
            <p className={styles.day}>Сегодня</p>
            <p className={styles.date}>28 авг</p>
            <GlovalSvgSelector id="sun-rain"/>
            <p className={styles.tempDay}>+18°</p>
            <p className={styles.tempNight}>+15°</p>
            <p className={styles.desc}>Облачно</p>
        </div>
    )
}

export default Card