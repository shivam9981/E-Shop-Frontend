import React from 'react'
import Homecart from './Homecart'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const HomeCartPage = (props) => {
    let data = props.type
    return (
        <div className='relative bg-slate-50 flex  flex-col justify-center'>
            <div className='relative p-5 flex justify-center flex-wrap' >
            <p className='text-lg'>{data.toUpperCase()}</p>
                 {
                    !props.data ? [] :props.data.slice(0,4).map((item) => <Homecart key={item._id} items={item} />)
                }
            </div>
            <Link className='flex justify-center border rounded-2xl border-black text-black' to={`/cartdata/${props.type}`} ><ControlPointIcon /></Link>
        </div>
    )
}

export default HomeCartPage
