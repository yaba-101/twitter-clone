import React, { useEffect, useState } from 'react'
import './App.css'
import Likes from './Likes' 

function Form() {
    const [user, setUser] = useState('');

    useEffect(() => {
        const username = prompt('enter username', ['']) 
        setUser(username)
    }, [])

    const [tweets, setTweets] = useState([])
    const [input, setInput] = useState('')
    const addTweet = (e) =>  {
            setTweets([...tweets, input])
    }
    
     
    return (
        <div className='m-2  p-2 items-center grid-cols-2'>
          <div>
                <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                type="text" placeholder='Tweet something' 
                className='border-b p-2 border-gray-600'/>
                <input 
                onClick={addTweet}
                type="submit" value="Tweet" className=' mx-2 py-[5px] px-[10px] 
                rounded-lg header text-white text-xl justify-end'/>
           </div>
           <div className='mt-[20px]'>
                <h2>New Tweets</h2>
                <div className=' p-2 bg-slate-500 text-white '>
                    {tweets.map((tweets) =>
                        
                            <div className='border-b border-gray-300 pb-2 hover:opacity-75  
                            cursor-pointer hover:bg-slate-300'>
                                <p>{tweets}</p>
                                <Likes /> 
                                <p>Posted by @{user}</p>
                            </div>
                        
                    )} 
                </div> 
    
           </div>
        </div>
      )
   
 
}

export default Form
