import React, { useEffect, useState } from 'react'

function User() {
    
    let setUser; 

  return (
    <div className=''>
              <button className='border border-gray-800 text-gray-800' value="Login" onClick={setUser}>
                LogIn
              </button>
            </div>
  )
}

export default User
