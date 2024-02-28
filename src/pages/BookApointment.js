import Layout from '../components/Layout';
import React, { useEffect, useRef, useState } from 'react';
import { getDoctorbydoctorId } from '../redux/slices/doctorSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { addappointmentdoctor } from '../redux/slices/userSlice';

const BookAppointment = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { doctor } = useSelector(state => state.Doctor);
  const { User } = useSelector(state => state.user);
  const date= useRef()
  const fromtime= useRef()
  const totime= useRef()

  const navigate=useNavigate()
  
  useEffect(() => {
    dispatch(getDoctorbydoctorId());
  }, [dispatch]);
  console.log("Doctor:", doctor);
  console.log("User:", User);
  return (
    <Layout>
      {doctor && (
        <div>
          <h1 className='page-title'>
            {doctor.firstName} {doctor.lastName}
          </h1>
          <hr />
          <div className='d-flex flex-column'>
            <Form onSubmit={(e)=>{
              e.preventDefault()
 

              dispatch(addappointmentdoctor({
                doctorId: doctor.id, // replace with the actual property that stores the doctorId
                userId: User._id, 
                doctorInfo:doctor,
                userInfo:User,// replace with the actual property that stores the userId
                
                  date: date.current.value,
                  fromtime: fromtime.current.value,
                  totime: totime.current.value
                
              }));

             navigate('/appointments')
            }}>
              <h1 className='normal-text'><b>Timings :</b>{doctor.fromTime} - {doctor.toTime}</h1>
              <Row >
              <Col span={24} xs={24} sm={24} lg={24} >
               <p className='mb-3'>
 <p className='card-text'><b>Phon Number : </b> {doctor.phoneNumber}</p>
 <p className='card-text'><b>address: </b> {doctor.address} </p>
 <p className='card-text'><b>fee per Visit: </b> {doctor.feePerConsultation} </p>
 </p> 
               </Col>
                <Col span={4} xs={24} sm={24} lg={2}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date</Form.Label>
                    <Form.Control ref={date} type="date" />
                  </Form.Group>
                </Col>
                <Col span={4} xs={24} sm={24} lg={2}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>From time</Form.Label>
                    <Form.Control ref={fromtime} type="time"  />
                  </Form.Group>
                </Col>
                <Col span={8} xs={24} sm={24} lg={2}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>To time</Form.Label>
                    <Form.Control ref={totime} type="time" />
                  </Form.Group>
                </Col>
               
                
               
              </Row>
              <Row>
              <Col span={12} xs={24} sm={24} lg={2}>
                <Button className='primary-button ' variant="primary" type="submit">
Book Now              </Button>
                </Col>
                <Col span={24} xs={24} sm={24} lg={2}>
                  <img className='w-100 h-100' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkd1fN8aiakUf2PhPO_hQpzyABPla8G_9fhA&usqp=CAU' />
                </Col>
                </Row>
            </Form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default BookAppointment;
