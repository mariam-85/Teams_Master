import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={style.nav_menu}>
        <Link to ='/configurations_page'>Configurations</Link>
        <Link to='/teams_page'>Teams</Link>
    </nav>
  )
}
