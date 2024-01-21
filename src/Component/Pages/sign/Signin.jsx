import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../../redux/action/user'
const Signin = () => {
    const dispatch = useDispatch()
    const [value, setvalue] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
    })
  
    const onchange = (e) => {
      setvalue({ ...value, [e.target.name]: e.target.value })
    }
  
  
    const handleclick = () => {
      if (value.name && value.email && value.mobile && value.password && value.cpassword ) {
        console.log(value)
        if (value.password === value.cpassword) {
          dispatch(signin(value))
        }
        else{
          alert("password not matched")
        }
        setvalue({
          name: "",
          email: "",
          mobile: "",
          password: "",
          cpassword: "",
        })
      }
      else {
        window.alert("fill all field")
      }
    }
    const data =  useSelector((state) => state.adduser)
    if (data.data !==null) {
      console.log(data.data)
      localStorage.setItem("token", data.data.authtoken)
    }
    else if (data.IsError === true) {
      alert("some error occure")
    }
  
    return (
      <div className='flex  justify-center w-screen   '>
        <div className='flex flex-col justify-center my-14  text-center w-[30rem]'>
          <div className='my-5'>
            <p>Add a Product</p>
          </div>
          <div className='flex my-5 justify-between text-center '>
            <label className=''> Name : </label>
            <input type='text' name='name' value={value.name} className='  outline-none border-b-2 border-b-black w-96' onChange={onchange} />
          </div>
          <div className='flex my-5 justify-between text-center '>
            <label className=''> Email : </label>
            <input type='text' name='email' value={value.email} className=' outline-none border-b-2 border-b-black  w-96' onChange={onchange} />
          </div>
          <div className='flex justify-between text-center  my-5 '>
            <label className=''> Mobile : </label>
            <input type='text' name='mobile' value={value.mobile} className=' outline-none border-b-2 border-b-black  w-96' onChange={onchange} />
          </div>
          <div className='flex justify-between text-center  my-5 '>
            <label className=''> Password : </label>
            <input type='text' name='password' value={value.password} className=' outline-none border-b-2 border-b-black  w-96' onChange={onchange} />
          </div>
          <div className='flex justify-between text-center my-5  '>
            <label className=''> CPassword : </label>
            <input type='text' name='cpassword' value={value.cpassword} className='outline-none  w-96 border-b-2 border-b-black' onChange={onchange} />
          </div>
          
          <div>
            <button className="bg-black  text-white font-bold py-2 px-4 rounded-full" onClick={handleclick}>
              Submit
            </button>
          </div>
          
          <div className='my-5'>
            <Link to='/login' className='my-3'>Go to Login Page</Link>
          </div>
        </div>
      </div>
    )
}

export default Signin