import React, { useState } from 'react'
import '../assets/style/style.scss'
import Boximg from '../Component/Boximg'
import CardLogement from '../Component/CardLogement'



export default function Home({data}) {




  return (
    <section className='majorContainer'>
        <Boximg srcImg={'/img/IMG.png'} textBox={'Chez vous, partout et ailleurs'} />
        <div className="contentContainer">
          {data.map((element)=>(
            <CardLogement key={element.id} id={element.id} srcImg={element.cover} titleLogement={element.title}/>
          ))}
        </div>

    </section>
  )
}
