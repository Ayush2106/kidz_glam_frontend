import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import './AdminDashboard.css'
import { useAuth } from '../../context/auth'
function AdminDashboard() {
    const [auth] = useAuth();

    return (
        <Layout title={'Dashboard -KidzGlam Corner'}>
            <div className=" admindashboard">
                <div className="mainadmindashboard">
                    <div className=" leftsideadmindashboard">
                        <AdminMenu />
                    </div>
                    <div className="rightsideadmindashboard ">
                        <h4 className='dashboardredtext'>Your Profile</h4>
                        <div className="mainrightsideadmindashboard">
                            <h4 className='dashboardredtext'> Admin Name : {auth?.user?.name}</h4>
                            <h4 className='dashboardredtext'>Admin Email : {auth?.user?.email}</h4>
                            <h4 className='dashboardredtext'> Admin Contact : {auth?.user?.phone}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard
