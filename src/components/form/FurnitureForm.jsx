import React from "react";
import Form from "react-bootstrap/Form";

const FurnitureForm = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Height (CM) </Form.Label>
        <Form.Control id="height" type="text" placeholder="CM" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Width (CM) </Form.Label>
        <Form.Control id="width" type="text" placeholder="CM" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Length (CM) </Form.Label>
        <Form.Control id="lenght" type="text" placeholder="CM" />
      </Form.Group>
      <Form.Text className="text-muted">
        Please provide dimensions in HxWxL format
      </Form.Text>
    </>
  );
};

export default FurnitureForm;
