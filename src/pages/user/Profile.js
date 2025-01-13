import React, { useState, useEffect } from "react";
import UserMenu from '../../components/Layout/UserMenu'
import Layout from '../../components/Layout/Layout'
import '../admin/AdminDashboard.css';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { toast } from "react-toastify"
import TextField from '@mui/material/TextField';

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/profile`, {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={'Profile -KidzGlam Corner'}>
      <div className=" admindashboard">
        <div className="mainadmindashboard">
          <div className=" leftsideadmindashboard">
            <UserMenu />
          </div>
          <div className="rightsideadmindashboard ">
            <h4 className='dashboardredtext'>Your Profile</h4>
            <div className="mainrightsideadmindashboard">
              <div className="col-md-8">
                <div className="form-container" >
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        label="Enter Your Name"
                        multiline
                        maxRows={4}
                        autoFocus
                      />
                    </div>
                    <div className="mb-3">
                      <TextField
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        label="Enter Your Email "
                        disabled
                        multiline
                        maxRows={4}
                        autoFocus
                      />
                    </div><div className="mb-3">
                      <TextField
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        label="Password"
                        password
                        maxRows={4}
                        autoFocus
                      />
                    </div><div className="mb-3">
                      <TextField
                       type="text"
                       value={address}
                       onChange={(e) => setAddress(e.target.value)}
                       className="form-control"
                       id="exampleInputEmail1"
                        label="Enter Your Addeess "
                        multiline
                        maxRows={4}
                        autoFocus
                      />
                    </div>
                   
                    <button type="submit" className="btn updatebtnofuserprofile">
                      UPDATE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
