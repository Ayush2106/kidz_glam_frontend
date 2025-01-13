import React from 'react'
import UserMenu from '../../components/Layout/UserMenu'
import Layout from '../../components/Layout/Layout'
import '../admin/AdminDashboard.css';
const Orders = () => {
  return (
    <Layout title={'Orders -KidzGlam Corner'}>
            <div className=" admindashboard">
                <div className="mainadmindashboard">
                    <div className=" leftsideadmindashboard">
                        <UserMenu />
                    </div>
                    <div className="rightsideadmindashboard ">
                        <h4 className='dashboardredtext'>All Orders</h4>
                        {/* <div className="mainrightsideadmindashboard">
                            
                            <h4 className='dashboardredtext'> order No 1 </h4>
                            <h4 className='dashboardredtext'> order No 1 </h4>
                            <h4 className='dashboardredtext'> order No 1 </h4>
                            <h4 className='dashboardredtext'> order No 1 </h4>
                            <h4 className='dashboardredtext'> order No 1 </h4>

                        </div> */}
                         <div className="border-shadow">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Status</th>
                          <th scope="col">Buyes</th>
                          <th scope="col">Order Date</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Process</td>
                          <td>Nama Gaur</td>
                          <td>23 april 4 pm </td>
                          <td> Success</td>
                          <td>2</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container">
                         
                         <div className="col-md-8">
                           <h4>Brush !</h4>
                           <h5>nice brush,soft and long lasting</h5>
                           <p>Price:4000</p>
                         </div>
                         <div className="col-md-8">
                           <h4>Brush !</h4>
                           <h5>nice brush,soft and long lasting</h5>
                           <p>Price:4000</p>
                         </div><div className="col-md-8">
                           <h4>Brush !</h4>
                           <h5>nice brush,soft and long lasting</h5>
                           <p>Price:4000</p>
                         </div><div className="col-md-8">
                           <h4>Brush !</h4>
                           <h5>nice brush,soft and long lasting</h5>
                           <p>Price:4000</p>
                         </div>
                   </div>
                 </div>
               );
               
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default Orders
