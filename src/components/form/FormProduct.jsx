import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DvdForm from "./DvdForm";
import BookForm from "./BookForm";
import FurnitureForm from "./FurnitureForm";
import "./form.scss";

const FormProduct = () => {
  const [select, setSelect] = useState();

  const switcherHandler = (e) => {
    setSelect(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="form">
      <Form id="product_form">
        <Form.Group className="formGroup">
          <Form.Label>SKU</Form.Label>
          <Form.Control id="sku" type="text" placeholder="sku" />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Label>Name</Form.Label>
          <Form.Control id="name" type="text" placeholder="name" />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Label>Price($)</Form.Label>
          <Form.Control id="price" type="text" placeholder="price" />
        </Form.Group>
        <Form.Group id="productType" className="formGroup">
          <Form.Label>Type Switcher</Form.Label>
          <Form.Select value={select} onChange={switcherHandler}>
            <option>Type Switcher</option>
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="formGroup">
          {select === "DVD" && <DvdForm />}
          {select === "Book" && <BookForm />}
          {select === "Furniture" && <FurnitureForm />}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormProduct;
