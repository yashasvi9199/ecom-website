import React from 'react'
import './User.css'
import Register from './Register'
import Login from './Login'
// Icon import
import name_icon from '../assets/svg icons/name.svg'
import user_icon from '../assets/svg icons/user.svg'
import email_icon from '../assets/svg icons/at.svg'
import lock_icon from '../assets/svg icons/lock.svg'
import unlock_icon from '../assets/svg icons/unlock.svg'
import show_icon from '../assets/svg icons/showpwd.svg'
import hide_icon from '../assets/svg icons/hidepwd.svg'


function User() {
  return (
    <div className="container">
        <Register />
        <Login />        
    </div>
  )
}

export default User
