import React, { useState } from 'react';
import './Login.css';
// import googlelogo from '../../images/googleLogo.png'
import loginpagemodelimage from '../../images/loginPagemodelImg.jpg'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate ,useLocation} from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../context/auth';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [auth,setAuth]=useAuth();
  // const [loading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };


//   const handleloginwithgoogle =()=>{
// window.open('http://localhost:8080/auth/google/callback',"_self")
//   }
// const handleLoginWithGoogle = async () => {
//   try {
//     // Redirect the user to the backend route for Google OAuth authentication
//     window.location.href = `${process.env.REACT_APP_API}/auth/google`;
//   } catch (error) {
//     console.error('Error occurred during Google authentication:', error);
//   }
// };

// useEffect(() => {
//   const handleAuthentication = async () => {
//     try {
  
//       const res = await axios.get(`${process.env.REACT_APP_API}/login/success`);
//       const { user, token } = res.data;
// console.log("userdekhna ",user)
//       if (user && token) {
//         setAuth({ user, token });
//         localStorage.setItem('auth', JSON.stringify({ user, token }));
//       } else {
//         console.error('Failed to retrieve user details');
//       }
//     } catch (error) {
//       console.error('Error occurred during user authentication:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   handleAuthentication(); 
// }, [setAuth]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email, password
        })
      if (res && res.data.success) {
        toast.success(res.data && res.data.message)
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem("auth",JSON.stringify(res.data))
        onLoginSuccess();
        navigate(location.state || '/')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('Something Went Wrong')
    }
    setErrors({});

  };
  return (
    <Layout title={'Login -KidzGlam Corner'}>
    <div>
  
   
      <div className='loginpagecontainer'>
        <div className='loginpagemaindiv'>
          <div className='rightlogindiv'>

            <img className='girlloginimage' src={loginpagemodelimage} alt="LoginGirl" />
          </div>
          <div className='leftlogindiv'>
              <form className="form" onSubmit={handleSubmit}>
            <div className="login-container">

              <h2 className='welcomeheading'>Welcome!</h2>

              {/* <button className="google-login" onClick={handleLoginWithGoogle}>
                <img src={googlelogo} alt="Google Logo" />
                <p>Login with Google</p>
              </button>  */}

              
              <input
                type="email"
                id="email"
                placeholder='Your Email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setErrors(prevErrors => ({ ...prevErrors, email: '' }));
                }
                }              />
              {errors.email && <div className="error-message">* {errors.email}</div>}

              
             
      <div id="visiblepassword_notvisiblepassword">
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        placeholder='Your Password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }}
        />
        {errors.password && <div className="error-message">* {errors.password}</div>}
      <span className="toggle-password-button" onClick={togglePasswordVisibility}>
        {showPassword ?<VisibilityOffIcon/> : <VisibilityIcon/>}
      </span>
    </div>
              <div className='loginBtnofLoginPage'>
                <button className="login-button" type="submit">
                  Log In
                </button>
              </div>
           

              <div className='checkboxplusforgot'>
                <div className="checkbox">

                  <div htmlFor="keepLoggedIn"><input
                    type="checkbox"
                    id="keepLoggedIn"
                    checked={keepLoggedIn}
                    onChange={() => setKeepLoggedIn(!keepLoggedIn)}
                  /><span style={{ marginLeft: '1rem' }}>Keep me logged in</span></div>
                </div>

                <div className="forgot-password">
                  <Link to="/forgotPassword">Forgot Password</Link>
                </div>
              </div>
              <div className='dontaccountSignUp'>
                <p>Don't have an account? <Link to="/register">SignUp</Link></p>
              </div>

            </div>
               </form>
          </div>
        </div>
      </div>
           
    </div>
    </Layout>
  )
}

export default Login
