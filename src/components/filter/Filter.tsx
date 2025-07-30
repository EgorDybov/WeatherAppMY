import { Button } from "antd"

import styles from './Filter.module.scss'

const Filter = () => {
    return ( 
        <div className={styles.filter}>
            <div className={styles.filterLeft}>
                <Button className={styles.btn}>На неделю</Button>
                <Button className={styles.btn}>На 10 дней</Button>
                <Button className={styles.btn}>На 14 дней</Button>
            </div>
            <div className={styles.filterRight}>
                <Button className={styles.btn}>Отменить</Button>
            </div>
        </div>
    )
}

export default Filter