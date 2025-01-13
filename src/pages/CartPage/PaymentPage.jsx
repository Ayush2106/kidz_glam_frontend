import React from 'react'
import './CartPage.css';
import { useLocation } from 'react-router-dom';
function PaymentPage() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalPrice = searchParams.get('totalPrice');
  return (
    <div className='paymentpagecontainer'>
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

                    <div className='pricingcartpage'>
                        <div className='twopartpricingcartpage'>
                            <p style={{ fontSize: '1.2rem', fontWeight: '550' }}>SubTotal</p>
                            <p style={{ fontSize: '1.2rem', fontWeight: '550' }}>Rs.{totalPrice}</p>
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
                            <p style={{ fontSize: '1.2rem', fontWeight: '550' }}>Rs.{totalPrice}</p>
                        </div>
                    </div>
                    <div className='procesdcartpage'>Proceed to Whatsapp</div>
                </div>
    </div>
  )
}

export default PaymentPage
