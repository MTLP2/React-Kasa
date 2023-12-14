import React from 'react'
import '../assets/style/style.scss'
import { Link, NavLink } from 'react-router-dom'

export default function Nav({logo}) {
  return (
    <nav>
        <Link to={"/"}><img src={logo} alt="" /> </Link>
        <ul>
            <li><NavLink className={({isActive, isPending}) => isActive ? "linkactive" : isPending ? "Link" : "Link"} to="/">ACCUEIL</NavLink></li>
            <li><NavLink className={({isActive, isPending}) => isActive ? "linkactive" : isPending ? "Link" : "Link"} to="/Apropos">A PROPOS</NavLink></li>

        </ul>
    </nav>
  )
}
