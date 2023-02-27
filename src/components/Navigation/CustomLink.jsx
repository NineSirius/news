import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export const CustomLink = ({ children, to, icon }) => {
    return (
        <NavLink to={to} className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>
            {icon && icon}
            <span>{children}</span>
        </NavLink>
    )
}
