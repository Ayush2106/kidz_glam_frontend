import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import './AdminDashboard.css'
const Orders = () => {
  return (
    <Layout title={'Orders -KidzGlam Corner'}>
            <div className=" admindashboard">
                <div className="mainadmindashboard">
                    <div className=" leftsideadmindashboard">
                        <AdminMenu />
                    </div>
                    <div className="rightsideadmindashboard ">
                        <h4 className='dashboardredtext'>All Orders</h4>
                        <div className="mainrightsideadmindashboard">
                            
                            <h4 className='dashboardredtext'> order No 1 </h4>
                            <h4 className='dashboardredtext'> order No 1 </h4>
                            <h4 className='dashboardredtext'> order No 1 </h4>
                            <h4 className='dashboardredtext'> order No 1 </h4>
                            <h4 className='dashboardredtext'> order No 1 </h4>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default Orders
