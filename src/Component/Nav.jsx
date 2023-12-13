import React from 'react'
import '../assets/style/style.scss'
import { Link } from 'react-router-dom'

export default function Nav({logo}) {
  return (
    <nav>
        <Link to={"/"}><img src={logo} alt="" /> </Link>
        <ul>
            <li><Link className='Link' to="/">ACCUEIL</Link></li>
            <li><Link className='Link' to="/Apropos">A PROPOS</Link></li>
        </ul>
    </nav>
  )
}
