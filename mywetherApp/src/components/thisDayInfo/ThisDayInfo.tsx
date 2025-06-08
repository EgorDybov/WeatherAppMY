import { GlovalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import styles from './ThisDayInfo.module.scss'


const ThisDayInfo = () => {
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
                <p className={styles.indicatorValue}>20°</p>
                <p className={styles.indicatorValue}>765 мм ртутного столба</p>
                <p className={styles.indicatorValue}>Без осадков</p>
                <p className={styles.indicatorValue}>3 м/с юго-запад - легкий ветер</p>
            </div>
                
        </div>
    )
}

export default ThisDayInfo