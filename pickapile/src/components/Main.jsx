import React from 'react'
import myImage from '../images/1_9DTyF9z6vfhcnroipnTBKw.webp'
import {NavLink} from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-gray-300 h-screen flex items-center'>
        <div className='bg-gray-50 drop-shadow-xl rounded-lg border-4 border-purple-500 w-[90%] md:w-[60%] lg:w-[40%] xl:w-[35%] mx-auto py-5'>
            <h1 className='text-3xl font-extrabold italic text-center my-3'>Pick a Pile</h1>
            <img className='w-[80%] h-[40%] mx-auto rounded-lg border-2 drop-shadow-xl border-purple-500' src={myImage} alt="" />
            <div className='my-7 text-sm font-bold text-center tracking-wide'>
                <p>Do you know your luck in life?</p>
                <p>Pick three card three times...</p>
                <p>These cards show your luck in future and past...</p>
            </div>
            <div className='text-center my-3'>
            <NavLink to='/questions'>
            <button className='text-purple-700 hover:scale-110 hover:drop-shadow-lg hover:duration-100 border-purple-700 border w-20 h-10 rounded-xl hover:text-white hover:bg-purple-500'>
                Next...
            </button>
            </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Main