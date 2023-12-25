import React, { useState } from 'react'
import Boximg from './Boximg'
import Dropbox from './Dropbox'
import Info from '../assets/Info.json'

export default function Apropos() {
  const [info, setInfo] = useState(Info)


  return (
    <div className='majorContainer Apropos'>
      <Boximg srcImg={'/img/Image-source-2.png'}/>
      <div className='aproposInfo'>
        <Dropbox titleDrop={'Fiabilité'} contentDrop={info.Fiabilite}/>
        <Dropbox titleDrop={'Respect'} contentDrop={info.Respect}/>
        <Dropbox titleDrop={'Service'} contentDrop={info.Service}/>
        <Dropbox titleDrop={'Sécurité'} contentDrop={info.Sécurité}/>
        
      </div>
    </div>
  )
}
