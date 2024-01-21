import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Addreshmp from './Addreshmp'
import { useSelector,useDispatch } from 'react-redux'
import './Addtocart.css'
import { getaddresh } from '../../redux/action/user'
const Youraddresh = () => {
  const value = useSelector(state => state.getalladdresh)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getaddresh())
  }, [])
  return (
    <div className='w-screen flex flex-col text-center h-screen'>
      <p className='my-10'>Your Addresh</p>
      <div className='boxset  my-5'>
        {!value.data ? null : value.data.data.map((e) => <Addreshmp key={e._id} e={e} />)}
      </div>
      <div className='text-center  my-10'>
        <Link to='./addresh' className='bg-black text-white py-4 rounded-full hover:text-blue-950 md:px-40 px-20'>Add Your Addresh</Link>
      </div>
    </div>
  )
}

export default Youraddresh