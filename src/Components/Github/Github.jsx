import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



const Github = () => {
  const data = useLoaderData()
  //   const [ data , setData ] =  useState({});
  //  useEffect( () => {
  //   fetch('https://api.github.com/users/theakshaymishra')
  //   .then( response => response.json())
  //   .then( data => setData(data))

  //  }, [])


  return (
    <div className='text-center bg-gray-600 flex items-center justify-center h-screen flex-col '>
      <img src="https://avatars.githubusercontent.com/u/145044850?v=4" alt="profile picture" width={300}/>
      <p className='p-4 text-white'>Name : {data.login}</p>
      <p className=' text-white'>Bio : {data.bio}</p>
    </div>
  )
}

export default Github


