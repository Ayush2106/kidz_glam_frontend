import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import './AdminDashboard.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const { Option } = Select;

function UpdateProduct() {
  const navigate = useNavigate();
  const params = useParams();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [shipping, setShipping] = useState('');
      //eslint-disable-next-line
  const [photos, setPhotos] = useState([]);
  const [id, setId] = useState('');

  // Get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`);
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setVideo(data.product.video);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong in getting categories');
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Handle file change
  // const handleFileChange = (e) => {
  //   const selectedFiles = Array.from(e.target.files);
  //   const newPhotos = selectedFiles.filter((file) => file.size <= 1024 * 1024);
  //   if (newPhotos.length !== selectedFiles.length) {
  //     toast.error('Some files exceed the size limit (1MB) and were not added.');
  //   }
  //   setPhotos([...photos, ...newPhotos]);
  // };

  // Update product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append('name', name);
      productData.append('description', description);
      productData.append('video', video);
      productData.append('price', price);
      productData.append('quantity', quantity);
      productData.append('category', category);
      photos.forEach((photo) => {
        productData.append('files', photo);
      });
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.success('Product Updated Successfully');
        navigate('/dashboard/admin/products');
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <Layout title={'CreateProduct -KidzGlam Corner'}>
      <div className="admindashboard">
        <div className="mainadmindashboard">
          <div className="leftsideadmindashboard">
            <AdminMenu />
          </div>
          <div className="rightsideadmindashboard">
            <h4 className="dashboardredtext">Update Product</h4>
            <div className="p-3">
              <Select
                variant={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3 choosecatinproduct"
                onChange={(value) => {
                  setCategory(value);
                }}
                value={category}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>

              {/* <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12 choosecatinproduct">
                  Upload Photos
                  <input
                    type="file"
                    name="files"
                    accept="image/*"
                    onChange={handleFileChange}
                    multiple
                    hidden
                  />
                </label>
                <div className="form-text" style={{ fontSize: '0.8rem' }}>
                  * File size should be less than 1MB.
                </div>
              </div> */}

              {/* <div className="mb-3">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(photo)}
                    alt={`product_photo_${index}`}
                    height={'150px'}
                    className="img img-responsive mr-2"
                    style={{ maxHeight: '150px', maxWidth: '100%' }}
                  />
                ))}
              </div> */}

              <div className="mb-3">
              <TextField
                  type="text"
                  value={video}
                  label="Enter Video URL"
                  className="form-control choosecatinproduct"
                  onChange={(e) => setVideo(e.target.value)}
                  multiline
                  maxRows={4}
                  autoFocus
                />
              </div>
              <div className="mb-3">
              <TextField
                  type="text"
                  value={name}
                  label="Write a Name"
                  className="form-control choosecatinproduct"
                  onChange={(e) => setName(e.target.value)}
                  multiline
                  maxRows={4}
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  label="Write a Description"
                  className="form-control choosecatinproduct"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
              <TextField
                  type="number"
                  value={price}
                  label="Write a Price"
                  className="form-control choosecatinproduct"
                  onChange={(e) => setPrice(e.target.value)}
                  multiline
                  maxRows={4}
                  autoFocus
                />
              </div>

              <div className="mb-3">
              <TextField
                  type="number"
                  value={quantity}
                  label="Write a Quantity"
                  className="form-control choosecatinproduct"
                  onChange={(e) => setQuantity(e.target.value)}
                  multiline
                  maxRows={4}
                  autoFocus
                />
              </div>

              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3 choosecatinproduct"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                  value={shipping ? 'yes' : 'No'}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn editbtnofcreatecategory" onClick={handleUpdate}>
                  UPDATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UpdateProduct;
