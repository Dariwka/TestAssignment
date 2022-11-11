import React from "react";
import Button from "react-bootstrap/Button";
import "./topbarproductlist.scss";

const TopbarProductList = () => {
  //   const navigate = useNavigate();

  //   const goToAddForm = () => {
  //     navigate("/addproduct");
  //   };

  const deleteHandler = () => {
    console.log("deleted");
  };

  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <h1>Product List</h1>
        </div>
        <div className="right">
          <Button variant="outline-success" size="lg">
            ADD
          </Button>
          <Button
            id="delete-product-btn"
            variant="outline-danger"
            size="lg"
            onClick={deleteHandler}
          >
            MASS DELETE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopbarProductList;
