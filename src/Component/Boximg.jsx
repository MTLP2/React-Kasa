import React from 'react'

export default function Boximg({srcImg, textBox}) {
  return (
    <div className="boxImage">
        <img src={srcImg} alt="Image de présentation" />
        <h2>{textBox}</h2>
    </div>
  )
}
