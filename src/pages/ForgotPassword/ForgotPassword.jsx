import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import '../LoginPage/Login.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import loginpagemodelimage from '../../images/loginPagemodelImg.jpg';
import { useNavigate } from 'react-router-dom';


function ForgotPassword() {
  const navigate =useNavigate();
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Simple email format validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    } 


    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, { email });
      if (response.data.success) {
        toast.success("OTP sent to your email");
        navigate("/resetPassword");

      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Failed to send OTP. Please try again later.");
      toast.error("something went wrong");

    }
    setLoading(false);
  };

  return (
    <Layout title={'ForgotPassword-KidzGlam Corner'}>
      <div>
        <div className='loginpagecontainer'>
          <div className='loginpagemaindiv'>
            <div className='rightlogindiv'>
              <img className='girlloginimage' src={loginpagemodelimage} alt="LoginGirl" />
            </div>
            <div className='leftlogindiv'>
              <form className="form" onSubmit={handleSubmit}>
                <div className="login-container">
                  <h2 className='welcomeheading'>Forgot Password</h2>
                    <input
                    placeholder='Enter Your Email'
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  {error && <p className="error-message">{error}</p>}
                  <div className='loginBtnofLoginPage'>
                  <button type="submit" className="login-button"disabled={loading}>
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                    </div>
              
                </div>
              </form>
              <div className='dontaccountSignUp'>
                <p style={{textAlign:'center',marginTop:'1rem'}}>Remember your password? <Link to="/login">Log In</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ForgotPassword
