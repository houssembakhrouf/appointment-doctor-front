import React from 'react'
import Layout from '../components/Layout'
import {Tabs} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletnotificationseen, markAllseen } from '../redux/slices/userSlice';


const Notifications = () => {

    const TabPane = Tabs.TabPane;
    const {User}=useSelector((state)=>state.user)
    const navigate=useNavigate();
    const dispatch=useDispatch()
  return (
    <Layout>
        <h1 className='page-title'>Notfications :</h1>
        <Tabs defaultActiveKey="0" >
    <TabPane tab="Unseen" key="0">
        <div className='d-flex justify-content-end' onClick={()=>{dispatch(markAllseen())}}>
            <h1 className='linke' >Mark all as seen</h1>
           
        </div>
       
        {Array.isArray(User.unseenNotification) && User.unseenNotification.map(el => (
            <div className='cardnot card p-1 mt-2' onClick={()=>navigate(el.onclickPath) }>
                <div className='card-text' >{el.message}</div>
            </div>
        ))
        }


     

    </TabPane>
    
    <TabPane tab="Seen" key="1"  > 
    <div className='d-flex justify-content-end'  onClick={()=>{dispatch(deletnotificationseen())}} >
            <h1 className='linke'>Delete all</h1>
        </div>
        {Array.isArray(User.seenNotification) && User.seenNotification.map(el => (
            <div className='cardnot card p-1 mt-2' onClick={()=>navigate(el.onclickPath) }>
                <div className='card-text' >{el.message}</div>
            </div>
        ))
        }
    </TabPane>
  </Tabs>

   
 

    </Layout>
  )
}

export default Notifications
