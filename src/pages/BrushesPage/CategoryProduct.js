import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BrushesPage.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import brushpagetopimage from "../../images/coverImage.avif";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { Radio } from "antd";
import { Prices } from "../../components/Prices";
import { useCart } from "../../context/cart";
import { toast } from "react-toastify";
import BrushModal from "./BrushModal/BrushModal";
import Skeleton from "@mui/material/Skeleton";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function CategoryProduct() {
    const params = useParams();
    const [products, setProducts] = useState([]);
    //eslint-disable-next-line
    const [category, setCategory] = useState([]);
    const [cart, setCart] = useCart();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handleModalOpen = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        if (params?.slug) {
            getProductByCat(page);
        }
            //eslint-disable-next-line
    }, [params?.slug, page]);

    const getProductByCat = async (pageNumber) => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`,
                { params: { page: pageNumber, limit: 6 } }
            );
            setProducts(data?.products);
            setCategory(data?.category);
            setTotalPages(data?.totalPages);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const addToCart = (product) => {
        if (!product) return;

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
                count: 1,
            };
            setCart([...cart, newCartItem]);
            toast.success("Item Added to Cart");

            const updatedCartItems = [...cart, newCartItem];
            localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        }
    };

    const filterProductsByPrice = (priceRange) => {
        if (priceRange) {
            const [minPrice, maxPrice] = priceRange;
            return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
        } else {
            return products;
        }
    };

    const handlePageChange = (event, value) => {
        setPage(value);
        setLoading(true);
    };

    return (
        <Layout title={"BrushPage-KidzGlam Corner"}>
            <div className="brushpagecontainer">
                <div className="brushpagevideosection">
                    <img src={brushpagetopimage} alt="BrushPageHeroImage" />
                </div>
                <div id="gistesyfont" className="bannerLeftHeading" style={{ textAlign: "center", padding: "4rem 0rem 1rem 0rem" }}>
                    Make Up Brushes
                </div>
                <div className="brushpagemaincontainer">
                    <div className="leftbrushpagemaincontainer">
                        <div className="leftbrushpagemaincontainermain">
                            <h4 className="text-center mt-4">Filter By Price</h4>
                            <div className="d-flex flex-column">
                                <Radio.Group onChange={(e) => setSelectedPriceFilter(e.target.value)}>
                                    {Prices?.map((p) => (
                                        <div key={p._id}>
                                            <Radio value={p.array}>{p.name}</Radio>
                                        </div>
                                    ))}
                                </Radio.Group>
                                <button className="btn btn-danger mt-3" style={{ width: "60%" }} onClick={() => window.location.reload()}>
                                    RESET FILTERS
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rightbrushpagemaincontainer">
                        {products.length} items found..
                        <div id="brushcontaineroverrride" className="container">
                            <div className="box-container">
                                {loading ? (
                                    <>
                                        {[...Array(6)].map((_, index) => (
                                            <div key={index} className="maincardofeachproductofbrushpage">
                                                <Skeleton variant="rectangular" height={150} />
                                                <div></div>
                                                <div style={{ paddingLeft: "1rem" }}>
                                                    <div className="nameofbrush eachbrushnameemonsterrat">
                                                        <Skeleton />
                                                    </div>
                                                    <div className="pricewishcart">
                                                        <div className="leftpricewishcart">
                                                            <span className="eachbrushpricemonsterrat">
                                                                <Skeleton width={100} />
                                                            </span>
                                                            <span className="eachbrushinconsterrat">
                                                                <Skeleton width={80} />
                                                            </span>
                                                            <div style={{ whiteSpace: "nowrap" }}>
                                                                <Skeleton width={50} />
                                                                <span style={{ color: "#631E35", fontSize: "0.9rem", lineHeight: "1rem", display: "inline-block", verticalAlign: "top" }}>
                                                                    <Skeleton width={40} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="rigtpricewishcart">
                                                            <Skeleton variant="circle" width={40} height={40} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    filterProductsByPrice(selectedPriceFilter)?.map((p) => (
                                        <div className="maincardofeachproductofbrushpage" key={p._id} style={{ maxWidth: '300px' }}>
                                            <div className="card m-2 box" style={{ width: "95%" }}>
                                                {p.photos.length > 0 && (
                                                    <div className="imageandliveviewofbrushpage">
                                                        <img
                                                            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo?photo_id=${p.photos[0]._id}&product_id=${p._id}`}
                                                            className="card-img-top brushpageimgindiv"
                                                            alt={p.photos[0]._id}
                                                        />
                                                    </div>
                                                )}
                                                <div>
                                                    <button className="btnliveviewofbrushpage" onClick={() => handleModalOpen(p)}>
                                                        Live View
                                                    </button>
                                                </div>
                                            </div>
                                            <div style={{ paddingLeft: "1rem" }}>
                                                <div className="nameofbrush eachbrushnameemonsterrat">{p.name}</div>
                                                <div className="pricewishcart">
                                                    <div className="leftpricewishcart">
                                                        <span className="eachbrushpricemonsterrat">
                                                            Rs.{p.price} <s style={{ fontSize: "0.6rem", fontWeight: "400" }}>Rs.{p.price * 1.2}</s>
                                                        </span>
                                                        <span className="eachbrushinconsterrat">Incl.of all taxes</span>
                                                        <div style={{ whiteSpace: "nowrap" }}>
                                                            <span style={{ color: "#A04060", fontSize: "1.5rem", lineHeight: "1.5rem", display: "inline-block" }}>****** </span>
                                                            <span style={{ color: "#631E35", fontSize: "0.9rem", lineHeight: "1rem", display: "inline-block", verticalAlign: "top" }}>{p.ratingsAverage} ({p.ratingsQuantity})</span>
                                                        </div>
                                                    </div>
                                                    <div className="rigtpricewishcart">
                                                        <ShoppingCartIcon onClick={() => addToCart(p)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="pagination-container">
                            <Stack spacing={2}>
                                <Pagination
                                    count={totalPages}
                                    page={page}
                                    onChange={handlePageChange}
                                    variant="outlined"
                                    shape="rounded"
                                    color="secondary"
                                    sx={{ '& .Mui-selected': { backgroundColor: '#631E35', color: 'white' } }}
                                />
                            </Stack>
                        </div>
                    </div>
                </div>
                <BrushModal
                    product={selectedProduct}
                    open={modalOpen}
                    onClose={handleModalClose}
                    addToCart={addToCart}
                />
            </div>
        </Layout>
    );
}

export default CategoryProduct;
