import { useState } from "react";

import Cards from "../cards/Cards";
import Filter from "../filter/Filter";
import ThisDay from "../thisDay/ThisDay";
import ThisDayInfo from "../thisDayInfo/ThisDayInfo";

import styles from "./index.module.scss";


type Props = {
   openModal:  (v: number) => void
}

const MainPage = (props:  Props) => {
  const [dayCount, setDayCount] = useState(7);

  return (
    <>
      <div className={styles.dayInfo}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Filter selectedCountDay={dayCount} onChangeCount={setDayCount} />
      <Cards requiredCountCards={dayCount} openModal={props.openModal} />
    </>
  );
};

export default MainPage;
