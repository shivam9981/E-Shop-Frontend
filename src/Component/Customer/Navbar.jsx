import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const [show, setshow] = useState(true)
  const [icon, hideicon] = useState(true)
  const navigate = useNavigate();
  const data = useSelector((state) => state.cartdata)
  let count = 0;
  if (data.data !== null) {
    data.data.mydata.forEach(element => {
      count = 1 + count
    });
  }
  const token = localStorage.getItem('token')
  const handleclick = () => {
    console.log("done")
    localStorage.removeItem('token')
    navigate('/')

  }
  function onToggleMenu(e) {
    const navLinks = document.querySelector('.nav-links')
    hideicon(!icon)
    navLinks.classList.toggle('top-[4%]')
  }

  return (
    <div className='flex justify-evenly  bg-slate-50 text-gray-900 w-screen'>
      <div className='my-3'>
        <Link to='/' className='text-black  '>Shivam</Link>
      </div>
      <div className='nav-links top-[-35%]  flex items-center   absolute md:static md:w-auto  w-screen  
      md:h-auto md:flex-row z-10 bg-slate-50 md:gap-4 gap-8 right-0 my-10 md:my-0 flex-col'>
        <Link to='/' className='mx-3 text-gray-900 hover:text-gray-900 '>Home</Link>
        <div className='flex flex-col  text-center'>
          <button to='/' className='mx-3 w-16' onClick={e => setshow(!show)}>Type <span><KeyboardArrowDownIcon /></span></button>
          {!show ? <div className='flex flex-col absolute w-20 bg-slate-50 z-10  my-7'>
            <Link to='/cartdata/male' className='text-black' >Male</Link>
            <Link to='/cartdata/female' className='text-black' >Female</Link>
            <Link to='/cartdata/child' className='text-black' >Child</Link>
          </div> : <div></div>}
        </div>
        <Link to='/about' className='mx-3 text-black'>About</Link>
        <Link to='/contect' className='mx-3  text-black'>Contect</Link>
      </div>

      <div className='flex justify-evenly my-3'>
        <Link to='/' className='mx-3 text-black'><NotificationsIcon /></Link>
        <div className='mx-3'>
          <Link to='/AddToCart' className='text-black' ><AddShoppingCartIcon /></Link>
          <span className='mx-1'>{count}</span>
        </div>
        <div>
          {!token ? <div><Link to="/sign" className='mx-3 bg-black text-white py-2 px-3 rounded-full'>SignUP</Link>
            <Link to="/login" className='mx-3 bg-black text-white py-2 px-3 rounded-full'>SignIN</Link></div>
            : <Link className='mx-3 bg-black text-white py-2 px-3 rounded-full' onClick={handleclick}>Logout</Link>}
        </div>
        <div className='md:hidden '>

          {icon ? <MenuIcon className='z-20 sm:left-0' onClick={(e) => { onToggleMenu() }} />
            : <CloseIcon onClick={(e) => { onToggleMenu() }} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar