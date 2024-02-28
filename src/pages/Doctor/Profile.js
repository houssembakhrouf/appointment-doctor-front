import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoctor, updateDoctor, updateField } from '../../redux/slices/doctorSlice'
const Profile = () => {
    const { doctor, isLoading, error , userId } = useSelector((state) => state.Doctor);
    const firstName = useRef()
    const lastName = useRef()
    const phoneNumber = useRef()
    const website = useRef()
    const address = useRef()
    const specialization = useRef()
    const experience = useRef()
    const feePerConsultation = useRef()
    const fromTime = useRef()
    const toTime = useRef()
  const dispatch = useDispatch()
  const navigate=useNavigate()

const handleFieldChange = (field, value) => {
  dispatch(updateField({ userId, field, value }));
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const updatedData = await dispatch(updateDoctor({ userId, doctor }));
      console.log('Doctor data updated:', updatedData);
  } catch (error) {
      console.error('Error updating doctor data:', error);
  }
};
 
  useEffect(()=>{
    dispatch(getDoctor())
    },[dispatch])
  
  return (
    <Layout>
        <h1 className='page-title'>Doctor Profile</h1>
        <hr>
        </hr>
        <Form   onSubmit={(e)=>{
            e.preventDefault();

          dispatch((updateDoctor({ userId, data:doctor })))
          navigate('/')
        }
        
        
       
        }>
<h1 className='card-title mb-5'>Personal Information</h1>
<Row>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control Value={doctor.firstName}  ref={firstName} onChange={(e) => handleFieldChange('firstName', e.target.value)}

       type="text" placeholder="Enter your name" />
    </Form.Group>

  </Col>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control Value={doctor.lastName} ref={lastName} type="text" placeholder="Enter your last name"       onChange={(e) => handleFieldChange('lastName', e.target.value)}
 />

    </Form.Group>

  </Col>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control  Value={doctor.phoneNumber}  ref={phoneNumber} type="Number" placeholder="Enter your Number"       onChange={(e) => handleFieldChange('phoneNumber', e.target.value)}
 />*

    </Form.Group>

  </Col>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Website</Form.Label>
      <Form.Control   Value={doctor.website} ref={website} type="text" placeholder="Enter your website"       onChange={(e) => handleFieldChange('website', e.target.value)}
 />
    </Form.Group>

  </Col>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Address</Form.Label>
      <Form.Control  Value={doctor.address} ref={address}
      onChange={(e) => handleFieldChange('address', e.target.value)}

      type="text" placeholder="Enter your address" />
    </Form.Group>

  </Col>

</Row>
<hr />
<Row>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>specialization</Form.Label>
      <Form.Control tValue={doctor.specialization} ref={specialization}  type="text" placeholder="Enter your speciality"       onChange={(e) => handleFieldChange('specialization', e.target.value)}
 />
    </Form.Group>

  </Col>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Experience</Form.Label>
      <Form.Control  Value={doctor.experience} ref={experience}  type="text" placeholder="Enter your experience"
                onChange={(e) => handleFieldChange('experience', e.target.value)}
                />
    </Form.Group>

  </Col>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Fee per cunsultation</Form.Label>
      <Form.Control  Value={doctor.feePerConsultation} ref={feePerConsultation} type="Number" placeholder="Enter your Number" 
                onChange={(e) => handleFieldChange('feePerConsultation', e.target.value)}
                />
    </Form.Group>

  </Col>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>From time</Form.Label>
      <Form.Control  Value={doctor.fromTime} ref={fromTime}
        type="time" placeholder="Enter your Number"          onChange={(e) => handleFieldChange('fromTime', e.target.value)}
        >

        </Form.Control>

    </Form.Group>

  </Col>
  <Col span={8} xs={24} sm={24} lg={4} >

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>To time</Form.Label>
      <Form.Control  Value={doctor.toTime} ref={toTime} type="time" placeholder="" onChange={(e) => handleFieldChange('toTime', e.target.value)} >

      </Form.Control>

    </Form.Group>

  </Col>
</Row>
<div className='d-flex justify-content-end'>
  <Button className='primary-button w-25' variant="primary" type="submit">
  {isLoading ? 'Updating...' : 'SUBMIT'}

  </Button>
</div>




</Form>


    </Layout>
  )
}

export default Profile
