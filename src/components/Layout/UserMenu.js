import React from "react";
import { NavLink } from "react-router-dom";
import finallogoamnick from "../../images/final_logoo.png"
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <img src={finallogoamnick} alt="/Logo" width={'50%'}/> 
        <div className="list-group dashboard-menu">
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        
        </div>
      </div>
    </>
  );
};

export default AdminMenu;