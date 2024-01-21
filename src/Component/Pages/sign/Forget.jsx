import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import apps from './Firebases';
import { checkdata } from '../../../redux/action/user'
import { useNavigate } from 'react-router-dom'
const auth = getAuth(apps)
const Forget = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector(state => state.checkuser)
  const [value, setvalue] = useState({
    mobile: "",
  })

  const onchange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value })
  }
  const [otp, setotp] = useState({
    otp: "",
  })
  const onchanges = (e) => {
    setotp({ ...otp, [e.target.name]: e.target.value })
  }
  const handleclick = () => {
    if (value.mobile) {
      dispatch(checkdata(value.mobile))
    }
    else {
      window.alert("fill all field")
    }
  }
  if (data.data !== null) {
    if (data.data.sucess === true) {
      sendotpcode()
    }
    else {
      alert("Invalid details")
    }
  }

  // check user using mobile number
  function sendotpcode() {
    captavarify()
    const phoneNumber = "+91" + value.mobile;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("otp send")
        localStorage.setItem('mobile', value.mobile)
        setvalue({
          mobile: "",
        })
      }).catch((error) => {
        console.log(error)
      });
  }
  function captavarify() {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {

      },
      'expired-callback': () => {

      }
    })
  }
  function verifyotp() {
    window.confirmationResult.confirm(otp.otp).then((result) => {
      const user = result.user;
      alert("varification sucess")
      navigate('./password')
    }).catch((error) => {
      console.log(error)
      alert("invalid otp")
    });
  }
  const handleclickotp = () => {
    verifyotp()
  }


  return (
    <div className='flex   justify-center w-screen   '>
      <div className='flex flex-col justify-center my-16  text-center w-[35rem]'>
        <div className='my-5'>
          <p>Add a Product</p>
        </div>
        <div><div className='flex justify-between text-center  my-5 '>
 
          <label className=''> Mobile : </label>
          <input type='text' name='mobile' value={value.mobile} className=' outline-none border-b-2 border-b-black  w-96' onChange={onchange} />
          <button className="bg-black w-24 text-white font-bold py-1 px-2 rounded-full" onClick={handleclick}>
            send otp
          </button>
        </div>
          <div className='flex justify-between text-center  my-5 '>
            <label className=''> otp : </label>
            <input type='text' name='otp' value={otp.otp} className=' outline-none border-b-2 border-b-black  w-96' onChange={onchanges} />

            <button className="bg-black w-24 text-white font-bold py-1 px-2 rounded-full" onClick={handleclickotp}>
              verify
            </button></div>
        </div>
        <div className='my-5 mx-16' id='recaptcha-container'></div>
      </div>
    </div>
  )
}

export default Forget