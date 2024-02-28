import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { getdoctosapproved } from '../redux/slices/userSlice'
import { Row,Col } from 'react-bootstrap'
import Doctor from '../components/Doctor'

const Home = () => {
  const { isAuth , doctorsapproved  } = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch=useDispatch()
  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })
  useEffect(()=>{
    dispatch(getdoctosapproved())

  },[])
  return( <Layout>
   <Row>
    {
      (Array.isArray(doctorsapproved)) ?
        doctorsapproved.map((doctor) => (
          <Col span={8} xs={24} sm={24} lg={4} >
          <Doctor  doctor={doctor} />
          </Col>
        ))
       :
        // Handle the case where doctorsapproved is not an array
        console.error('doctorsapproved is not an array')
      }
    
     
   </Row>

  </Layout>
  );
}

export default Home
