import { useState } from "react";

import { WeatherProvider } from "./context/context";

import AppLayout from "./components/AppLayout";
import Modal from "./components/modal/Modal";
import MainPage from "./components/MainPage";

import './theme.scss'

function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <WeatherProvider>
      <AppLayout>
        <MainPage openModal={openModal}/>
      </AppLayout>
      <Modal isOpen={isOpenModal} onClose={closeModal}/>
    </WeatherProvider>
  );
}

export default App;
