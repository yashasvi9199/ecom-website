import React from 'react'
import './User.css'
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
            <div className="card">
                <div className="card2">
                    <form className="signin left">
                        <p id="heading">Register</p>
                        <div className="field">
                            <img src={name_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <input placeholder="Full Name" className="input-field" type="text" />
                        </div>
                        <div className="field">
                            <img src={user_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <input placeholder="Username" className="input-field" type="text" />
                        </div>
                        <div className="field">
                            <img src={email_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <input placeholder="Email" className="input-field" type="text" />
                        </div>
                        <div className="field">
                            <img src={lock_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <img src={unlock_icon} alt="icon" className="input-icon" height="16" width="16" hidden/>
                            <input placeholder="Password" className="input-field" type="password" />
                            <img src={show_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <img src={hide_icon} alt="icon" className="input-icon" height="16" width="16" hidden/>
                            
                        </div>
                        <div className="field">
                            <img src={lock_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <img src={unlock_icon} alt="icon" className="input-icon" height="16" width="16" hidden/>
                            <input placeholder="Confirm Password" className="input-field" type="password" />
                            <img src={show_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <img src={hide_icon} alt="icon" className="input-icon" height="16" width="16" hidden/>
                        </div>
                        <div className="btn">
                            <button className="button1">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="button3">Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </form>
                </div>
            </div>
            

        <div className="card">
            <div className="card2">

                <form className="login right">
                    <p id="heading">Login</p>
                    <div className="field">
                        <img src={user_icon} alt="icon" className="input-icon" height="20" width="20" />
                        <input autoComplete="off" placeholder="Username/ Email" className="input-field" type="text" />
                    </div>
                    <div className="field">
                        <img src={lock_icon} alt="icon" className="input-icon" height="16" width="16" />
                        <img src={unlock_icon} alt="icon" className="input-icon" height="16" width="16" hidden/>
                        <input placeholder="Password" className="input-field" type="password" />
                        <img src={show_icon} alt="icon" className="input-icon" height="16" width="16" />
                        <img src={hide_icon} alt="icon" className="input-icon" height="16" width="16" hidden/>
                    </div>
                    <div className="btn">
                        <button className="button1">Login</button>
                    </div>
                    <button className="button3">Forgot Password</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User
