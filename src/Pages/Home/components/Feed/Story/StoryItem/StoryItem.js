import React from 'react'
import style from './StoryItem.module.css'
import {Avatar} from '@material-ui/core'

const StoryItem = ({image,title,logo}) => {
    return (
        <div className={style.story} style={{backgroundImage:`url(${image})`}}>
           <Avatar src={logo} className={style.avatar}></Avatar>
           <h4>{title}</h4>
        </div>
    )
}

export default StoryItem
