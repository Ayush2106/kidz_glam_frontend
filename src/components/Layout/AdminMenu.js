import React from "react";
import { NavLink } from "react-router-dom";
import finallogoamnick from "../../images/final_logoo.png"
import './Layout.css';
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <img src={finallogoamnick} alt="/Logo" width={'50%'}/> 
        <div className="list-group dashboard-menu">
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
                    >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
              >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
                  >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
           >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
           >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;