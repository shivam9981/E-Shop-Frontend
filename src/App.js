import './App.css';
import CartdataPage from './Component/Customer/HomeSectionCart/CartdataPage';
import Navbar from './Component/Customer/Navbar';
import Home from './Component/Pages/Home';
import { Routes, Route } from 'react-router-dom'
import ViewDetails from './Component/Customer/HomeSectionCart/ViewDetails';
import AddToCart from './Component/Pages/AddToCart';
import Signin from './Component/Pages/sign/Signin';
import Login from './Component/Pages/sign/Login';
import Forget from './Component/Pages/sign/Forget';
import Password from './Component/Pages/sign/Password';
import Addresh from './Component/Pages/Addresh';
import Payment from './Component/Pages/Payment';
import Youraddresh from './Component/Pages/Youraddresh';
import About from './Component/Pages/About';
import Contect from './Component/Pages/Contect';
import Footer from './Component/Pages/Footer';
function App() {
  
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contect' element={<Contect />} />
        <Route path='/AddToCart/:id/:val' element={<AddToCart />} />
        <Route path='/cartdata/:type' element={<CartdataPage />} />
        <Route path='/viewdetail/:id' element={<ViewDetails />} />
        <Route path='/AddToCart' element={<AddToCart />} />
        <Route path='/sign' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/forget/password' element={<Password />} />
        <Route path='/AddToCart/youraddresh/addresh' element={<Addresh />} />
        <Route path='/AddToCart/youraddresh' element={<Youraddresh />} />
        <Route path='/AddToCart/youraddresh/addresh/payment' element={<Payment />} />
        <Route path='/AddToCart/youraddresh/payment/:id' element={<Payment />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;