import React,{useState} from 'react';
import './App.css';
// import Navbar from './components/NavBar/Navbar';
import Homepage from './pages/HomePage/Homepage';
import { Routes, Route } from "react-router-dom";
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import TrackOrderPage from './pages/TrackOrder/TrackOrderPage';
import BrushesPage from './pages/BrushesPage/BrushesPage';
import walogo from "./images/walogo.png"
import CartPage from './pages/CartPage/CartPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './pages/user/dashboard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateCategory from './pages/admin/CreateCategory.js';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import Orders from './pages/admin/Orders.js'
import Products from './pages/admin/Products.js'
import Profile from './pages/user/Profile.js';
import UserOrder from './pages/user/Orders.js'
import PageNotFound from './pages/PageNotFound.js';
import UpdateProduct from './pages/admin/UpdateProduct.js';
import SearchPage from './pages/SeachPage.js';
import ProductDetail from './pages/ProductDetail.js';
import SpinningWheel from './components/SpinningWheel.jsx';
import PaymentPage from './pages/CartPage/PaymentPage.jsx';
import ResetPassword from './pages/ForgotPassword/ResetPassword.jsx';
import CategoryProduct from './pages/BrushesPage/CategoryProduct.js';
import TermsCondition from './pages/TermsCondition/TermsCondition.jsx';
import ReturnRefundPolicy from './pages/TermsCondition/RetunRefundPolicy.jsx';
import PrivacyPolicy from './pages/TermsCondition/PrivacyPolicy.jsx';
// import CategoryProduct from './pages/categoryProduct.jsx';
function App() {
  const [showSpinningWheel, setShowSpinningWheel] = useState(false);

  const handleLoginSuccess = () => {
    setShowSpinningWheel(true);
  };


  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/search" element={<SearchPage/>}></Route>
      <Route path="/category/:slug" element={<CategoryProduct/>} />
      <Route path="/product/:slug" element={<ProductDetail/>}></Route>
      <Route path="/dashboard" element={<PrivateRoute/>}>
      <Route path="user" element={<Dashboard/>}/>
      <Route path="user/orders" element={<UserOrder/>} />
      <Route path="user/profile" element={<Profile/>} />
      </Route>
      <Route path="/dashboard" element={<AdminRoute/>}>
        <Route path='admin' element={<AdminDashboard/>}/>
        <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct/>} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />

          <Route path="admin/users" element={<Users/>} />
          <Route path="admin/orders" element={<Orders/>} />
          <Route path="admin/products" element={<Products/>} />

        </Route>
      <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
      <Route path="/resetPassword" element={<ResetPassword/>}></Route>

      <Route path="/trackorder" element={<TrackOrderPage/>}></Route>
      <Route path="/termsandcondition" element={<TermsCondition/>}></Route>
      <Route path="/returnrefundpolicy" element={<ReturnRefundPolicy/>}></Route>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
      <Route path="/brushpage" element={<BrushesPage/>}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/paymentPage"element={<PaymentPage/>}></Route>

      <Route path="*" element={<PageNotFound/>} />


      </Routes>
      <ToastContainer />
      {showSpinningWheel && <SpinningWheel />}

      <div className='whatsappFloat'>
      <a href="https://wa.me/919817674090" target="_blank" rel="noopener noreferrer">
        <img src={walogo} alt="Whatsapp_Logo" className='whatsappImage'/>
      </a>
      </div>
    </div>
  );
}

export default App;
