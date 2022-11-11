import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
            {select === "DVD" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Size (MB) </Form.Label>
                  <Form.Control
                    name="size"
                    id="size"
                    type="text"
                    placeholder="MB"
                    {...register("size", {
                      required: true,
                    })}
                  />
                  {errors.size && errors.size.type === "required" && (
                    <p className="errorMsg">Size is required.</p>
                  )}
                  <Form.Text className="text-muted">
                    Please provide in MB.
                  </Form.Text>
                </Form.Group>
              </>
            )}
            {select === "Book" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Weight (KG) </Form.Label>
                  <Form.Control
                    name="weight"
                    id="weight"
                    type="text"
                    placeholder="kg"
                    {...register("weight", {
                      required: true,
                    })}
                  />
                  {errors.weight && errors.weight.type === "required" && (
                    <p className="errorMsg">Weight is required.</p>
                  )}
                  <Form.Text className="text-muted">
                    Please provide weight in kg format
                  </Form.Text>
                </Form.Group>
              </>
            )}
            {select === "Furniture" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Height (CM) </Form.Label>
                  <Form.Control
                    name="height"
                    id="height"
                    type="text"
                    placeholder="CM"
                    {...register("height", {
                      required: true,
                    })}
                  />
                  {errors.height && errors.height.type === "required" && (
                    <p className="errorMsg">Height is required.</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Width (CM) </Form.Label>
                  <Form.Control
                    name="width"
                    id="width"
                    type="text"
                    placeholder="CM"
                    {...register("width", {
                      required: true,
                    })}
                  />
                  {errors.width && errors.width.type === "required" && (
                    <p className="errorMsg">Width is required.</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Length (CM) </Form.Label>
                  <Form.Control
                    name="lenght"
                    id="lenght"
                    type="text"
                    placeholder="CM"
                    {...register("length", {
                      required: true,
                    })}
                  />
                  {errors.length && errors.length.type === "required" && (
                    <p className="errorMsg">Length is required.</p>
                  )}
                </Form.Group>
                <Form.Text className="text-muted">
                  Please provide dimensions in HxWxL format
                </Form.Text>
              </>
            )}
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default FormProduct;
