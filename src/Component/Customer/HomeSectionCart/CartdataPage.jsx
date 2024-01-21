import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productmaledata, productfemaledata, productchilddata } from '../../../redux/action/data';
import Homecart from './Homecart';
import Cartbutton from './Cartbutton';
const CartdataPage = () => {
  const dispatch = useDispatch()
  const [query, setquery] = useState(null)
  let data;
  let { type } = useParams()
  const mdata = useSelector((state) => state.myproductdata.data)
  const fdata = useSelector((state) => state.femaleproduct.data)
  const cdata = useSelector((state) => state.productchilddata.data)

  useEffect(() => {
    switch (type) {
      case "male":
        dispatch(productmaledata())
        break;
      case "female":
        dispatch(productfemaledata())
        break;
      case "child":
        dispatch(productchilddata())
        break
      default:
        alert("some error occure")
    }
  }, [type])
  switch (type) {
    case "male":
      data = mdata
      break;
    case "female":
      data = fdata
      break;
    case "child":
      data = cdata
      break
    default:
      alert("some error occure")
  }
  let set1 = new Set();

  if (data) {
    data.forEach(element => {
      set1.add(element.name.toUpperCase())
    });
  }
  let myArray = Array.from(set1);
  const handleclicks = () => {
    setquery(null)
  }
  console.log(query)
  function filetdata(data) {

    return data
  }
  if (query) {
    const val = data.filter(datas => datas.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1)
    data = val
  }
  return (
    <>
      <div className='flex justify-center flex-wrap my-5'>
        {myArray.map((e) => <Cartbutton e={e} key={e} setquery={setquery} />)}
      </div>
      <button onClick={handleclicks}>Reset</button>
      <div className='flex justify-center flex-wrap my-0 '>
        {!data ? null : data.map((e) => <Homecart key={e._id} items={e} />)}
      </div>
    </>
  )
}

export default CartdataPage