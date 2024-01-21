import React from 'react'

const Cartbutton = ({e,setquery}) => {
    const handleclick=()=>{
        setquery(e)
    }
  return (
    <button onClick={handleclick}>
        <p className='text-white bg-black mx-2 my-2 px-2 py-1 rounded-md' >{e}</p>
    </button>
  )
}

export default Cartbutton