import React, { useState } from 'react';
import './Register.css';
import loginpagemodelimage from '../../images/loginPagemodelImg.jpg'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Layout from '../../components/Layout/Layout';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
    setErrors({});


  }

  return (
    <Layout title={'Register-KidzGlam Corner'}>

      <div>
        <div className='registerpagecontainer'>
          <div className='registerpagemaindiv'>
            <div className='rightregisterdiv'>
              <img className='girlregisterimage' src={loginpagemodelimage} alt="registerGirl" />
            </div>
            <div className='leftregisterdiv'>
              <div className="register-container">
                <h2 className='welcomeheading'>Welcome!</h2>
                <form onSubmit={handleSubmit} >
                  <input
                    type="name"
                    id="name"
                    placeholder='Your Full Name'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      setErrors(prevErrors => ({ ...prevErrors, name: '' }));

                    }
                    }
                  />
                  {errors.name && <div className="error-message"> * {errors.name}</div>}

                  <input
                    type="email"
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setErrors(prevErrors => ({ ...prevErrors, email: '' }));
                    }
                    }
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  {errors.email && <div className="error-message">* {errors.email}</div>}
                  <div id="emailHelp" className="form-text" style={{ fontSize: '0.8rem' }}>
                    We'll never share your email with anyone else.
                  </div>

                  <div id="visiblepassword_notvisiblepassword">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="exampleInputPassword1"
                      placeholder='Your Password'
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors(prevErrors => ({ ...prevErrors, password: '' }));
                      }}

                    />
                    {errors.password && <div className="error-message">* {errors.password}</div>}
                    <span className="toggle-password-button" onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </span>
                  </div>
                  
                  <div id="visiblepassword_notvisiblepassword">
                  <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));

                    }}
                  />
                  {errors.confirmPassword && <div className="error-message">* {errors.confirmPassword}</div>}
                  <span className="toggle-password-button" onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </span>
                    </div>

                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setErrors(prevErrors => ({ ...prevErrors, phone: '' }));
                    }}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Phone No"
                  />
                  {errors.phone && <div className="error-message">* {errors.phone}</div>}

                  <input
                    type="address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setErrors(prevErrors => ({ ...prevErrors, address: '' }));
                    }}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Address"
                  />
                  {errors.address && <div className="error-message">* {errors.address}</div>}

                  <div className='registerBtnofregisterPage'>
                    <button type="submit" className="register-button">
                      Register
                    </button>
                  </div>
                </form>
                <div className='dontaccountSignUp'>
                  <p>Already have an account? <Link to="/login">Log In</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default Register;
