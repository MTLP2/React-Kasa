import React from 'react'
import '../assets/style/style.scss'
import { Link } from 'react-router-dom'

export default function Nav({logo}) {
  return (
    <nav>
        <img src={logo} alt="" />
        <ul>
            <li><Link className='Link' to="/">Accueil</Link></li>
            <li><Link className='Link' to="/Apropos">A propos</Link></li>
        </ul>
    </nav>
  )
}
