import React from 'react'
import { Link } from 'react-router-dom'

const Homecart = (data ) => {
  return (
    <Link to={`/viewdetail/${data.items._id}`} className='curser-pointer flex flex-col  items-center   bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-2 my-5'>
      <div className='w-[10rem] h-[13rem]'>
        <img className='object-cover object-top w-full h-full' 
        src={data.items.image} />
      </div>
      <div>
        <h2 className='text-lg font-medium px-3 mt-5 text-gray-900'>{data.items.brand}</h2>
        <p className='mt-2 text-3m px-3 text-gray-500'>{data.items.title}</p>
      </div>
    </Link>
  )
}

export default Homecart