import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import '../admin/AdminDashboard.css';
import { useAuth } from '../../context/auth';
function Dashboard() {
  const [auth] = useAuth();

  return (
    <Layout title={'Dashboard -KidzGlam Corner'}>
            <div className=" admindashboard">
                <div className="mainadmindashboard">
                    <div className=" leftsideadmindashboard">
                        <UserMenu />
                    </div>
                    <div className="rightsideadmindashboard ">
                        <h4 className='dashboardredtext'>Your Profile</h4>
                        <div className="mainrightsideadmindashboard">
                            <h4 className='dashboardredtext'> Your Name : {auth?.user?.name}</h4>
                            <h4 className='dashboardredtext'>Your Email : {auth?.user?.email}</h4>
                            <h4 className='dashboardredtext'> Your Contact : {auth?.user?.phone}</h4>
                            <h4 className='dashboardredtext'> Your Address : {auth?.user?.address}</h4>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  )
}

export default Dashboard
