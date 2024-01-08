import React from 'react'
import './User.css'
import Register from '../index-pages/Register'
import Login from '../index-pages/Login'

function User() {
  const auth = localStorage.getItem('user')
  console.log(auth)
  return (
    <div className="container">
        <Register />
        <Login />        
    </div>
  )
}

export default User
