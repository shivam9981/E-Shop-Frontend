import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { forget } from '../../../redux/action/user'
import { useDispatch, useSelector } from 'react-redux'
const Password = () => {
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    const [values, setvalues] = useState({
        password: "",
        cpassword: "",
    })
    const onchangep = (e) => {
        setvalues({ ...values, [e.target.name]: e.target.value })
    }
    const handleclickpassword = () => {
        let value = localStorage.getItem('mobile')
        if (values.password === values.cpassword) {
            dispatch(forget({ password: values.password, mobile: value }))
            // localStorage.removeItem('mobile')
        }
        else {
            alert("password not matched")
        }
    }
    const data = useSelector(state => state.forgetuser)
    console.log(data.data)
    if (data.data !== null) {
        navigate('/login')
    }
    return (
        <div className='flex   justify-center w-screen '>
            <div className='flex flex-col justify-center my-16  text-center w-[30rem]'>
                <div className='flex justify-between text-center  my-5 '>
                    <label className=''> Password : </label>
                    <input type='text' name='password' value={values.password} className=' outline-none border-b-2 border-b-black  w-96' onChange={onchangep} />
                </div>
                <div className='flex justify-between text-center my-5  '>
                    <label className=''> CPassword : </label>
                    <input type='text' name='cpassword' value={values.cpassword} className='outline-none  w-96 border-b-2 border-b-black' onChange={onchangep} />
                </div>
                <div className='flex justify-center'>

                    <button className="bg-black w-24 text-white font-bold  py-2 px-4 rounded-full" onClick={handleclickpassword}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Password