import { createContext, useEffect, useState } from "react"

import axios from "axios";

import type { IWeather, IWeatherContext } from "./types"

import { getWeekWeather } from "../api/apiPoint";

export const WeatherContext = createContext<IWeatherContext | null>(null)

export const WeatherProvider = ({children}: React.PropsWithChildren) => {
    const [city, setCity] = useState('Moscow');
    const [weather, setWeather] = useState<IWeather | null>(null);
    const [day, setDay] = useState(null);
    const [date, setDate] = useState(null) 

    useEffect(() => {
        const url = getWeekWeather(city);

        axios.get(url)
            .then(responce => {
                setWeather(responce.data)
            })
            .catch(error => console.log(error))
    }, [city])
    
    return (
        <WeatherContext.Provider value={{weather, city, setCity, day, setDay, date, setDate}}>
            {children}
        </WeatherContext.Provider>
    )
}