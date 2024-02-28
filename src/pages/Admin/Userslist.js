import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersData } from '../../redux/slices/userSlice'
import { Table } from 'antd'

const Userslist = () => {
  const {users}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(getUsersData())
  },[])

  const columns=[
    {
      title:"Name",
      dataIndex:"name"
    },
    {
      title:"Email",
      dataIndex:"email"
    },
    {
      title:"Created At",
      dataIndex:"createdAt"
    },{
      title:"Actions",
      dataIndex:"actions",
      render:(text , record)=>(
        <div className='d-flex'>
          <h1 className='linke'>Block</h1>
        </div>
      )
    },
  ]
  return (
    <Layout>
    <h1 className='page-title'>Users List </h1>
   
    <Table columns={columns} dataSource={users.Users}  />


    </Layout>
      
    
  )
}

export default Userslist
