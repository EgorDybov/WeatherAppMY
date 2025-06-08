const API_KEY = '939017b35bb26f3b787e06444d74cead';
const DAILY_KEY = 'f8b6f3cbd385c25329bc46dd61f95d72'
const API_POINT = 'https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}';


export const getCityUrl = (city: string) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru`;
}

export const getWeatherDaily = (city: string) => {
    return `https://api.openweathermap.org/data/3.0/onecall?q=${city}&exclude=daily&appid=${API_KEY}`;
}

