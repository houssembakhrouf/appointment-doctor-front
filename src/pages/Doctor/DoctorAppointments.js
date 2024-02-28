import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { Table } from 'antd'
import { changeAppointmentstatus, getAllApppointmensdoctor } from '../../redux/slices/doctorSlice'

const DoctorAppointments = () => {
    const {doctorAppointments}=useSelector(state=>state.Doctor)

    const dispatch=useDispatch()
    const ChangeAppointmentStatus= (record, status) => {
      dispatch(changeAppointmentstatus({ record, status }));
    };
    const columns=[
        {
          title:"Id",
          dataIndex:"_id"
        },
        {
          title:"patient",
          dataIndex:"name",
          render:(text , record)=>(
            
              <p className=''>
                {record.userInfo.name} 
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
        {
          title:"Actions",
          dataIndex:"actions",
          render:(text , record)=>(
            <div className='d-flex px-2'>
              { record.status ==="pending" && 
              <div>
              <h1 className='linke' onClick={()=>(ChangeAppointmentStatus(record , 'approved'))}>Aprove</h1>
               <h1 className='linke'   onClick={()=>(ChangeAppointmentStatus(record , 'rejected'))}>Rejected</h1>
              </div>
              }
            </div>
          )
        },

        
        
      ]
      useEffect(()=>{
        dispatch(getAllApppointmensdoctor())
            },[dispatch])
    
  return (
    <Layout>
    <h1 className='page-header'> Appointments</h1>
    <Table columns={columns} dataSource={doctorAppointments.appointments} />

</Layout>
  )
}

export default DoctorAppointments
