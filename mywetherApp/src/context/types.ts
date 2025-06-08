export interface IWeather {

}

export interface IWeatherContext {
    weather: IWeather | null;
    setWeather: (v: any) => void
}