import { Select, type SelectProps } from "antd";

import { GlovalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'

import styles from './Header.module.scss'
import { useMemo } from "react";
import { api } from "../../api/city";


const Header = () => {

    const options: SelectProps['options'] = useMemo(() => {
        return api.map((city) => {
            return (
                {
                    key: city.id,
                    value: city.name,
                    label: city.name
                }
            )
        })
    }, [])
    
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <GlovalSvgSelector id='logo'/>
                <a className={styles.headerNameLogo}>wheather app</a>
            </div>
            <div className={styles.headerRight}>
                <GlovalSvgSelector id='theme'/>
                <Select 
                    className={styles.headerSelect} 
                    options={options}
                    placeholder={'Выберите город'}
                />
                    
                    
            </div>
        </header>
    )
}

export default Header