import { Button } from "antd";

import classNames from "classnames";

import styles from "./Filter.module.scss";

const Filter = ({
  selectedCountDay,
  onChangeCount,
}: {
  selectedCountDay: number;
  onChangeCount: (v: number) => void;
}) => {
  const options = [7, 10, 14];

  return (
    <div className={styles.filter}>
      <div className={styles.filterLeft}>
        {options.map((count) => (
          <Button
            key={count}
            className={classNames(styles.btn, {
              [styles.active]: selectedCountDay === count,
            })}
            onClick={() => onChangeCount(count)}
          >
            На {count} дней
          </Button>
        ))}
      </div>
      <div className={styles.filterRight} onClick={() => onChangeCount(7)}>
        <Button className={styles.btn}>Отменить</Button>
      </div>
    </div>
  );
};

export default Filter;
