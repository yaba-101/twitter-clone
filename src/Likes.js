import React, { useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'

function Likes() {

    const [counter, setCounter] = useState(0)

    const like = () => {
        setCounter(counter + 1)
    }

  return (
    <div className='flex'>
  
        <button onClick={like}>

         <HeartIcon className='h-6 text-red-400' />
        </button>
        <h2>{counter}</h2>    
    </div>
  )
}

export default Likes
