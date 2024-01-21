import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productDataByID, getrate } from '../../../redux/action/data';
import StarRating from './StarRating';
import Showrating from './Showrating';
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { tabClasses } from '@mui/material';

// const labels = {
//     0.5: "Useless",
//     1: "Useless+",
//     1.5: "Poor",
//     2: "Poor+",
//     2.5: "Ok",
//     3: "Ok+",
//     3.5: "Good",
//     4: "Good+",
//     4.5: "Excellent",
//     5: "Excellent+",
// };
// function getLabelText(finaldata) {
//     return `${finaldata} Star${finaldata !== 1 ? "s" : ""}, ${labels[finaldata]}`;
// }
const ViewDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [val, setval] = useState(1)
    const data = useSelector((state) => state.getdatabyID)
    const rates = useSelector((state) => state.rattingget)
    const sendrate = useSelector((state) => state.ratting)
    let finaldata = 5;
    // const [value, setValue] = useState(5);
    useEffect(() => {
        dispatch(productDataByID(id))
    }, [])
    useEffect(() => {
        dispatch(getrate(id))
    }, [sendrate])
    const handleclickplus = () => {
        setval(val + 1)
    }
    const handleclickminus = () => {
        if (val !== 1) {
            setval(val - 1)
        }
    }
    const token = localStorage.getItem('token')
    const handleclick = () => {
        if (token) {
            navigate('/AddToCart')
            localStorage.setItem('id', id)
            localStorage.setItem('val', val)
        }
        else {
            navigate('/login')
        }
    }
    const handleclickbuy = () => {
        if (token) {
            navigate('/AddToCart/youraddresh')
        }
    }
    console.log(rates)
    if (rates.data !== null) {
        if (rates.data.mydata[0] === undefined) {
            finaldata = 5
        }
        else {
            let count = 0;
            let totalratting = 0
            rates.data.mydata.forEach(element => {
                totalratting = totalratting + parseInt(element.ratting)
                count = count + 1
            });
            if (count !== 0) {
                let data = totalratting / count;
                if (data == 0) {
                    finaldata = 0.5;
                }
                finaldata = parseInt(data.toFixed())
                console.log(finaldata)
            }
        }
    }
    return (
        <>
            {!data.data ? null : <div className='flex justify-evenly text-center my-10 flex-wrap'>
                <div className=' lg:w-96 md:w-48 sm:w-24 '><img src={data.data.mydata.image} alt='image not found' /></div>
                <div className=' lg:w-96 md:w-48 sm:w-24 flex flex-col  justify-around text-center'>
                    <p className='text-4xl'>{data.data.mydata.brand}</p>
                    <p className='text-lg'>{data.data.mydata.title}</p>
                    <p className='lg:w-96 md:w-48 sm:w-24 text-lg'>A traditional garment embodying elegance and grace.
                        Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style</p>

                    <div className='flex justify-evenly'>
                        <p>Ratting :</p>
                        <Box
                            sx={{
                                width: 200,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Rating
                                name="hover-feedback"
                                value={finaldata}
                                precision={0.5}
                                // getLabelText={getLabelText}
                                // onChange={(event, newValue) => {
                                //     setValue(newValue);
                                // }}
                                // onChangeActive={(event, newHover) => {
                                //     setHover(newHover);
                                // }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {/* {value !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )} */}
                        </Box>
                    </div>
                    <div className='flex flex-row justify-evenly  lg:w-96 md:w-48 sm:w-24 '>{!data.data.mydata1 ? null : data.data.mydata1.map((e) => <div key={e._id} className='bg-black text-white py-1 px-4  text-2xl rounded-full'>{e.sizetype}</div>)}</div >

                    <div>
                        <div >{!data.data.mydata2 ? null : data.data.mydata2.map((e) => <div key={e._id} >{e.colortype}</div>)}</div>
                    </div>
                    <div className='flex lg:w-96 md:w-48 sm:w-24 justify-evenly ' >
                        <button className='bg-black text-white py-1 lg:px-10 md:px-5 sm:px-5 text-2xl rounded-full' onClick={handleclickplus} >+</button>
                        <p >{val}</p>
                        <button className='bg-black text-white py-1 lg:px-10 md:px-5 sm:px-5 text-2xl rounded-full' onClick={handleclickminus} >-</button>
                    </div>

                    <div className='flex flex-col '>
                        <button className='bg-black my-3 text-white py-1 px-4  text-1xl rounded-full' onClick={handleclick}

                        >Add To Cart</button>
                        <button className='bg-black my-3 text-white py-1 px-4  text-1xl rounded-full' onClick={handleclickbuy} >Buy Now</button>
                    </div>
                </div>
            </div>}
            <div className=' mt-10 '>
                <StarRating id={id} />
            </div>
            <div className='flex  flex-wrap justify-start align-middle lg:w-[95rem] md:w-[47rem] sm:w-[23rem] my-5 mx-2 '>
                {!rates.data ? null : rates.data.mydata.map((e) => <Showrating key={e._id} e={e} />)}
            </div>
        </>
    )
}

export default ViewDetails