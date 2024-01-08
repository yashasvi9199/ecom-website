import React from 'react'
import User from './User'

function NoLogin() {
  return (
    <>
    {alert ("Please register or signin first")}
    {console.log("Please Login/register")}
    <User />
      
    </>
  )
}

export default NoLogin
