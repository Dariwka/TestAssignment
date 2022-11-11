import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DvdForm from "./DvdForm";
import BookForm from "./BookForm";
import FurnitureForm from "./FurnitureForm";
import { useForm } from "react-hook-form";
import "./form.scss";

const FormProduct = () => {
  //selection

  const [select, setSelect] = useState();

  const switcherHandler = (e) => {
    setSelect(e.target.value);
    console.log(e.target.value);
  };

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  const handleCancel = () => {
    console.log("cancel");
  };
  return (
    <>
      <div className="topbar">
        <div className="wrapper">
          <div className="left">
            <h1>Product Add</h1>
          </div>
          <div className="right">
            <Button
              type="submit"
              form="product_form"
              variant="outline-success"
              size="lg"
            >
              Save
            </Button>
            <Button
              id="delete-product-btn"
              variant="outline-danger"
              size="lg"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <div className="form">
        <Form id="product_form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="formGroup">
            <Form.Label>SKU</Form.Label>
            <Form.Control
              id="sku"
              name="sku"
              type="text"
              placeholder="sku"
              {...register("sku", {
                required: true,
              })}
            />
            {errors.sku && errors.sku.type === "required" && (
              <p className="errorMsg">SKU is required.</p>
            )}
          </Form.Group>
          <Form.Group className="formGroup">
            <Form.Label>Name</Form.Label>
            <Form.Control
              id="name"
              name="name"
              type="text"
              placeholder="name"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="errorMsg">Name is required.</p>
            )}
          </Form.Group>
          <Form.Group className="formGroup">
            <Form.Label>Price($)</Form.Label>
            <Form.Control
              name="price"
              id="price"
              type="text"
              placeholder="price"
              {...register("price", {
                required: true,
              })}
            />
            {errors.price && errors.price.type === "required" && (
              <p className="errorMsg">Price is required.</p>
            )}
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
        </Form>
      </div>
    </>
  );
};

export default FormProduct;
