import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { useCart } from "../../../context/cart";
import "./BrushModal.css";

import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function BrushModal({ open, onClose, product }) {
  // function BrushModal() {

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [cart, setCart] = useCart();



  useEffect(() => {
    setSelectedPhotoIndex(0);
  }, [open]);

  const handleClose = () => {
    onClose && onClose();
  };
  const addToCart = (product) => {
    if (!product) {
      return;
    }
    const existingItemIndex = cart.findIndex((item) => item._id === product._id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].count += 1;
      setCart(updatedCart);
      toast.success("Item Added to Cart");
    } else {
      const newCartItem = {
        _id: product._id,
        name: product.name,
        price: product.price,
        count: 1
      };
      setCart([...cart, newCartItem]);
      toast.success("Item Added to Cart");

      const updatedCartItems = [...cart, newCartItem];
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    }
  };

  const handleThumbnailClick = (index) => {
    setSelectedPhotoIndex(index);
  };
  return (
    <>
      
             

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="lg"  // You can also use 'sm', 'lg', or 'xl' based on your requirement
        PaperProps={{
          style: { width: '95%', borderRadius: '3rem', height: '85%', backgroundColor: '#FFCFDF' },
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <Box className="dailogmaincontainer">

          <DialogTitle id="modal-modal-title"> {product?.name}</DialogTitle>
          <DialogContent        >
            <div className="brushmodalvidandimages">
              <div className="brushmodalvideo">
                <iframe
                  className="video-iframebrushmodal"
                  src="https://www.youtube.com/embed/AP3PXMRo4DI?si=VU_oY0GWp4ZgmGa-"
                  alt="VIDEO"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="brushmodalimages">
                <div className="brushmodalimageshifter">
                  <div className='brushmodelimagediv'>
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo?photo_id=${product?.photos[selectedPhotoIndex]._id}&product_id=${product?._id}`}
                      alt="brushimage"
                      className="brushmodalrightmainimage"
                    />
                  </div>
                  <div className='brushmodelimagenofodiv'>

                    {product?.photos?.map((element, index) => (
                      <img
                        key={element._id}
                        src={`${process.env.REACT_APP_API}/api/v1/product/product-photo?photo_id=${element._id}&product_id=${product._id}`}
                        className={`card-img-top brushpageimgindiv ${index === selectedPhotoIndex ? "selected" : ""
                          }`}
                        alt={element.name}
                        onClick={() => handleThumbnailClick(index)}
                      />
                    ))}
                  </div>
                </div>
                <div className="brushmodeldescription">
                  <div className="brushmodeldescriptionheading">Key Points:</div>
                  <div className="brushmodeldescription_points">
                    <DialogContentText>
                      <ul>
                        {product?.description.split("\n").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                 
                    </DialogContentText>
                  </div>
                </div>
              </div>
            </div>
            <Typography
              id="modal-modal-description"
              variant="body1"
              style={{ textAlign: "center", marginTop: "1.5rem" }}
            >
              <span style={{ fontWeight: "550", fontSize: "1.2rem" }}>
                {" "}
                Rs.{product && product.price}{" "}
              </span>
              <span style={{ fontWeight: "400", fontSize: "0.8rem" }}>
                <s> Rs.{Math.round(product?.price * 1.1)} </s> Incl.of all taxes
              </span>
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="btnliveviewofbrushpage"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>

        </Box>

      </Dialog>
    </>
  );
}

export default BrushModal;
