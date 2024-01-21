import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartData, cartDatacomplete } from '../../redux/action/data';
import Cart from './Cart';
import './Addtocart.css';
const AddToCart = () => {
  const navigate = useNavigate()
  const [value, setvalue] = useState({
    price: 0,
    quantity: 0
  })
  let id = localStorage.getItem('id')
  let val = localStorage.getItem('val')
  const dispatch = useDispatch()
  const data = useSelector((state) => state.cartdata)
  const cdata = useSelector((state) => state.cartdatas)
  const Ddata = useSelector((state) => state.cartDatadelete)
  useEffect(() => {
    dispatch(cartData({ id, val }))
    localStorage.removeItem('id')
    localStorage.removeItem('val')
    // react-hooks/exhaustive-deps
  }, [])

  let price = 0;
  let count = 0;
  let quantity = 0;
  useEffect(() => {
    dispatch(cartDatacomplete())
    // react-hooks/exhaustive-deps

  }, [cdata, Ddata]);
  if (data.data !== null) {
    data.data.mydata.forEach(element => {
      price = parseInt(element.price) + price
      quantity = parseInt(element.quantity) + quantity
      count = 1 + count
    });
    localStorage.setItem('total price', price)
    localStorage.setItem('total quantity', quantity)
  }
  const handleclicks = () => {
    navigate('./youraddresh')
  }

  return (
    <div>
      <div className='flex justify-evenly flex-wrap my-10'>
        <div className='flex flex-col my-5  '>
          <div className='scroll'>
            {!data.data ? null : data.data.mydata.map((e) => <Cart key={e._id} e={e} value={value} setvalue={setvalue} />)}
          </div>
        </div>
        <div className='w-96  h-60 flex justify-evenly flex-col my-14  ' >
          <div className='flex justify-center text-lg'>
            <p>Total Quantity : </p>
            <p>&nbsp;{quantity}</p>
          </div>
          <div className='flex justify-center text-lg'>
            <p>total price : </p>
            <p>&nbsp;{price}</p>
          </div>
          <button className='bg-black text-white px-10 py-3 justify-center flex rounded-3xl' onClick={handleclicks} >Order Now</button>
        </div>
      </div>
    </div>
  )
}
export default AddToCart