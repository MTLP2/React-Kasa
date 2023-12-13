import React from 'react'
import { Link } from 'react-router-dom'


export default function Eror() {
  return (
    <div className='principalContainer ErorPage'>
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas.</h2>
      <Link className='Linkeror'>Retourner sur la page d'accueil</Link>
    </div>
  )
}
