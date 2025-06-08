import Card from '../card/Card'
import styles from './Cards.module.scss'

const Cards = () => {
    return (
        <div className={styles.container}>
            <Card day='Пн'/>
            <Card day='Вт'/>
            <Card day='Ср'/>
            <Card day='Чт'/>
            <Card day='Пт'/>
            <Card day='Сб'/>
            <Card day='Вс'/>
        </div>
    )
}

export default Cards