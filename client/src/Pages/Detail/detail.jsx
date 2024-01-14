import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detail.scss'

const Detail = () => {
  const [detail,setDetail]=useState()
  const {id}=useParams()
  const fetchDetail=async()=>{
    const res=await fetch(`http://localhost:3000/names/${id}`)
    const json=await res.json()
    setDetail(json)
  }
  useEffect(()=>{
    fetchDetail()
  },[])
  return (
    <>
  <div className="detailArea">
    {
      detail ? <>
      <div className="detailCard">
        <img src={detail.image} alt="" />
        <h1>{detail.title}</h1>
        <h2>{detail.price}</h2>
      </div>
      </>:''
    }
  </div>
    </>
  )
}

export default Detail