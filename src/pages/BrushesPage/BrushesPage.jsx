import React, { useState, useEffect } from 'react'
import './BrushesPage.css';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import brushpagetopimage from '../../images/coverImage.avif'
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { Checkbox, Radio, Skeleton } from 'antd'
import { Prices } from '../../components/Prices';
import { AiOutlineReload } from "react-icons/ai";
// import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart';
import { toast } from 'react-toastify';
import BrushModal from './BrushModal/BrushModal';



function BrushesPage() {

    const skeletonStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: '#e0e0e0',
        borderRadius: '8px',
        margin: '10px',
      };
      const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      };

    // const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useCart();

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    console.log("product length", products.length)

    const handleModalOpen = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
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
        }
    };

    useEffect(() => {
        getAllCategory();
        getTotal();

    }, []);


    //get products
    const getAllProducts = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts(data.products);
        } catch (error) {
            setLoading(false);

            console.log(error);
        }
    };
    //getTOtal COunt
    const getTotal = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-count`);
            setTotal(data?.total);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (page === 1) return;
        loadMore();
        //eslint-disable-next-line
    }, [page]);

    //load more
    const loadMore = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts([...products, ...data?.products]);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // filter by cat
    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter((c) => c !== id);
        }
        setChecked(all);
    };
    useEffect(() => {
        if (!checked.length || !radio.length) getAllProducts();
        //eslint-disable-next-line
    }, [checked.length, radio.length]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
        //eslint-disable-next-line
    }, [checked, radio]);

    //get filterd product
    const filterProduct = async () => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`, {
                checked,
                radio,
            });
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };
    // const addToCart = (product) => {
    //     const existingItemIndex = cart.findIndex(item => item._id === product._id);
    //     if (existingItemIndex !== -1) {
    //         const updatedCart = [...cart];
    //         updatedCart[existingItemIndex].count += 1;
    //         setCart(updatedCart);
    //         toast.success('Item Added to Cart');
    //     } else {
    //         const updatedCart = [...cart, { ...product, count: 1 }];
    //         setCart(updatedCart);
    //         localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    //         toast.success('Item Added to Cart');
    //     }
    // };
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

    return (
        <Layout title={'BrushPage-KidzGlam Corner'}>

            <div className='brushpagecontainer'>
                <div className='brushpagevideosection'>
                    <img src={brushpagetopimage} alt="BrushPageHeroImage" />
                </div>
                <p style={{ color: 'red' , textAlign:'center'}}>
  Please note: The product listing may take some time as this project is hosted on a free server.
</p>                <div id="gistesyfont" className='bannerLeftHeading' style={{ textAlign: 'center', padding: '4rem 0rem 1rem 0rem' }}>Make Up Brushes</div>
                <div className='brushpagemaincontainer'>
                    <div className='leftbrushpagemaincontainer'>

                        <div className='leftbrushpagemaincontainermain'>
                            <p>Home &gt; FaceBrush</p>

                            <h4 className="text-center">Filter By Category</h4>
                            <div className="d-flex flex-column">
                            {categories.length > 0 ? (
                                    categories.map((c) => (
                                        <Checkbox
                                            key={c._id}
                                            onChange={(e) => handleFilter(e.target.checked, c._id)}
                                        >
                                            {c.name}
                                        </Checkbox>
                                    ))
                                ) : (
                                    <Skeleton count={5} height={30} />
                                )}
                            </div>

                            {/* price filter */}
                            <h4 className="text-center mt-4">Filter By Price</h4>
                            <div className="d-flex flex-column">
                                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                                    {Prices?.map((p) => (
                                        <div key={p._id}>
                                            <Radio value={p.array}>{p.name}</Radio>
                                        </div>
                                    ))}
                                </Radio.Group>
                            </div>

                            <div className="d-flex flex-column">
                                <button
                                    className="btn btn-danger mt-3"
                                    onClick={() => window.location.reload()}
                                >
                                    RESET FILTERS
                                </button>
                            </div>
                          
                        </div>


                    </div>
                    <div className='rightbrushpagemaincontainer'>
                        {/* {JSON.stringify(radio,null,4)} */}
                        <div id="brushcontaineroverrride" className="container">
                            <div className="box-container">
                            {products.length > 0 ? (
                  products?.map((p) => (
        <div className='maincardofeachproductofbrushpage'>
            <div className="card m-2 box" style={{ width: "95%" }} key={p._id}>
                {p.photos.length > 0 && (
                    <div className="imageandliveviewofbrushpage">
                        <img
                            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo?photo_id=${p.photos[0]._id}&product_id=${p._id}`}
                            className="card-img-top brushpageimgindiv"
                            alt={p.photos[0]._id} // Use photo _id as alt text
                        />
                    </div>
                )}
                <div>
                    <button className="btnliveviewofbrushpage" onClick={() => handleModalOpen(p)}>Live View</button>
                </div>
            </div>
            <div style={{ paddingLeft: '1rem' }}>
                <div className='nameofbrush eachbrushnameemonsterrat'>{p.name}</div>
                <div className='pricewishcart'>
                    <div className='leftpricewishcart'>
                        <span className='eachbrushpricemonsterrat'>Rs.{p.price} <s style={{ fontSize: '0.6rem', fontWeight: '400' }}>Rs.{p.price * 1.2}</s></span>
                        <span className='eachbrushinconsterrat'>Incl.of all taxes</span>
                        <div style={{ whiteSpace: 'nowrap' }}>
                            <span style={{ color: '#A04060', fontSize: '1.5rem', lineHeight: '1.5rem', display: 'inline-block' }}>****** </span>
                            <span style={{ color: '#631E35', fontSize: '0.9rem', lineHeight: '1rem', display: 'inline-block', verticalAlign: 'top' }}>(102)</span>
                        </div>
                    </div>
                    <div className='rigtpricewishcart'>
                        <ShoppingCartIcon onClick={() => addToCart(p)} />
                    </div>
                </div>
            </div>
        </div>
    ))
) : (
    <div style={gridStyle}>
      {[...Array(24)].map((_, index) => (
        <div key={index} style={skeletonStyle}></div>
      ))}
    </div>
)}

                                <BrushModal open={modalOpen} onClose={handleModalClose} product={selectedProduct} />



                            </div>
                            <div className="m-2 p-3">
                                {products && products.length < total && (
                                    <button
                                        className="btn loadmoreofbrushpage"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setPage(page + 1);
                                        }}
                                    >
                                        {loading ? (
                                            "Loading ..."
                                        ) : (
                                            <>
                                                {" "}
                                                Loadmore <AiOutlineReload style={{ marginLeft: '1rem' }} />
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>                        </div>

                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default BrushesPage


