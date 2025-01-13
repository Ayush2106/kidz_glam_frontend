import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBContainer } from 'mdb-react-ui-kit';
import axios from 'axios';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { useCart } from '../../context/cart';
import { toast } from "react-toastify";
import SearchInput from '../Form/SeacrchInput';
import SearchIcon from '@mui/icons-material/Search';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [userdata ,setUserdata]=useState({});
  const ref = useRef(null);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    // Fetch data from the backend API using Axios
    axios.get(`${process.env.REACT_APP_API}/api/v1/product/dropproducts`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && !event.target.classList.contains("navbar-toggler")) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [auth, setAuth] = useAuth();
  const [cart] = useCart();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      {/* For mobile screen */}
      <div className='mainNAVBAR'>
        <div className='navbarformobilescreen'>
          <nav className="navbar navbar-light navbgpink" >
            <button className="navbar-toggler" type="button" onClick={toggleMenu} style={{ color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}>
              <span>  {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />} </span>
            </button>
            <div
              ref={ref}
              className={`collapse navbar-collapse navitemsdiv ${isOpen ? 'show' : ''}`}>
              <ul style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/#banner">Home <span className="sr-only">(current)</span></Link>
                </li>
                {/* checking  */}
                <li className="nav-item active">
                  <MDBContainer className="d-flex justify-content-center  basic">
                    <MDBDropdown>
                      <MDBDropdownToggle tag="span" className='li_a_shop'>Shop</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        {products.map(product => (
                          <MDBDropdownItem key={product.name}>
                            {product.submenus.length > 0 ? (
                              <>
                                <Link to={`/category/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>{product.name} &raquo;</Link>
                                <ul className="dropdown-menu dropdown-submenu">
                                  {product.submenus.map((submenu, index) => (
                                    <MDBDropdownItem key={index}>
                                      <Link to={`/category/${submenu.name.toLowerCase().replace(/\s+/g, '-')}`}>{submenu.name}</Link>
                                      {submenu.submenus && submenu.submenus.length > 0 && (
                                        <ul className="dropdown-menu dropdown-submenu">
                                          {submenu.submenus.map((subsubmenu, subindex) => (
                                            <MDBDropdownItem key={subindex}>
                                              <Link to={`/category/${subsubmenu.toLowerCase().replace(/\s+/g, '-')}`}>{subsubmenu}</Link>
                                            </MDBDropdownItem>
                                          ))}
                                        </ul>
                                      )}
                                    </MDBDropdownItem>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <Link to={`/category/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>{product.name}</Link>
                            )}
                          </MDBDropdownItem>
                        ))}
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBContainer>
                </li>
                {/* checking */}


                <li className="nav-item active">
                  <a className="nav-link" href="/#about">AboutUs</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/#contact">ContactUs</a>
                </li>
                <li>
                  <SearchInput />
                </li>
                {!auth.user ? (
                  <>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item active loginli">
                      <Link to="/login" className='loginli_text'>Login</Link>
                    </li>
                  </>
                ) : (
                  <>
                            <li className="nav-item active">
                    <MDBDropdown>
                      <MDBDropdownToggle tag="span">
                        {auth?.user?.name}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem>
                          <Link to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>Dashboard</Link>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <Link onClick={handleLogout} to="/login">Logout</Link>
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </li>
                  </>
                )}
                <div className="cart-icon">
                  <Link to="/cart">
                    <ShoppingCartIcon style={{ fontSize: '1.8rem', color: 'black' }} />
                  </Link>
                  <span className="cart-count">{cart?.length}</span>
                </div>
              </ul>
            </div>
            {!isOpen && (
              <>
                <div className='imagehyglowLogo' >
                  <Link style={{ display: 'flex' }} to="/">
                    <img src="/logofly.png" alt="Logo" />
                  </Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className='loginli'>Login</div>
                  <SearchIcon />
                </div>
              </>
            )}
          </nav>
        </div>

        {/* For desktop screen */}
        <div className='navbarfordesktopscreen'>
          <nav className="navbar navbar-expand-lg navbar-light navbgpink">
            <ul style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              {/* checking  */}
              <li className="nav-item active">
                <MDBContainer className="d-flex justify-content-center  basic">
                  <MDBDropdown>
                    <MDBDropdownToggle tag="span" className='li_a_shop'>Shop</MDBDropdownToggle>
                    <MDBDropdownMenu>
                      {products.map(product => (
                        <MDBDropdownItem key={product.name}>
                          {product.submenus.length > 0 ? (
                            <>
                              <Link to={`/category/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>{product.name} &raquo;</Link>
                              <ul className="dropdown-menu dropdown-submenu">
                                {product.submenus.map((submenu, index) => (
                                  <MDBDropdownItem key={index}>
                                    <Link to={`/category/${submenu.name.toLowerCase().replace(/\s+/g, '-')}`}>{submenu.name}</Link>
                                    {submenu.submenus && submenu.submenus.length > 0 && (
                                      <ul className="dropdown-menu dropdown-submenu">
                                        {submenu.submenus.map((subsubmenu, index) => (
                                          <MDBDropdownItem key={index}>
                                            <Link to={`/category/${subsubmenu.toLowerCase().replace(/\s+/g, '-')}`}>{subsubmenu}</Link>
                                          </MDBDropdownItem>
                                        ))}
                                      </ul>
                                    )}
                                  </MDBDropdownItem>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link to={`/category/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>{product.name}</Link>
                          )}
                        </MDBDropdownItem>
                      ))}
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBContainer>
              </li>
              {/* checking */}


              <li className="nav-item active">
                <a className="nav-link" href="/#about">AboutUs</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/#contact">ContactUs</a>
              </li>
              <img className="leftsidenavbarmenu" src="/logofly.png" alt="Logo" />

              {/* <li className="nav-item active">
               <Link className="nav-link" to="/trackorder">TrackOrder</Link>
                  </li> */}
              <li>
                <SearchInput />
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                  <li className="nav-item active loginli">
                    <Link to="/login" className='loginli_text nav-link'>Login</Link>
                  </li>
                </>
              ) : (
                <>
                  {/* <li className="nav-item dropdown active">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                      {auth?.user?.name}
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <Link className="dropdown-item nav-link" to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>DashBoard</Link>
                      <Link className="dropdown-item nav-link" onClick={handleLogout} to="/login">Logout</Link>

                    </div>
                  </li> */}
                  <li className="nav-item active">
                    <MDBDropdown>
                      <MDBDropdownToggle tag="span" className='li_a_shop'>
                        {auth?.user?.name}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem>
                          <Link to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>Dashboard</Link>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <Link onClick={handleLogout} to="/login">Logout</Link>
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </li>
                </>
              )
              }
              {/* <SearchIcon style={{fontSize:'1.8rem'}}/> */}
              <div className="cart-icon">
                <Link to="/cart"><ShoppingCartIcon style={{ fontSize: '1.8rem', color: 'black' }} />
                </Link>
                <span className="cart-count">{cart?.length}</span>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
