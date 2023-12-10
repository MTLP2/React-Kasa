import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from './slider';

export default function FicheLogement({ data }) {
  let { id } = useParams();
  const [resultData, setResultData] = useState();

  useEffect(() => {
    const foundData = data.find(element => element.id.toString() === id);
    setResultData(foundData);
    console.log(foundData);
  }, [id, data]);

  if (!resultData) {
    return <div>Chargement...</div>; // ou tout autre gestion d'affichage pour un état vide
  }

  return (
    <section>
        <Slider pictures={resultData.pictures}/>
      <div className='heroContainer'>
        <div className="subContainerCollumn">
          <h2>{resultData.title}</h2>
          <h3>{resultData.location}</h3>
        </div>
        <div className='subContainer'>
          <h3>{resultData.host.name}</h3>
          <img src={resultData.host.picture} alt="" />
        </div>
      </div>
    </section>
  );
}