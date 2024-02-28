import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import { Table } from 'antd'
import { getAllApppointmens } from '../redux/slices/userSlice'




const Appointment = () => {
const {userAppointments}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const columns=[
        {
          title:"Id",
          dataIndex:"_id"
        },
        {
          title:"Name",
          dataIndex:"name",
          render:(text , record)=>(
            
              <p className=''>
                {record.doctorInfo.firstName} {record.doctorInfo.lastName}
              </p>
            
          )
        },
        
        
        {
          title:"Phone",
          dataIndex:"phoneNumber",
          render:(text , record)=>(
            
            <p className=''>
              {record.doctorInfo.phoneNumber} 
            </p>
          
        )
        },
        {
          title:"Date & Time",
          dataIndex:"createdAt",
          render:(text , record)=>(
            
            <p className=''>
              {record.date} : {record.fromtime} - {record.totime}
            </p>
          
        )
        },
        {
          title:"status",
          dataIndex:"status"
        },
        
      ]
    useEffect(()=>{
dispatch(getAllApppointmens())
    },[dispatch])
  return (
    <Layout>
        <h1 className='page-header'> Appointments</h1>
        <Table columns={columns} dataSource={userAppointments.appointments} />

    </Layout>
  )
}

export default Appointment
