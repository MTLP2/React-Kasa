import React from 'react'
import { Link } from 'react-router-dom'
import Apropos from './Apropos'

export default function CardLogement({id, srcImg, titleLogement}) { 
  
  return (
    <Link className='Link'  to={`/Fiche-Logement/${id}`}>
      <div className='cardLogement'>

          <img src={srcImg} alt="" />
          <h2>{titleLogement}</h2>
      </div>
    </Link>
  )
}
