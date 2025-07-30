import { Skeleton } from "antd"

import styles from './SkeletonCard.module.scss'

const SkeletonCard = () => {
    return (
        <div className={styles.card}>
            <Skeleton/>
        </div>
    )
}

export default SkeletonCard