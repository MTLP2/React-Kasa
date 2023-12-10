import React, { useState } from 'react'
import {Routes, Route, useParams, useSearchParams} from "react-router-dom";


export default function FicheLogement({data}) {
  let {id} = useParams()
  const [resultData, setresultData] = useState(data.filter((element)=> element.id == id))


  console.log(resultData);
  return (
    <div>FicheLogement numéro{id}</div>
    )
  }
