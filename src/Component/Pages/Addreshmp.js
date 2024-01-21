import React from 'react'
import { Link } from 'react-router-dom'

const Addreshmp = (e) => {
    return (
        <Link to={`./payment/${e.e._id}`}>
            <div className=' text-black flex md:flex-row flex-col border  border-black rounded-lg bg-slate-50 my-5 justify-evenly w-[20rem] md:w-[50rem]'>
                <div className=''>
                    <p className='my-1'>{e.e.name}</p>
                    <p className='my-1'>{e.e.mobile}</p>
                    <p className='my-1'>{e.e.email}</p>
                    <p className='my-1'>{e.e.country}</p>
                </div>
                <div>
                    <p className='my-1' >{e.e.addresh}</p>
                    <p className='my-1' >{e.e.road}</p>
                    <p className='my-1' >{e.e.pin}</p>
                    <p className='my-1' >{e.e.state}</p>
                </div>
            </div>
        </Link>
    )
}

export default Addreshmp