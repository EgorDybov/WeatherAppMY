const API_KEY = import.meta.env.VITE_API_KEY;

export const getWeekWeather = (city: string, days: number = 7) => {
    return `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=yes&alerts=no`
}


