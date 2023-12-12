import React from 'react'

export default function Footer({logo}) {
  return (
    <footer className='Footer'>
        <img src={logo} alt="Logo" />
        <h2>© 2020 Kasa. All rights reserved</h2>
    </footer>
  )
}
