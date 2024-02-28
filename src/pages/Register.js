import{Button, Form } from 'react-bootstrap'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useNavigate,  } from 'react-router-dom'
import {  userRegister } from '../redux/slices/userSlice'

const Register = () => {

  const name=useRef()
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
    <>

    <div className='register mx-auto'>

      <div className='register-form card p-4'>
      {error && <p style={{ color:"red" }}>{error[0].msg}</p> }

        <div className='cardtitle p-2'>
        <h1 className='card-title text-center'>Free Sign Up</h1>
        <p className='parregister text-center text-dark'>Dont' have an account ? Create your <br></br>account , it takes less than a minute</p>
        </div>
        <Form onSubmit={(event)=>{
        event.preventDefault()
        dispatch(userRegister({name:name.current.value , email:email.current.value , password:password.current.value}))    }}>
      <Form.Group  className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control ref={name} type="text" placeholder="Enter your name" />
    
    </Form.Group>
    <Form.Group  className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control ref={email} type="email" placeholder="Enter email" />
   
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control ref={password} type="password"  placeholder="Password" />
    </Form.Group>
   
    <Button variant="primary" type="submit">
     Sign Up
    </Button>
    <br></br>
    <Link to='/login' className='linke'>CLICK HERE TO Login</Link>
  
  </Form>
    </div>
      </div>
      </>
  )
}

export default Register
