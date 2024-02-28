import React, { useEffect, useRef } from 'react'
import{Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../redux/slices/userSlice'

const Login = () => {
 
  const email=useRef()
  const password=useRef()
  const dispatch=useDispatch()
 const  {isAuth}=useSelector(state=>state.user)
 const  {error}=useSelector(state=>state.user)
 const navigate=useNavigate()

 useEffect(()=>{
if(isAuth){
  navigate('/')
}
 },[isAuth,navigate])
  return (
    <div className='register mx-auto'>
      <div className='register-form card p-4'>
      {error && <p style={{ color:"red" }}>{error}</p> }

        <div className='cardtitle p-2 mb-2' >
        <h1 className='card-title text-center'> Sign In</h1>
        <p className='parregister text-center text-dark'>Enter your email address and password  <br></br>to access admin panel</p> 
        </div>
        <Form onSubmit={(event)=>{
        event.preventDefault()
        dispatch(userLogin({ email:email.current.value , password:password.current.value}))
       
    }}>
     
    <Form.Group  className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control ref={email} type="email" placeholder="Enter email" />
   
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control ref={password} type="password"  placeholder="Password" />
    </Form.Group>
   
   
    <Button className='primary-button' variant="primary" type="submit">
     Sign In
    </Button>
    <br></br>
    <Link to='/register' className='linke'>CLICK HERE TO Register</Link>

  </Form>
    </div>
      </div>
  )
}

export default Login
