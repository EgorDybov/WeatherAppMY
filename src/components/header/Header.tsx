import { Select, type SelectProps } from "antd";

import { useContext, useMemo } from "react";
import cities from "../../api/city.json";
import { WeatherContext } from "../../context/context";

import { GlovalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

import styles from "./Header.module.scss";

const Header = () => {
  const context = useContext(WeatherContext) ;

  if (!context) throw new Error('No WeatherContext');

  const {city, setCity} = context

  const options: SelectProps["options"] = useMemo(() => {
    return cities.map((city) => {
      return {
        key: city.id,
        value: city.name,
        label: city.name,
      };
    });
  }, []);

  const onSelect = (cityName: string) => {
    setCity(cityName);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <GlovalSvgSelector id="logo" />
        <a className={styles.headerNameLogo}>wheather app</a>
      </div>
      <div className={styles.headerRight}>
        <GlovalSvgSelector id="theme" />
        <Select
          className={styles.headerSelect}
          options={options}
          placeholder={"Выберите город"}
          onChange={onSelect}
          showSearch
          value={city}
        />
      </div>
    </header>
  );
};

export default Header;
