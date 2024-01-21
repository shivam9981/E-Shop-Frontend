import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/action/user'
const Login = () => {
  const dispatch = useDispatch()
  const [value, setvalue] = useState({
    email: "",
    password: "",
  })

  const onchange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value })
  }


  const data = useSelector((state) => state.loginuser)
  const handleclick = () => {
    if (value.email && value.password) {
      dispatch(login(value))
      setvalue({
        email: "",
        password: "",
      })
    }
    else {
      window.alert("fill all field")
    }
  }
  useEffect(()=>{
    if (data.data !== null) {
      if (data.data.suceess === false) {
        alert("data not matched")
      }
      else {
        console.log(data.data.authtoken)
        localStorage.setItem("data id", data.data.authtoken)
      }
    }
    else if (data.IsError === true) {
      alert("some error occure")
    }
  },[data])


  return (
    <div className='flex  justify-center w-screen   '>
      <div className='flex flex-col justify-center my-14  text-center w-[30rem]'>
        <div className='my-5'>
          <p>Add a Product</p>
        </div>
        <div className='flex my-5 justify-between text-center '>
          <label className=''> Email : </label>
          <input type='text' name='email' value={value.email} className=' outline-none border-b-2 border-b-black  w-96' onChange={onchange} />
        </div>
        <div className='flex justify-between text-center  my-5 '>
          <label className=''> Password : </label>
          <input type='text' name='password' value={value.password} className=' outline-none border-b-2 border-b-black  w-96' onChange={onchange} />
        </div>
        <div>
          <button className="bg-black  text-white font-bold py-2 px-4 rounded-full" onClick={handleclick}>
            Submit
          </button>
        </div>
        <div className='my-5 flex flex-col-reverse'>
          <Link to='/sign' className='my-3'>Go to SignUP Page</Link>
          <Link to='/forget' className='my-3'>Forget Password</Link>
        </div>
      </div>
    </div>
  )
}

export default Login