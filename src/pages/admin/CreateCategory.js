import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { toast } from "react-toastify";
import axios from 'axios';
import './AdminDashboard.css'
import CategoryForm from '../../components/Form/CategoryForm';
import { Modal } from "antd";

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");

    //handle Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/category/create-category`, {
                name,
            });
            if (data?.success) {
                toast.success(`${name} is created`);
                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("somthing went wrong in input form");
        }
    };

    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`);
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something wwent wrong in getting catgeory");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    //handle -category
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.put(
            `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
            { name: updatedName }
          );
          if (data?.success) {
            toast.success(`${updatedName} is updated`);
            setSelected(null);
            setUpdatedName("");
            setVisible(false);
            getAllCategory();
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.log(error);
        }
      };

       //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

    return (
        <Layout title={'CreateCategory -KidzGlam Corner'}>
            <div className=" admindashboard">
                <div className="mainadmindashboard">
                    <div className=" leftsideadmindashboard">
                        <AdminMenu />
                    </div>
                    <div className="rightsideadmindashboard ">
                        <h4 className='dashboardredtext'>Manage Category</h4>
                        <div className="p-3">
                            <CategoryForm
                                handleSubmit={handleSubmit}
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className="mainrightsideadmindashboard">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className='createcategorytext'>Name</th>
                                        <th scope="col" className='createcategorytext'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((c) => (
                                        <>
                                            <tr>
                                                <td key={c._id}>{c.name}</td>
                                                <td className='d-flex'>
                                                    <button
                                                        className="btn editbtnofcreatecategory "
                                                    onClick={() => {
                                                      setVisible(true);
                                                      setUpdatedName(c.name);
                                                      setSelected(c);
                                                     }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn editbtnofcreatecategory "
                                                    onClick={() => {
                                                        handleDelete(c._id);
                                                    }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Modal  onCancel={() => setVisible(false)}
              footer={null}
              open={visible}
            >
 <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
              </Modal>
                </div>
            </div>
        </Layout>
    )
}

export default CreateCategory
