import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { cartDatadeleted } from '../../redux/action/data';
const Cart = (props) => {

    const dispatch = useDispatch()
    const handleclick = () => {
        dispatch(cartDatadeleted(props.e._id))
    }
    return (
        <div className='flex justify-evenly md:flex-row flex-col my-5 w-[28rem]  md:w-[25rem] '>
            <div className='flex justify-around md:flex-row  bg-slate-50 rounded-2xl'>
                <div>
                    <img className='w-20  rounded-md mx-10 md:mx-0 ' src={props.e.image} alt='iamge not found' />
                </div>
                <div className='my-10 mx-5 md:mx-5 '>
                    <p>{props.e.brand}</p>
                </div>
                <div className='flex items-center ' >
                    <p className='mx-2'> {props.e.quantity}</p>
                </div>
                <div className='flex items-center'>
                    <p className=' mx-5'>{props.e.price}</p>
                </div>
                <div className='my-10 '>
                    <button className='mx-2' onClick={handleclick}><DeleteForeverIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Cart