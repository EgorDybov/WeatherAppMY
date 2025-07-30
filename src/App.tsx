import Filter from './components/filter/Filter'
import Cards from './components/cards/Cards'
import Header from './components/header/Header'
import ThisDay from './components/thisDay/ThisDay'
import styles from './App.module.scss'
import ThisDayInfo from './components/thisDayInfo/ThisDayInfo'
import { WeatherProvider } from './context/context'
import Modal from './components/modal/Modal'
import SkeletonCard from './components/skeletonCard/SkeletonCard'




function App() {

  return (
    <WeatherProvider>
        <div className={styles.container}>
          <Header/>
          <div className={styles.dayInfo}>
            <ThisDay/>
            <ThisDayInfo/>
          </div>
          <Filter/>
          <Cards/>
        </div>
        <Modal/>
        <SkeletonCard/>
    </WeatherProvider>
  )
}

export default App
