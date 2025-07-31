export interface IHourData {
    name: string,
    temp: string,
    pv?: string,
    amt?: string
}

export interface IModalProps {
    isOpen: boolean
    onClose: () => void
}