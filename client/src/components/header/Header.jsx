import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return(
        <>
            <ul className='left'>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
            <ul className='right'>
                <li><Link to='/logout'>Logout</Link></li>
                <li><Link to='/user'>Signin / Signup</Link></li>
            </ul>
        </>
    )
}

export default Header