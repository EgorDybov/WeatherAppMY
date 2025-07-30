// interface IMain {
//     feels_like: number
//     grnd_level: number
//     humidity: number
//     pressure: number
//     sea_level:number
//     temp: number
//     temp_max: number
//     temp_min: number
// }

// interface IWeatherDesc {
//     description: string
//     icon: string
//     id: number
//     main: string
// }

// interface IWind {
//     deg: number
//     speed: number
// }

// interface ISys {
//     country: string
//     id: number
//     sunrise: number
//     sunset: number
//     type: number
// }

// interface ICoord {
//     lat: number
//     lon: number
// }

// export interface IWeather {
//     base: string
//     clouds: {
//         all: number
//     }
//     cod: number
//     coord: ICoord
//     dt: number
//     id: number
//     main: IMain
//     name: string
//     sys: ISys
//     timezone: number
//     visibility: number
//     weather: IWeatherDesc[]
//     wind: IWind
// }

export interface IWeatherContext {
    weather: IWeather | null;
    city: string
    setCity: (v: any) => void
    day: any,
    setDay: (v: any) => void
}

export interface IWeather {
    current: any
    forecast: any
    location: any
}
