import { useContext } from "react";
import { Spin } from "antd";

import { GlovalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { WeatherContext } from "../../context/context";

import { dictionary, translate } from "../../utils/utils";

import styles from "./ThisDayInfo.module.scss";

const ThisDayInfo = () => {
  const context = useContext(WeatherContext);
  // использкем хук useContext для получения текущего контекста

  if (!context?.weather) {
    return (
      <div
        className={styles.container}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const { weather } = context;
  // извлекаем из объекта context свойство weather для лаконичного использования. Можем напрямую обращаться к weather, вместо context.weather

  const toMmOfMercury = (preasure: number): number =>
    Math.round(preasure / 1.333);
  const windSpeedMs = (speedWind: number): any => {
    const result = speedWind / 2.236936;
    return result.toFixed(1);
  };

  let mmOfMercuryPreasure: number | undefined;

  if (weather) {
    mmOfMercuryPreasure = toMmOfMercury(weather?.current.pressure_mb);
  }

  return (
    <div className={styles.container}>
      <div className={styles.indicatorLeft}>
        <div className={styles.indicator}>
          <div className={styles.round}>
            <GlovalSvgSelector id="temp" />
          </div>
          <p className={styles.indicatorName}>Температура</p>
        </div>
        <div className={styles.indicator}>
          <div className={styles.round}>
            <GlovalSvgSelector id="preasure" />
          </div>
          <p className={styles.indicatorName}>Давление</p>
        </div>
        <div className={styles.indicator}>
          <div className={styles.round}>
            <GlovalSvgSelector id="precipitation" />
          </div>
          <p className={styles.indicatorName}>Осадки</p>
        </div>
        <div className={styles.indicator}>
          <div className={styles.round}>
            <GlovalSvgSelector id="wind" />
          </div>
          <p className={styles.indicatorName}>Ветер</p>
        </div>
      </div>

      <div className={styles.indicatorRight}>
        <p className={styles.indicatorValue}>
          {Math.round(weather?.current.temp_c)}°
        </p>
        <p className={styles.indicatorValue}>
          {mmOfMercuryPreasure} мм. ртутного столба
        </p>
        <p className={styles.indicatorValue}>
          {translate(weather?.current.condition.text, dictionary, "ru")}
        </p>
        <p className={styles.indicatorValue}>
          {windSpeedMs(weather?.current.wind_mph)} м/с
        </p>
      </div>
    </div>
  );
};

export default ThisDayInfo;
