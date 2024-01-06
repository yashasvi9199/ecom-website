import React from 'react'
import './User.css'

function User() {
  return (
    <div className="container">
            <div className="card">
                <div className="card2">
                    <form className="signin left">
                        <p id="heading">Register</p>
                        <div className="field">
                            <img />
                            <input placeholder="First Name" className="input-field" type="text" />
                        </div>
                        <div className="field">
                            <img />
                            <input placeholder="Last Name" className="input-field" type="text" />
                        </div>
                        <div className="field">
                            <img />
                            <input placeholder="Username" className="input-field" type="text" />
                        </div>
                        <div className="field">
                            <img />
                            <input placeholder="Email" className="input-field" type="text" />
                        </div>
                        <div className="field">
                            <img />
                            <input placeholder="Password" className="input-field" type="password" />
                        </div>
                        <div className="field">
                            <img />
                            <input placeholder="Confirm Password" className="input-field" type="password" />
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
                        <img src="at.svg" alt="icon" className="input-icon" height="20" width="20" />
                        <input autoComplete="off" placeholder="Username" className="input-field" type="text" />
                    </div>
                    <div className="field">
                        <img src="pass.svg" alt="icon" className="input-icon" height="16" width="16" />
                        <input placeholder="Password" className="input-field" type="password" />
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
