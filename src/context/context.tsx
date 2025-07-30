import { createContext, useEffect, useState } from "react"
import type { IWeather, IWeatherContext } from "./types"
import { getWeekWeather } from "../api/apiPoint";
import axios from "axios";

export const WeatherContext = createContext<IWeatherContext | null>(null)

export const WeatherProvider= ({children}: React.PropsWithChildren) => {
    const [city, setCity] = useState<string>('Moscow');
    const [weather, setWeather] = useState<IWeather | null>(null);
    const [day, setDay] = useState(null);

    // useEffect(() => {
    //   const url = getCityUrl(city);
    //     axios.get(url)
    //         .then(responce => {
    //             setWeather(responce.data);
    //         })
    //         .catch(error => console.log(error));
            
    // }, [city])

    useEffect(() => {
        const url = getWeekWeather(city);

        // isLoading(false)

        axios.get(url)
            .then(responce => {
                setWeather(responce.data)
            })
            .catch(error => console.log(error))
            // .finally(() => {
            //     setLoading(true)
            // })
    }, [city]) //isLoading

    return (
        <WeatherContext.Provider value={{weather, city, setCity, day, setDay}}>
            {children}
        </WeatherContext.Provider>
    )
}