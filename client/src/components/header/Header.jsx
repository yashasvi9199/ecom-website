import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user")
        navigate('/user')
    }
    return(
        <>
            <ul className='left'>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
            <ul className='right'>
                {auth !== null
                ? <li><Link onClick={logout} to='/user'>Logout</Link></li>
                : <li><Link to='/user'>Signin / Signup</Link></li>
                }
            </ul>
        </>
    )
}

export default Header