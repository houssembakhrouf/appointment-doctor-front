import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUser, logout } from '../redux/slices/userSlice'
import { Badge } from 'react-bootstrap'
const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const [collapsed, setcollapsed] = useState(false)
    const location = useLocation()
    const { User } = useSelector(state => state.user)

    const userMenu = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-3-fill'
        },
        {
            name: 'Appointments',
            path: '/appointments',
            icon: 'ri-file-list-fill'
        }, {
            name: 'Apply Doctor',
            path: '/Apply-Doctor',
            icon: 'ri-hospital-fill'
        },
        
    ]

    const doctorMenu = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-3-fill'
        },
        {
            name: 'Appointments',
            path: '/doctor/appointments',
            icon: 'ri-file-list-fill'
        }, 
        {
            name: 'Profile',
            path: `/doctor/profile/${User._id}`,
            icon: 'ri-file-user-fill'
        }
    ]


    const AdminMenu = [
        {
            name: 'Home',
            path: '/',
            icon: 'ri-home-3-fill'
        },
        {
            name: 'Users',
            path: '/admin/userslist',
            icon: 'ri-file-user-fill'
        }, {
            name: ' Doctors',
            path: '/admin/doctorslist',
            icon: 'ri-nurse-fill'
        },
        
    ]

    useEffect(() => {

        dispatch(getUser())

    }, [dispatch])
    const menuToberendred = User.isAdmin ? AdminMenu : User.isDoctor? doctorMenu : userMenu ;
    const role = User.isAdmin ? "Admin" : User.isDoctor ? "Doctor" : "User" ;
    const navigate = useNavigate()

    return (
        <div>
            <div className='main'>
                <div className='d-flex layout '>
                    <div className='sidebar'>
                        <div className='sidebar-header'>
                            <h1 className='logo'>SH</h1>
                            <h1 className='role'>{role}</h1>
                        </div>
                        <div className='menu'>
                            {menuToberendred.map((menu) => {
                                const isActive = location.pathname === menu.path
                                return <div className={`d-flex  menu-item ${isActive && `active-menu-item`} `}>
                                    <i className={menu.icon}></i>
                                    
                                    {!collapsed &&  <Link  to={menu.path}>{menu.name}</Link>
                                     }
                                </div>
                            })}

                            <div className='d-flex  menu-item' onClick={() => { dispatch(logout()) }} >
                                <i className='ri-logout-box-fill'></i>
                                {!collapsed && <Link to='/login'>Logout</Link>
                                }
                            </div>

                        </div>

                    </div>
                    <div className='content'>
                        <div className='header' >
                            {collapsed ?
                                <i className="ri-menu-2-line header-action-icon " onClick={() => { setcollapsed(false) }} ></i>
                                :
                                <i className="ri-close-line header-action-icon" onClick={() => { setcollapsed(true) }} ></i>

                            }
                            <div className='d-flex align-items-center px-4'  >

                                <i className="ri-notification-line header-action-icon position-relative mx-3" onClick={()=>{navigate('/notifications')}} >
                                    {User && User?.unseenNotification && (
                                        <span className="position-absolute h-75 translate-middle top-0 start-100 badge rounded-pill bg-danger p-2 bg-danger border border-li">
                                            {(User?.unseenNotification.length>0) ?User?.unseenNotification.length : null }
                                        </span>
                                    )}
                                </i>

                                <Link className='linke mx-3' to='/profile' >{User?.name}</Link>

                            </div>

                        </div>
                        <div className='body'>
                            {children}

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Layout
