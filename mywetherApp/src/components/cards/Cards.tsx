import Card from '../card/Card'
import styles from './Cards.module.scss'

const Cards = () => {
    return (
        <div className={styles.container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Cards