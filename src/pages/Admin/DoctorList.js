import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'antd'
import { changedoctorstatus, getDoctorsData } from '../../redux/slices/doctorSlice'

const DoctorList = () => {
  const {doctors}=useSelector(state=>state.Doctor)
  const dispatch=useDispatch()

 
  
  const statusChange = (record, status) => {
    dispatch(changedoctorstatus({ record, status }));
  };

  useEffect(()=>{
   dispatch(getDoctorsData())
  },[dispatch])

  const columns=[
    {
      title:"Name",
      dataIndex:"name",
      render:(text , record)=>(
        
          <p className=''>
            {record.firstName} {record.lastName}
          </p>
        
      )
    },
    
    
    {
      title:"Phone",
      dataIndex:"phoneNumber"
    },
    {
      title:"Created At",
      dataIndex:"createdAt"
    },
    {
      title:"status",
      dataIndex:"status"
    },
    {
      title:"Actions",
      dataIndex:"actions",
      render:(text , record)=>(
        <div className='d-flex'>
          { record.status ==="pending" && <h1 className='linke' onClick={()=>(statusChange(record , 'approved'))}>Aprove</h1>}
          { record.status ==="approved" && <h1 className='linke'   onClick={()=>(statusChange(record , 'blocked'))}>Block</h1>}
        </div>
      )
    },
  ]

  return (
    <Layout>
    <h1 className='page-title'>Doctors List </h1>
   
    <Table columns={columns} dataSource={doctors.Doctors}  />


    </Layout>
      
    
  )
}

export default  DoctorList

