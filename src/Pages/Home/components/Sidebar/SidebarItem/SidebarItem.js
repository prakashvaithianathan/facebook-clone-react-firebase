import { Avatar } from '@material-ui/core'
import React from 'react'
import style from './SidebarItem.module.css'


const SidebarItem = ({src,Icon,title}) => {
    return (
        <div className={style.sidebarItem}>
            {src&& <Avatar src={src}/> }
            {Icon && <Icon className={style.icon}/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarItem
