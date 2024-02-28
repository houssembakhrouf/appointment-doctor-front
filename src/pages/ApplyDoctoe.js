import React, { useRef } from 'react'
import Layout from '../components/Layout'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { applydoctor } from '../redux/slices/doctorSlice'
import { useNavigate } from 'react-router-dom'

const ApplyDoctoe = () => {

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
  return (
    <Layout>
      <h1 className='page-title'>Apply Doctor</h1>
      <hr></hr>
      <Form   onSubmit={() => {

        dispatch(applydoctor({
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          phoneNumber: phoneNumber.current.value,
          website: website.current.value,
          address: address.current.value,
          specialization: specialization.current.value,
          experience: experience.current.value,
          feePerConsultation: feePerConsultation.current.value,
          fromTime: fromTime.current.value,
          toTime: toTime.current.value,
        }))
        navigate('/')

      }} >
        <h1 className='card-title mb-5'>Personal Information</h1>
        <Row>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control ref={firstName} type="text" placeholder="Enter your name" />
            </Form.Group>

          </Col>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control ref={lastName} type="text" placeholder="Enter your last name" />
            </Form.Group>

          </Col>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control ref={phoneNumber} type="Number" placeholder="Enter your Number" />
            </Form.Group>

          </Col>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Website</Form.Label>
              <Form.Control ref={website} type="text" placeholder="Enter your website" />
            </Form.Group>

          </Col>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control ref={address} type="text" placeholder="Enter your address" />
            </Form.Group>

          </Col>

        </Row>
        <hr />
        <Row>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>specialization</Form.Label>
              <Form.Control ref={specialization} type="text" placeholder="Enter your speciality" />
            </Form.Group>

          </Col>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Experience</Form.Label>
              <Form.Control ref={experience} type="text" placeholder="Enter your experience" />
            </Form.Group>

          </Col>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Fee per cunsultation</Form.Label>
              <Form.Control ref={feePerConsultation} type="Number" placeholder="Enter your Number" />
            </Form.Group>

          </Col>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>From time</Form.Label>
              <Form.Control ref={fromTime} type="time" placeholder="Enter your Number" ></Form.Control>

            </Form.Group>

          </Col>
          <Col span={8} xs={24} sm={24} lg={4} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>To time</Form.Label>
              <Form.Control ref={toTime} type="time" placeholder="" ></Form.Control>

            </Form.Group>

          </Col>
        </Row>
        <div className='d-flex justify-content-end'>
          <Button className='primary-button w-25' variant="primary" type="submit">
            SUBMIT
          </Button>
        </div>




      </Form>
    </Layout>
  )
}

export default ApplyDoctoe
