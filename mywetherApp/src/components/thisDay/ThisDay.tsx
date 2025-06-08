import styles from './ThisDay.module.scss';

import { GlovalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';


const ThisDay = () => {

    // const toCelsius = (kelvin: number) => Math.round(kelvin - 273.15)

    return (
        <div className={styles.container}>
            <div className={styles.currentDayUp}>
                <p className={styles.currentWeather}>20°</p>
                <p className={styles.currentDay}>Сегодня</p>
            </div>
            <div className={styles.currentDayBottom}>
                <p className={styles.currentTime}> Время: 21:54</p>
                <p className={styles.currentTown}>Москва</p>
            </div>
            <div className={styles.svgWeather}>
                <GlovalSvgSelector  id='sun' width={119} height={119}/>
            </div>
            
        </div>
    )
}

export default ThisDay