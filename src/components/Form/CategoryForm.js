import React from "react";
import '../../pages/admin/AdminDashboard.css'
const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form className="categoryformform" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control inputofcategoryform"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn editbtnofcreatecategory">
          Submit
        </button>
      </form>
    </>
  );
};
export default CategoryForm;