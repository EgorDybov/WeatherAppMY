import { useContext } from "react";
import { Spin } from "antd";

import { WeatherContext } from "../../context/context";

import { MapIcons } from "../../assets/icons/global/GlobalSvgSelector";

import styles from "./ThisDay.module.scss";

const ThisDay = () => {
  const context = useContext(WeatherContext);

  if (!context?.weather) {
    return (
      <div className={styles.container} style={{ justifyContent: "center" }}>
        <Spin size="large" />
      </div>
    );
  }

  const { weather } = context;

  const IconComponent = MapIcons.get(
    weather?.current.condition.text?.toLowerCase()
  );

  return (
    <div className={styles.container}>
      <div className={styles.currentDayUp}>
        <p className={styles.currentWeather}>
          {Math.round(weather.current.temp_c)}°
        </p>
        <p className={styles.currentDay}>Сегодня</p>
      </div>
      <div className={styles.currentDayBottom}>
        <p className={styles.currentTime}>{weather.location.localtime}</p>
        <p className={styles.currentTown}>{weather.location.name}</p>
      </div>
      <div className={styles.svgWeather}>
        {IconComponent ? <IconComponent /> : null}
      </div>
    </div>
  );
};

export default ThisDay;
