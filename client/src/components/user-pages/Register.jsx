import React,{useEffect, useState} from 'react'
import name_icon from '../assets/svg icons/name.svg'
import user_icon from '../assets/svg icons/user.svg'
import email_icon from '../assets/svg icons/at.svg'
import lock_icon from '../assets/svg icons/lock.svg'
import unlock_icon from '../assets/svg icons/unlock.svg'
import show_icon from '../assets/svg icons/showpwd.svg'
import hide_icon from '../assets/svg icons/hidepwd.svg'
import tooltip from '../assets/svg icons/tip.svg'

function Register() {

    const [name,setName] = useState("")
    const [userId,setUserId] = useState("")
    const [email,setEmail] = useState("")
    const [pwd,setPwd] = useState("")
    const [confPwd,setConfPwd] = useState("")
    const [isDisabled,setIsDisabled] = useState(true)
    const [pwdVisibility, setPwdVisibility] = useState(false)
    const [confPwdVisibility, setConfPwdVisibility] = useState(false)

    //Icons visibility : main password
    const pwdVisible = () => {
        setPwdVisibility(!pwdVisibility)
    }
    //Icons visibility : confirm password
    const confPwdVisible = () => {
        setConfPwdVisibility(!confPwdVisibility)
    }
    // disables button as long as all fields are not filled
    //function triggered by onChange (for useEffect to re-run)
    const handleDisable = () => {
        setIsDisabled(name === "" || userId === "" || email === "" || pwd === "" || confPwd === "" || pwd !== confPwd)
    }
    useEffect(() => {
        handleDisable()
    }, [name, userId, email, pwd, confPwd])     //the useEffect will re-run upon receiving any change in these parameters

    const reset =() => {
        setName("")
        setUserId("")
        setEmail("")
        setPwd("")
        setConfPwd("")
    }

    const signup =(e) => {
            let data = {
                "name": name,
                "id": userId,
                "email" : email,
                "pwd" : pwd
            }
            console.log(data)
            reset()
            e.preventDefault();     //temporarily preventing page from reloading
    }

    // console.log('Current status :=',pwdVisibility)
  return (
    <>
      <div className="card">
                <div className="card2">
                    <form className="signin left">
                        <p id="heading">Register</p>
                        <div className="field">
                            <img src={name_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <input placeholder="Full Name" className="input-field" type="text" id='name' autoComplete='false'
                                value={name} onChange={(e) => {setName(e.target.value); handleDisable()}} />
                        </div>
                        <div className="field">
                            <img src={user_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <input placeholder="Username" className="input-field" type="text" id='userId' autoComplete='false'
                                value={userId} onChange={(e) => {setUserId(e.target.value); handleDisable()}} />
                        </div>
                        <div className="field">
                            <img src={email_icon} alt="icon" className="input-icon" height="16" width="16" />
                            <input placeholder="Email" className="input-field" type="text" id='email' autoComplete='false'
                                value={email} onChange={(e) => {setEmail(e.target.value); handleDisable()}} />
                        </div>
                        <div className="field">
                            <img src={lock_icon} alt="icon" className="input-icon" height="16" width="16" hidden={pwdVisibility} />
                            <img src={unlock_icon} alt="icon" className="input-icon" height="16" width="16" hidden={!pwdVisibility} />

                            <input placeholder="Password" className="input-field" type={pwdVisibility ? 'text' : 'password'} id='pwd' autoComplete='false' 
                                value={pwd} onChange={(e) => {setPwd(e.target.value); handleDisable()}} />

                            <img src={show_icon} alt="icon" className="input-icon" height="16" width="16" hidden={pwdVisibility} onClick={pwdVisible} />
                            <img src={hide_icon} alt="icon" className="input-icon" height="16" width="16" hidden={!pwdVisibility} onClick={pwdVisible} />
                            
                        </div>
                        <div className="field">
                            <img src={lock_icon} alt="icon" className="input-icon" height="16" width="16" hidden={confPwdVisibility} />
                            <img src={unlock_icon} alt="icon" className="input-icon" height="16" width="16" hidden={!confPwdVisibility}/>

                            <input placeholder="Confirm Password"className="input-field" type={confPwdVisibility? 'text' : 'password'} id='confPwd' autoComplete='false' 
                                value={confPwd} onChange={(e) => {setConfPwd(e.target.value); handleDisable()}} />

                            <img src={show_icon} alt="icon" className="input-icon" height="16" width="16" hidden={confPwdVisibility} onClick={confPwdVisible} />
                            <img src={hide_icon} alt="icon" className="input-icon" height="16" width="16" hidden={!confPwdVisibility} onClick={confPwdVisible} />
                        </div>
                        <div className={isDisabled ? "tip" : "hidden"} hidden={isDisabled} >
                            <img src={tooltip} alt='icon' className='' height="18" width= "18" />Please fill all the fields
                        </div>
                        <div className={isDisabled ? "btn2" : "btn" }>   
                            <button onClick={(e) => signup(e)} className="button1" disabled={isDisabled} >Submit</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="button3" onClick={reset} >Reset</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}

export default Register
