import { createContext, useEffect, useState } from "react"
import type { IWeather, IWeatherContext } from "./types"
import { getCityUrl, getWeatherDaily } from "../api/apiPoint";
import axios from "axios";

export const WeatherContext = createContext<IWeatherContext | null>(null)

export const WeatherProvider= ({children}: React.PropsWithChildren) => {
    const [city, setCity] = useState<string>('Moscow');
    const [weather, setWeather] = useState<IWeather | null>(null);

    useEffect(() => {
      const url = getCityUrl(city);
        axios.get(url)
            .then(responce => {
                setWeather(responce.data);
            })
            .catch(error => console.log(error));
            
    }, [city])

    return (
        <WeatherContext.Provider value={{weather, city, setCity}}>
            {children}
        </WeatherContext.Provider>
    )
}