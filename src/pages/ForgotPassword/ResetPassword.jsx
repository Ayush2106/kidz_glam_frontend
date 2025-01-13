import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import '../LoginPage/Login.css';
import axios from "axios";
import { toast } from "react-toastify";
import loginpagemodelimage from '../../images/loginPagemodelImg.jpg';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const navigate =useNavigate();

  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

     // Simple email format validation
    //  const emailRegex = /\S+@\S+\.\S+/;
    //  if (!emailRegex.test(email)) {
    //    newErrors.email = "Please enter a valid email address.";
    //  } 
 

    // Validate OTP
    if (!otp.trim()) {
      newErrors.otp = 'OTP is required';
    } else if (otp.length !== 6) {
      newErrors.otp = 'OTP must be 6 digits';
    }

    // Validate new password
    if (!newPassword.trim()) {
      newErrors.newPassword = 'New password is required';
    } else if (newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters long';
    }

    // Validate confirm password
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (Object.keys(newErrors).length === 0) {
        try {
          const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/reset-password`, {
            email,
            otp,
            newPassword
          });
          if (response.data.success) {
            toast.success(response.data.message);
            navigate("/login");
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          console.error(error.response.data);
          toast.error("something went wrong");
        }
  
        // Reset form fields after successful submission
        setEmail('');
        setOtp('');
        setNewPassword('');
        setConfirmPassword('');
      }
    };
    
  return (
    <Layout title={'ResetPassword-KidzGlam Corner'}>
      <div>
        <div className='loginpagecontainer'>
          <div className='loginpagemaindiv'>
            <div className='rightlogindiv'>
              <img className='girlloginimage' src={loginpagemodelimage} alt="LoginGirl" />
            </div>
            <div className='leftlogindiv'>
              <form className="form" onSubmit={handleSubmit}>
                <div className="login-container">
                  <h2 className='welcomeheading'>Reset Password</h2>
                 
                  {/* {errors && <p className="error-message">{errors}</p>} */}
                  <div className='otp-input'>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      style={{color:'black'}}
                      renderSeparator={<span>_</span>}
                      renderInput={(props, index) => (
                        <input
                          {...props}
                          key={index} 
                          style={{ width:'40px' ,fontSize: '1.1rem' }} 
                        />
                      )}                
                          />              
                       </div>
                  {errors.otp && <div className="error-message">* {errors.otp}</div>}
                  <input
                    placeholder='Enter Your Email'
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  <input
                    type="password"
                    placeholder='New Password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {errors.newPassword && <div className="error-message">* {errors.newPassword}</div>}
                  <input
                    type="password"
                    placeholder='Confirm New Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && <div className="error-message">* {errors.confirmPassword}</div>}
                  <div className='loginBtnofLoginPage'>
                    <button className="login-button" type="submit">
                      Reset Password
                    </button>
                  </div>
                </div>
              </form>
              {/* <div className='dontaccountSignUp'>
                <p style={{textAlign:'center'}}>Remember your password? <Link to="/login">Log In</Link></p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResetPassword
