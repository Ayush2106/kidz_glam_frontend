import React,{useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { useCart } from '../../context/cart'
import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
const CartPage = () => {
  const navigate =useNavigate();
  const [auth] = useAuth();
  const [cart, setCart] = useCart();

// Function to increment item count
const increment = (index) => {
  const updatedCart = [...cart];
  updatedCart[index].count += 1;
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage

};

// Function to decrement item count
const decrement = (index) => {
  const updatedCart = [...cart];
  if (updatedCart[index].count > 1) {
    updatedCart[index].count -= 1;
  } else {
    // Remove the item from the cart if count is 1
    updatedCart.splice(index, 1);
  }
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage

};

  // Function to calculate total price
  const totalPrice = () => {
    try {
      const total = cart.reduce((accumulator, item) => {
        return accumulator + item.price * item.count;
      }, 0);

      return total.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };



  //detele item
  // const removeCartItem = (pid) => {
  //   try {
  //     let myCart = [...cart];
  //     let index = myCart.findIndex((item) => item._id === pid);
  //     myCart.splice(index, 1);
  //     setCart(myCart);
  //     localStorage.setItem("cart", JSON.stringify(myCart));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Update local storage whenever cart changes
  }, [cart]);

  return (
    <Layout title={'Cart-KidzGlam Corner'}>
  <div className='topmostcartcontainer'>
  {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`}
    <div className='cartmaincontainer'>
      <div id='cartheadingatsmallscreenonly'>Cart</div>
      <div className='leftcartdivcontainer'>
        <div id='cartheadingleftcartdivcontainer' className='cartheadingleftcartdivcontainer'>Cart</div>
        {cart.map((item, index) => (
          <div key={index} className='cartproductimg_name_price_btns'>
            {console.log('item of cart',item)}
            <div className='imganddetailsatcartpage'>
              <div className='firstdivofcartproductimg_name_price_btns'>
                <img src={`${process.env.REACT_APP_API}/api/v1/product/produuct-photo/${item._id}`}
                 alt={item.name} />
                  {/* <img
                              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo?photo_id=${item?.photos[0]?._id}&product_id=${item?._id}`}
                              className="card-img-top brushpageimgindiv"
                              alt={item?.photos[0]?._id} // Use photo _id as alt text
                            /> */}
              </div>
              <div className='seconddivofcartproductimg_name_price_btns'>
                <p className='firstheadingseconddiv' style={{ fontWeight: '500' }}>{item.name}</p>
                <p className='secondrsinstock' style={{ fontSize: '1rem', fontWeight: '550' }}>
                  <span>{item.price}</span>
                  <span className='pillarsecondsinstock' style={{ margin: '0rem 0.3rem' }}>|</span>
                  <span style={{ color: '#00BA34' }}>In stock</span>
                </p>
                <div className='countercartpagediv'>
                  <button onClick={() => decrement(index)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => increment(index)}>+</button>
                </div>
              </div>
            </div>
            <div className='thirddivofcartproductimg_name_price_btns' style={{ fontWeight: '550' }}>
            <div className='countercartpagediv'>
            <button onClick={() => decrement(index)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => increment(index)}>+</button>
                            </div>
              <span style={{ paddingTop: '0.5rem' }}> Rs.{item.price * item.count}</span>
            </div>
          </div>
        ))}
        {/* Total quantity */}
        <div className='carttopaymentshifterpage'>
          <hr />
          <div className='topay_price'>
            <div className='toPayofleftcart'>
              <div style={{ fontWeight: '600' }}>To Pay</div>
              <span style={{ fontSize: '0.8rem' }}>Incl. of all taxes and charges</span>
            </div>
            <div className='priceofleftcart'>
              <div><s>{totalPrice()}</s> <span style={{ fontWeight: '600' }}>{totalPrice()}</span></div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'Helvetica' }}>Savings Rs.100</span>
            </div>
          </div>
        </div>
      </div>
      <div className='pinkcheckoutshifteratlasttoleft'>
        {/* <div style={{ textAlign: 'center' }}>Home 1205, km 29, Noida, Ut...<span style={{ fontWeight: 'bold', color: '#BC4366' }}>Change</span></div> */}
        <div style={{ textAlign: 'center' }}>
  {auth?.user?.address ? (
    <>
      <div>{auth.user.address}</div>
      <span style={{ fontWeight: 'bold', color: '#BC4366', cursor: 'pointer' }} onClick={() => navigate("/dashboard/user/profile")}>Change</span>
    </>
  ) : (
    <>
      <div>
        {auth?.token ? (
          <button className="btn btn-outline-warning" onClick={() => navigate("/dashboard/user/profile")}>
            Update Address
          </button>
        ) : (
          <button className="btn btn-outline-warning" onClick={() => navigate("/login", { state: "/cart" })}>
            Please Login to checkout
          </button>
        )}
      </div>
    </>
  )}
</div>

        <div className='pinkcheckouttopayandproceed'>
          <div className='topayandpricepinkcheckut' style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '550', fontSize: '1.2rem' }}>To Pay</div>
            <div> <span style={{ fontWeight: '600' }}>Rs.{totalPrice()}</span></div>
          </div>
          <div className='procesdcartpagediv'>
          <NavLink to={`/paymentPage?totalPrice=${totalPrice()}`} style={{ textDecoration: 'none' }}>         
               <div className='procesdcartpage'>Proceed to Payment</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='rightcartdivcontainer'>
        <div className='cartheadingleftcartdivcontainer'>Delivery</div>
        <div className='deliveryLogoplusprice' style={{ width: '60%' }}>
          <p style={{ backgroundColor: 'white', margin: 'auto 0', padding: '1.2rem 2rem', marginRight: '0.5rem', borderRadius: '0.5rem' }}></p>
          <p style={{ margin: 'auto 0' }}>Express Rs. 99</p>
        </div>
        <p style={{ marginTop: '0.2rem' }}>Delivery date: June 14,2024</p>
        <span style={{ display: 'block', height: '1px', borderBottom: '1px dotted black' }}></span>
        {/* <div className='deliverypromoplusapply' style={{ width: '90%' }}>
          <span >PromoCode</span>
          <span style={{ backgroundColor: 'white', padding: '0.5rem 0.7rem', borderRadius: '0.5rem', fontSize: '1.1rem', fontWeight: '550', border: '1px solid black' }}>Apply</span>
        </div> */}
        <p style={{ marginTop: '0.2rem' }}>20% off discount</p>
        <span style={{ display: 'block', height: '1px', borderBottom: '1px dotted black' }}></span>

        {/* Total price */}
        <div className='pricingcartpage'>
          <div className='twopartpricingcartpage'>
            <p style={{ fontSize: '1.2rem', fontWeight: '550' }}>SubTotal</p>
            <p style={{ fontSize: '1.2rem', fontWeight: '550' }}>Rs.{totalPrice()}</p>
          </div>
          {/* <div className='twopartpricingcartpage'>
            <p>Discount</p>
            <p>(20%)-200</p>
          </div> */}
          <div className='twopartpricingcartpage'>
            <p>Delivery</p>
            <p>0</p>
          </div>
          <div className='twopartpricingcartpage'>
            <p>Tax</p>
            <p>100</p>
          </div>
          <span style={{ display: 'block', height: '1px', borderBottom: '1px dotted black' }}></span>
          <div className='twopartpricingcartpage'>
            <p style={{ fontSize: '1.2rem', fontWeight: '550' }}>Total</p>
            <p style={{ fontSize: '1.2rem', fontWeight: '550' }}>Rs.{totalPrice()}</p>
          </div>
        </div>
        <div className='procesdcartpage'>Proceed to Whatsapp</div>
        <div>{auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h4>Current Address</h4>
                    <h5>{auth?.user?.address}</h5>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Plase Login to checkout
                    </button>
                  )}
                </div>
              )}</div>
      </div>
    </div>
  </div>
</Layout >

  )
}

export default CartPage
