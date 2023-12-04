import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <img src="../public/img/LOGO.png" alt="" />
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Apropos">A propos</Link></li>
        </ul>
    </nav>
  )
}
