import React, { useState } from 'react'
import { contect } from '../../redux/action/user'
import { useDispatch, useSelector } from 'react-redux'



const Contect = () => {
  const data = useSelector(state => state.contect)
  const dispatch = useDispatch()
  const [value, setvalue] = useState({
    name: "", email: "", mobile: "", message: ""
  })
  const onchange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value })
  }

  const handleclick = () => {
    console.log(value)
    if (value.name && value.email && value.mobile && value.message) {
      dispatch(contect({ name: value.name, email: value.email, mobile: value.mobile, message: value.message }))
      setvalue({
        name: "", email: "", mobile: "", message: ""
      })
    }
    else {
      alert("Fill all field")
    }
  }
  if (data.data !== null) {
    alert("message send sucessfully")
  }
  return (
    <div className=''>
      <div className='w-screen  flex h-[40rem] justify-center '>
        <div className=' w-[35rem] h-[30rem] my-10 '>
          <p className='text-lg my-8 text-center'>Send Your Message</p>
          <div className='flex my-4 justify-between text-center '>
            <label className='px-5'> Name : </label>
            <input type='text' name='name' value={value.name} className=' outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
          </div>
          <div className='flex my-4 justify-between text-center '>
            <label className='px-5'> Email : </label>
            <input type='text' name='email' value={value.email} className=' outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
          </div>
          <div className='flex my-4 justify-between text-center '>
            <label className='px-5'> Mobile : </label>
            <input type='text' name='mobile' value={value.mobile} className=' outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24  ' onChange={onchange} />
          </div>
          <div className='flex my-4 justify-between text-center '>
            <label className='px-5'> Message : </label>
            <textarea type='text' name='message' value={value.message} className=' outline-none border border-black p-2  lg:w-96 md:w-48 sm:w-24 lg:h-48 md:h-24 sm:h-12' onChange={onchange} />
          </div>
          <div className='text-center '>
            <button className='bg-black text-white px-16 py-2 rounded-lg mb-14' onClick={handleclick}> Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contect