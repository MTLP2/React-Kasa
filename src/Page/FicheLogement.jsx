import React, { useState, useEffect } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Slider from '../Component/Slider';
import Tag from '../Component/Tag';
import Rating from '../Component/Rating';
import Dropbox from '../Component/Dropbox';
import Eror from './Eror';


export default function FicheLogement({ data }) {
  let { id } = useParams();
  const [resultData, setResultData] = useState();

  useEffect(() => {
    const foundData = data.find(element => element.id.toString() === id);
    setResultData(foundData)
  }, [id, data]);
    let navigate = useNavigate()

  if (!resultData) {
    return <Eror></Eror>;
     // ou tout autre gestion d'affichage pour un état vide
  }


  return (
    <section className='majorContainer'>

        <Slider pictures={resultData.pictures}/>
      <div className='heroContainer'>
        <div className="subContainerCollumn">
          <h2>{resultData.title}</h2>
          <h3>{resultData.location}</h3>
          <div className='subContainer'>
                <Tag tags={resultData.tags}/>
          </div>
        </div>
        
        <div className="subContainerCollumn">
          <div className='subContainer hostInfo'>
            <h3>{resultData.host.name}</h3>
            <img src={resultData.host.picture} alt="" />
          </div>
          <div className='subContainer'>
            <Rating rate={resultData.rating}/>
          </div>
        </div>
      </div>
      <div className='heroContainer'>
        <Dropbox titleDrop={'Description'} contentDrop={resultData.description}/>  
        <Dropbox titleDrop={'Équipement'} contentDrop={resultData.equipments}/>
      </div>
    </section>
  );
}