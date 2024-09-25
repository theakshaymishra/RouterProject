import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid} = useParams();
  return (
    <div className=' text-center bg-gray-600 text-white p-4'>
      user : {userid}
    </div>
  )
}

export default User
