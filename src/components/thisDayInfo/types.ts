interface ITranslation {
    [key: string]: string
}


export interface IDictionary {
    [langCode: string]: ITranslation
}