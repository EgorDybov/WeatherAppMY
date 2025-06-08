import { createContext, useState } from "react"
import type { IWeatherContext } from "./types"

export const WeatherContext = createContext<IWeatherContext>({
    weather: null,
    setWeather: () => {}
})

export const WeatherProvider= ({children}: React.PropsWithChildren) => {

    const [weather, setWeather] = useState(null)


    return (
        <WeatherContext.Provider value={{weather, setWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}