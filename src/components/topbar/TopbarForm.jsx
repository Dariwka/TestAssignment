import React from "react";
import Button from "react-bootstrap/Button";
import "./topbarform.scss";

const TopbarForm = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <h1>Product Add</h1>
        </div>
        <div className="right">
          <Button variant="outline-success" size="lg">
            Save
          </Button>
          <Button id="delete-product-btn" variant="outline-danger" size="lg">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopbarForm;
