import type { IDictionary } from "../components/thisDayInfo/types";

export const dictionary: IDictionary = {
    ru: {
        'clear': 'Ясно',
        'partly cloudy': 'Переменная облачность',
        'sunny': 'Coлнечно',
        'overcast': 'Пасмурно',
        'cloudy': 'Облачно',
        'light rain shower': 'Летний тропический дождь',
        'light rain': 'Легкий дождь',
        'patchy light rain in area with thunder': 'Местами небольшой дождь с грозой',
        'patchy light rain with thunder': 'Местами небольшой дождь с громом',
        'thundery outbreaks in nearby': 'Грозовые вспышки в близлежащих районах',
        'moderate or heavy rain shower': 'Умеренный или сильный ливень',
        'moderate or heavy rain with thunder': 'Умеренный или сильный ливень c грозой',
        'patchy light drizzle': 'Местами моросящий дождь',
        'patchy rain nearby': 'Неподалеку проливной дождь',
        'moderate rain': 'Умеренный дождь',
        'heavy rain': 'Сильный дождь',
        'light drizzle': 'Небольшой моросящий дождь'
    }
}

export const translate = (
        text: string,
        dictionary: IDictionary,
        lang: string
    ): string => {
        const translation = dictionary[lang][text.toLowerCase().trim()];
        return translation ? translation : 'Перевод не найден'
    }