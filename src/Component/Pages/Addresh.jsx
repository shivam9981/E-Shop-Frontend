import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addreshss } from '../../redux/action/user'
import { useNavigate } from 'react-router-dom';
const Addresh = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setvalue] = useState({
        name: "", email: "", mobile: "", city: "", addresh: "", road: "", country: "", state: "", pin: "", distict: ""
    })
    const onchange = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }
    const data = useSelector(state => state.addreshs)
    const handleclick = () => {
        const { name, email, mobile, city, addresh, road, country, state, pin, distict } = value;
        if (name && email && mobile && city && addresh && road && country && state && pin && distict) {
            dispatch(addreshss({ name, email, mobile, city, addresh, road, country, state, pin, distict }))
        }
    }
    if (data.data !== null) {
        localStorage.setItem('addresh id', data.data.addreshdata._id)
        navigate(`./payment`)
    }

    return (
        <>
            <div className='flex w-screen justify-center my-10'>
                <div className='flex justify-center flex-col w-[31rem]'>
                    <p className='my-5 text-center text-lg '>Some Important Details</p>
                    <div className='flex my-3 justify-between text-center '>
                        <label className='mx-1'> Name : </label>
                        <input type='text' name='name' value={value.name} className='mx-1 outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <div className='flex my-3 justify-between text-center '>
                        <label className='mx-1'> Email : </label>
                        <input type='text' name='email' value={value.email} className='mx-1 outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <div className='flex my-3 justify-between text-center '>
                        <label className='mx-1'> Mobile : </label>
                        <input type='text' name='mobile' value={value.mobile} className='mx-1 outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <div className='flex my-3 justify-between text-center '>
                        <label className='mx-1'> city : </label>
                        <input type='text' name='city' value={value.city} className='mx-1 outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <div className='flex my-3 justify-between text-center '>
                        <label className='mx-1'> Addresh : </label>
                        <input type='text' name='addresh' value={value.addresh} className='mx-1 outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <div className='flex my-3 justify-between text-center '>
                        <label className=''> Road Addresh : </label>
                        <input type='text' name='road' value={value.road} className=' outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <div className='flex my-3 justify-between text-center '>
                        <label className='mx-1'> Pin Code : </label>
                        <input type='text' name='pin' value={value.pin} className='mx-1 outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <div className='flex my-3 justify-between text-center '>
                        <label className='mx-1'> District : </label>
                        <input type='text' name='distict' value={value.distict} className='mx-1 outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <div className='flex my-3 justify-between text-center '>
                        <label className='mx-1'> State : </label>
                        <input type='text' name='state' value={value.state} className='mx-1 outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <div className='flex my-3 justify-between text-center '>
                        <label className='mx-1'> Country : </label>
                        <input type='text' name='country' value={value.country} className='mx-1 outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
                    </div>
                    <button className='bg-black text-white my-3 py-4 md:my-5 rounded-full hover:text-blue-950' onClick={handleclick}>
                        Process to Payment
                    </button>
                </div>
            </div>
        </>
    )
}

export default Addresh