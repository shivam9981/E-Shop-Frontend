import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { rate } from "../../../redux/action/data";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
export default function StarRating(props) {
  const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1);
  const dispatch = useDispatch()
  const [values, setvalues] = useState({
    name: "", email: "", mobile: "", message: ""
  })
  const onchange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value })
  }
  const handleclick = () => {
    dispatch(rate({ name: values.name, email: values.email, mobile: values.mobile, message: values.message, ratting: value, productid: props.id }))
    setvalues({
      name: "", email: "", mobile: "", message: ""
    })
  }
  return (
    <>
      <div>
        <div className='w-full mt-32 flex h-[30rem] justify-center '>
          <div className=' w-[35rem] h-[30rem]  '>
            <p className='text-lg  text-center'>Rate Your Product</p>
            <div className='flex my-4 justify-between text-center '>
              <label className='px-5'> Name : </label>
              <input type='text' name='name' value={values.name} className=' outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
            </div>
            <div className='flex my-4 justify-between text-center '>
              <label className='px-5'> Email : </label>
              <input type='text' name='email' value={values.email} className=' outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
            </div>
            <div className='flex my-4 justify-between text-center '>
              <label className='px-5'> Mobile : </label>
              <input type='text' name='mobile' value={values.mobile} className=' outline-none border-b-2 border-b-black  lg:w-96 md:w-48 sm:w-24' onChange={onchange} />
            </div>
            <div className="text-cente flex justify-between">
              <p className="mx-12">Ratting : </p>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>
            </div>
            <div className='flex my-4 justify-between text-center '>
              <label className='px-5'> Message : </label>
              <textarea type='text' name='message' value={values.message} className=' outline-none border border-black p-2  lg:w-96 md:w-48 sm:w-24 lg:h-20 md:h-12 sm:h-8' onChange={onchange} />
            </div>
            <div className='text-center'>
              <button className='bg-black text-white px-16 py-2 rounded-lg' onClick={handleclick}> Submit</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}