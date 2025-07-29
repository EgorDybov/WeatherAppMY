interface IDayInfo {
    avghumidity: number
    avgtemp_c: number
    avgtemp_f: number
    avgvis_km: number
    avgvis_miles: number
    condition: ICondition
    daily_chance_of_rain: number
    daily_chance_of_snow: number
    daily_will_it_rain: number
    daily_will_it_snow: number
    maxtemp_c: number
    maxtemp_f: number
    maxwind_kph: number
    maxwind_mph: number
    mintemp_c: number
    mintemp_f: number
    totalprecip_in: number
    totalprecip_mm: number
    totalsnow_cm: number
    uv: number
}

// interface ICondition {
//     text: string
//     icon: string
//     code: number
// }

// interface IForecastDay {
//     astro
// : 
// {sunrise: '04:22 AM', sunset: '08:49 PM', moonrise: '04:27 AM', moonset: '09:30 PM', moon_phase: 'Waxing Crescent', …}
// date
// : 
// "2025-07-25"
// date_epoch
// : 
// 1753401600
// day
// : 
// {maxtemp_c: 28.4, maxtemp_f: 83.2, mintemp_c: 18, mintemp_f: 64.3, avgtemp_c: 22.7, …}
// hour
// : 
// (24
// }