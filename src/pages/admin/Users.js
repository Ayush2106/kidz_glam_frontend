import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import './AdminDashboard.css'
function Users() {
  return (
    <Layout title={'Users -KidzGlam Corner'}>
    <div className=" admindashboard">
        <div className="mainadmindashboard">
            <div className=" leftsideadmindashboard">
                <AdminMenu />
            </div>
            <div className="rightsideadmindashboard ">
                <h4 className='dashboardredtext'>All Users List</h4>
                <div className="mainrightsideadmindashboard">
                    
                    <h4 className='dashboardredtext'> Name of user , details  </h4>
                    <h4 className='dashboardredtext'> Name of user , details  </h4>
                    <h4 className='dashboardredtext'> Name of user , details  </h4>
                    <h4 className='dashboardredtext'> Name of user , details  </h4>
                    <h4 className='dashboardredtext'> Name of user , details  </h4>

                </div>
            </div>
        </div>
    </div>
</Layout>
  )
}

export default Users
