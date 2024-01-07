import React,{useEffect,useState} from 'react'
import user_icon from '../assets/svg icons/user.svg'
import lock_icon from '../assets/svg icons/lock.svg'
import unlock_icon from '../assets/svg icons/unlock.svg'
import show_icon from '../assets/svg icons/showpwd.svg'
import hide_icon from '../assets/svg icons/hidepwd.svg'

function Login() {

    const [user,setUser] = useState("")
    const [pwd,setPwd] = useState("")
    const [isDisabled,setIsDisabled] = useState(true)
    const [pwdVisibility, setPwdVisibility] = useState(false)

    const handleDisable = () => {
        setIsDisabled(user === "" || pwd === "")
    }
    const pwdVisible = () => {
        setPwdVisibility(!pwdVisibility)
    }

    useEffect(() => {
        handleDisable()
    }, [user, pwd])

    const login = (e) => {
        let data = {
            "user" : user,
            "password" : pwd
        }
        console.log(data)
        e.preventDefault();
    }

  return (
    <>
      <div className="card">
            <div className="card2">

                <form className="login right">
                    <p className='heading' id="heading">Login</p>
                    <div className="field">
                        <img src={user_icon} alt="icon" className="input-icon" height="20" width="20" />
                        <input placeholder="Username/ Email" className="input-field" type="text" id='id' autoComplete='no' 
                            onChange={(e) => {setUser(e.target.value); handleDisable()}}/>
                    </div>
                    <div className="field">
                        <img src={lock_icon} alt="icon" className="input-icon" height="16" width="16" hidden={pwdVisibility} onClick={pwdVisible}/>
                        <img src={unlock_icon} alt="icon" className="input-icon" height="16" width="16" hidden={!pwdVisibility} onClick={pwdVisible}/>

                        <input placeholder="Password" className="input-field" type={pwdVisibility ? 'text' : 'password'} id='pass' autoComplete='no' 
                            onChange={(e) => {setPwd(e.target.value); handleDisable()}} />

                        <img src={show_icon} alt="icon" className="input-icon" height="16" width="16" hidden={pwdVisibility} onClick={pwdVisible}/>
                        <img src={hide_icon} alt="icon" className="input-icon" height="16" width="16" hidden={!pwdVisibility} onClick={pwdVisible}/>
                    </div>
                    <div className="btn">
                        <button className="button1" disabled={isDisabled} onClick={(e) => login(e)}>Login</button>
                    </div>
                    <button className="button3">Forgot Password</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login
