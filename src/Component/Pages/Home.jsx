import React, { useEffect } from 'react'
import HomeCarosel from '../Customer/Carosel/HomeCarosel'
import HomeCartPage from '../Customer/HomeSectionCart/HomeCartPage'
import { useDispatch, useSelector } from 'react-redux'
import { productmaledata, productfemaledata, productchilddata } from '../../redux/action/data';
const Home = () => {
  const dispatch = useDispatch()
  const maleproductdata = useSelector((state) => state.myproductdata)
  const femaleproductdata = useSelector((state) => state.femaleproduct)
  const childproductdata = useSelector((state) => state.productchilddata)
  useEffect(() => {
    dispatch(productmaledata())
    dispatch(productfemaledata())
    dispatch(productchilddata())
  }, [])
  return (
    <>
      <div>
        <HomeCarosel />
        <div className='space-y-20 py-20 flex flex-col justify-center px-5 lg:px-10 ' >
          {!maleproductdata.data ? null : <HomeCartPage data={maleproductdata.data} type={"male"} />}
          {!femaleproductdata.data ? null : <HomeCartPage data={femaleproductdata.data} type={"female"} />}
          {!childproductdata.data ? null : <HomeCartPage data={childproductdata.data} type={"child"} />}
        </div>
      </div>
    </>
  )
}

export default Home