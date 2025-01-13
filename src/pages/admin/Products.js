// import React, { useState, useEffect } from 'react';
// import Layout from '../../components/Layout/Layout';
// import AdminMenu from '../../components/Layout/AdminMenu';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './AdminDashboard.css';
// import Skeleton from '@mui/material/Skeleton';

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Get all products
//     const getAllProducts = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
//             setProducts(data.products);
//             setLoading(false); // Set loading to false after fetching data
//         } catch (error) {
//             console.log(error);
//             toast.error('Something went wrong');
//         }
//     };

//     // Lifecycle method
//     useEffect(() => {
//         getAllProducts();
//     }, []);

//     return (
//         <Layout title={'Products - KidzGlam Corner'}>
//             <div className="admindashboard">
//                 <div className="mainadmindashboard">
//                     <div className="leftsideadmindashboard">
//                         <AdminMenu />
//                     </div>
//                     <div className="rightsideadmindashboard">
//                         <h4 className="dashboardredtext">List Of Products</h4>
//                         <div className="mainrightsideadmindashboard">
//                             <div className="ayushproductsofadmindashb">
//                                 {loading ? (
//                                     // Skeleton loading state
//                                     <>
//                                         {[...Array(9)].map((_, index) => (
//                                             <div key={index} className="card m-2" style={{ width: '15rem' }}>
//                                                 <Skeleton variant="rectangular" height={200} />
//                                                 <div className="cardofproductadmin">
//                                                     <Skeleton />
//                                                     <Skeleton width="80%" />
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </>
//                                 ) : (
//                                     // Actual product content
//                                     <>
//                                         {products?.map((p) => (
//                                             <Link
//                                                 key={p._id}
//                                                 to={`/dashboard/admin/product/${p.slug}`}
//                                                 className="product-link"
//                                             >
//                                                 <div className="card m-2" style={{ width: '15rem' }}>
//                                                     <img
//                                                         src={`${process.env.REACT_APP_API}/api/v1/product/produuct-photo/${p._id}`}
//                                                         className="card-img-top"
//                                                         alt={p.name}
//                                                     />
//                                                     <div className="cardofproductadmin">
//                                                         <h5 className="producttextadmin">{p.name}</h5>
//                                                         {/* <p className="producttextadmin">{p.description}</p> */}
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         ))}
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default Products;



import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';
import Skeleton from '@mui/material/Skeleton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    // Get products for the current page
    const getProducts = async (pageNumber) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`, {
                params: { page: pageNumber, limit: 6 },
            });
            setProducts(data.products);
            setTotalPages(data.totalPages);
            setLoading(false); // Set loading to false after fetching data
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

    // Fetch products when the component mounts and when the page changes
    useEffect(() => {
        getProducts(page);
    }, [page]);

    // Handle page change
    const handlePageChange = (event, value) => {
        setPage(value);
        setLoading(true); // Set loading to true when changing page
    };

    return (
        <Layout title={'Products - KidzGlam Corner'}>
            <div className="admindashboard">
                <div className="mainadmindashboard">
                    <div className="leftsideadmindashboard">
                        <AdminMenu />
                    </div>
                    <div className="rightsideadmindashboard">
                        <h4 className="dashboardredtext">List Of Products</h4>
                        <div className="mainrightsideadmindashboard">
                            <div className="ayushproductsofadmindashb">
                                {loading ? (
                                    // Skeleton loading state
                                    <>
                                        {[...Array(6)].map((_, index) => (
                                            <div key={index} className="card m-2" style={{ width: '15rem' }}>
                                                <Skeleton variant="rectangular" height={200} />
                                                <div className="cardofproductadmin">
                                                    <Skeleton />
                                                    <Skeleton width="80%" />
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    // Actual product content
                                    <>
                                        {products.map((p) => (
                                            <Link
                                                key={p._id}
                                                to={`/dashboard/admin/product/${p.slug}`}
                                                className="product-link"
                                            >
                                                <div className="card m-2" style={{ width: '15rem' }}>
                                                    <img
                                                        src={`${process.env.REACT_APP_API}/api/v1/product/produuct-photo/${p._id}`}
                                                        className="card-img-top"
                                                        alt={p.name}
                                                    />
                                                    <div className="cardofproductadmin">
                                                        <h5 className="producttextadmin">{p.name}</h5>
                                                        {/* <p className="producttextadmin">{p.description}</p> */}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </>
                                )}
                            </div>
                            <Stack spacing={2} className="pagination-stack">
                                <Pagination
                                    count={totalPages}
                                    page={page}
                                    onChange={handlePageChange}
                                    color="primary"
                                />
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;

