import { useContext } from "react";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import classNames from "classnames";
import { Skeleton } from "antd";

import { dictionary, translate } from "../../utils/utils";
import { WeatherContext } from "../../context/context";

import { MapIcons } from "../../assets/icons/global/GlobalSvgSelector";

import styles from './Card.module.scss';

const Card = ({ date, forecast, onClick }: any ) => {

    const context = useContext(WeatherContext);

    const { day, hour } = forecast;

    const maxTemp = day?.maxtemp_c;
    const minTemp = day?.mintemp_c;
    
    const handleClick = () => {
        context?.setDay(hour)
        context?.setDate(date)
        onClick()
    };

    const IconComponent = MapIcons.get(day?.condition.text?.toLowerCase().trim());

    const dateString = date; 

    const weekday = format(new Date(dateString), 'EEEE', { locale: ru }); 

    const isWeekend = weekday.toLocaleLowerCase() === 'суббота' || weekday.toLocaleLowerCase() === 'воскресенье';
    
    
    return (
        <div className={styles.card} onClick={handleClick}>
            <p className={classNames(styles.day, {[styles.weekend]: isWeekend})}>{weekday.charAt(0).toUpperCase() + weekday.slice(1)}</p>
            <p className={styles.date}>{date.replaceAll('-', '.').split('.').reverse().join('.')}</p>
            {IconComponent ? <IconComponent width={48} height={48}/>  : <Skeleton.Avatar active size={48} shape="square"/>}

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