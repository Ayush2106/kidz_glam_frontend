import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import "./AdminDashboard.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { Grid  , IconButton} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import TextField from '@mui/material/TextField';


const { Option } = Select;

function CreateProduct() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  // eslint-disable-next-line
  const [shipping, setShipping] = useState("");
  const [photos, setPhotos] = useState([]);
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
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

  //create product function
  // const handleCreate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const productData = new FormData();
  //     productData.append("name", name);
  //     productData.append("description", description);
  //     productData.append("video", video);
  //     productData.append("price", price);
  //     productData.append("quantity", quantity);
  //     productData.append("photo", photo);
  //     productData.append("category", category);
  //     const { data } = await axios.post(
  //       `${process.env.REACT_APP_API}/api/v1/product/create-product`,
  //       productData
  //     );
  //     if (data?.success) {
  //         toast.success("Product Created Successfully");
  //         navigate("/dashboard/admin/products");

  //       } else {
  //       toast.error(data?.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("something went wrong");
  //   }
  // };
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("video", video);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("category", category);
      // productData.append("files", photos);
      photos.forEach((photo)=>{
        productData.append("files",photo);
      })
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/create-product`,
        productData,config
      );
      if (data?.success) {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile && selectedFile.size > 1024 * 1024) {
  //     toast.error("File size should be less than 1MB.");
  //   } else {
  //     setPhoto(selectedFile);
  //   }
  // };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newPhotos = selectedFiles.filter((file) => file.size <= 1024 * 1024);
    if (newPhotos.length !== selectedFiles.length) {
      toast.error("Some files exceed the size limit (1MB) and were not added.");
    }
    setPhotos([...photos, ...newPhotos]);
  };
  console.log("photo uploaded", photos);

 const handleDeletePhoto = () =>{
  setPhotos(photos.filter((photo) => photo!== photos[0]));

 }
  return (
    <Layout title={"CreateProduct -KidzGlam Corner"}>
      <div className=" admindashboard">
        <div className="mainadmindashboard">
          <div className=" leftsideadmindashboard">
            <AdminMenu />
          </div>
          <div className="rightsideadmindashboard ">
            <h4 className="dashboardredtext">Create Product</h4>
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
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>

              <div className="mb-3">
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
                <div className="form-text" style={{ fontSize: "0.8rem" }}>
                  * File size should be less than 1MB.
                </div>
              </div>

              <Grid container spacing={2} className="mb-3 photo-grid" >
  {photos.map((photo, index) => (
    <Grid item key={index} xs={12} sm={4} style={{ position: 'relative' }}>
      <IconButton
        aria-label="delete"
        size="small"
        className="delete-icon"
        onClick={() => handleDeletePhoto(index)} // Assuming you have a function to handle photo deletion
        style={{ position: 'absolute', top: 0, right: 0  , backgroundColor: 'red',color:'#fff'}}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
      <img
        src={URL.createObjectURL(photo)}
        alt={`product_photo_${index}`}
        height={"150px"}
        className="img img-responsive"
        style={{ maxHeight: "150px", maxWidth: "100%" }}
      />
    </Grid>
  ))}
</Grid>

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
                  placeholder="Write a Description"
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
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  className="btn editbtnofcreatecategory"
                  onClick={handleCreate}
                >
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateProduct;
