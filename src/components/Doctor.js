import React from 'react'
import { useNavigate } from 'react-router-dom'

const Doctor = ({doctor}) => {
  const navigate=useNavigate()
  return (
    <div className='card p-2 cursor-pointer' onClick={()=>{navigate(`/book-appointment/${doctor._id}`)}} >
      <h1 className='card-title'>{doctor.firstName} {doctor.lastName}</h1>
      <hr />
      <p className='card-text'><b>Phon Number : </b> {doctor.phoneNumber}</p>
      <p className='card-text'><b>address: </b> {doctor.address} </p>
      <p className='card-text'><b>fee per Visit: </b> {doctor.feePerConsultation} </p>
      <p className='card-text'><b>timings </b> {doctor.fromTime} - {doctor.toTime} </p>
    </div>
  )
}

export default Doctor
