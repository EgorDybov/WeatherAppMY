import { useState } from 'react'

import { WeatherProvider } from './context/context'

import Filter from './components/filter/Filter'
import Cards from './components/cards/Cards'
import Header from './components/header/Header'
import ThisDay from './components/thisDay/ThisDay'
import ThisDayInfo from './components/thisDayInfo/ThisDayInfo'
import Modal from './components/modal/Modal'
import SkeletonCard from './components/skeletonCard/SkeletonCard'

import styles from './App.module.scss'
import './index.css'



function App() {

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)
  

  return (
    <WeatherProvider>
        <div className={styles.container}>
          <Header/>
          <div className={styles.dayInfo}>
            <ThisDay/>
            <ThisDayInfo/>
          </div>
          <Filter/>
          <Cards openModal={openModal}/>
        </div>
        <Modal isOpen={isOpenModal} onClose={closeModal}/>
        {/* <SkeletonCard/> */}
    </WeatherProvider>
  )
}

export default App
