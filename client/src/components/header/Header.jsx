import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Nav = () => {
    return(
        <>
            <ul>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
            </ul>
        </>
    )
}

export default Nav