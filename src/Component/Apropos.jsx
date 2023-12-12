import React from 'react'
import Boximg from './Boximg'
import Dropbox from './Dropbox'

export default function Apropos() {
  return (
    <div className='majorContainer Apropos'>
      <Boximg srcImg={'/img/Image-source-2.png'}/>
      <div className='aproposInfo'>
        <Dropbox titleDrop={'Fiabilité'}/>
        <Dropbox titleDrop={'Respect'}/>
        <Dropbox titleDrop={'Service'}/>
        <Dropbox titleDrop={'Sécurité'}/>
      </div>
    </div>
  )
}
