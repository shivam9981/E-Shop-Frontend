import { configureStore } from '@reduxjs/toolkit'
import myproductdata from './slice/myproductdata'
import femaleproduct from './slice/femaleproduct'
import productchilddata from './slice/childproduct'
import getdatabyID from './slice/getdatabyID'
import cartdatas from './slice/cartdatas'
import cartdata from './slice/cartdata'
import cartDatadelete from './slice/deletecartdata'
import adduser from './userslice/adduser'
import checkuser from './userslice/checkuser'
import forgetuser from './userslice/forgetpass'
import loginuser from './userslice/loginuser'
import addreshs from './userslice/addreshs'
import getalladdresh from './userslice/getalladdresh'
import addreshbyid from './userslice/addreshbyid'
import contect from './userslice/contect'
import ratting from './slice/ratting'
import rattingget from './slice/rattingget'
const store = configureStore({
    reducer: {
        myproductdata: myproductdata,
        femaleproduct: femaleproduct,
        productchilddata: productchilddata,
        getdatabyID: getdatabyID,
        cartdatas: cartdatas,
        cartdata: cartdata,
        cartDatadelete: cartDatadelete,
        loginuser: loginuser,
        forgetuser: forgetuser,
        checkuser: checkuser,
        adduser: adduser,
        addreshs: addreshs,
        getalladdresh: getalladdresh,
        addreshbyid: addreshbyid,
        contect: contect,
        ratting: ratting,
        rattingget: rattingget,
    }
})
export default store