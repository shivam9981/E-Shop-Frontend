import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getaddreshbyid } from '../../redux/action/user'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import img from './unkonwn.jpeg'
const Payment = () => {
    const dispatch = useDispatch()

    const values = useSelector(state => state.addreshbyid.data)
    const { id } = useParams()
    const lid = localStorage.getItem('addresh id')
    useEffect(() => {
        if (id) {
            dispatch(getaddreshbyid({ id: id }))
        }
        else if (lid) {
            dispatch(getaddreshbyid({ id: lid }))
        }
    }, [])

    const handleclickpay = async () => {
        console.log("pay")
        // const response = await fetch('http://localhost:5000/api/auth/payments/checkout', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'token': localStorage.getItem('token')
        //     },
        //     body: JSON.stringify({ amount: localStorage.getItem('total price') })
        // });
        // let options = {
        //     key: response.KEY_ID,
        //     amount: response.amount,
        //     currency: "INR",
        //     name: "Shivam Gupta",
        //     description: "my first payment gateway",
        //     image: img,
        //     order_id: response.id,
        //     "handler": async function (response) {
        //         let data = {
        //             respayid: response.razorpay_payment_id,
        //             resorid: response.razorpay_order_id,
        //             ressig: response.razorpay_signature
        //         }
        //         const ans = await fetch('http://localhost:5000/api/auth/payments/verify', data)
        //         if (ans.data) {
        //             alert("payment done")
        //         }
        //         else {
        //             alert("Payment faild")
        //         }
        //     },
        //     prefill: {
        //         name: "Gaurav Kumar",
        //         email: "gaurav.kumar@example.com",
        //         contact: "9000090000"
        //     },
        //     notes: {
        //         address: "Razorpay Corporate Office"
        //     },
        //     theme: {
        //         "color": "#3399cc"
        //     }
        // };
        // const rzp1 = new window.Razorpay(options);
        // rzp1.open();
    }

    return (
        <div>
            <div className='flex w-screen justify-center my-10'>
                <div className='flex justify-center flex-col w-[31rem]'>
                    <p className='my-5 text-center text-lg '>Your Details</p>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> Name : </label>
                        <p>{!values ? "" : values.data[0].name}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> Email : </label>
                        <p >{!values ? "" : values.data[0].email}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> Mobile : </label>
                        <p>{!values ? "" : values.data[0].mobile}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> city : </label>
                        <p>{!values ? "" : values.data[0].city}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> Addresh : </label>
                        <p>{!values ? "" : values.data[0].addresh}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> Reod Addresh : </label>
                        <p>{!values ? "" : values.data[0].road}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> Pin Code : </label>
                        <p>{!values ? "" : values.data[0].pin}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> District : </label>
                        <p>{!values ? "" : values.data[0].distict}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> State : </label>
                        <p>{!values ? "" : values.data[0].state}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> Country : </label>
                        <p>{!values ? "" : values.data[0].country}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> price : </label>
                        <p>{localStorage.getItem('total price')}</p>
                    </div>
                    <div className='flex my-5 justify-between text-center '>
                        <label className=''> Quantity : </label>
                        <p>{localStorage.getItem('total quantity')}</p>
                    </div>
                    <button className='bg-black text-white py-4 rounded-full hover:text-blue-950' onClick={handleclickpay}>
                        Pay
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payment