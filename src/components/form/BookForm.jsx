import React from "react";
import Form from "react-bootstrap/Form";

const BookForm = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Weight (KG) </Form.Label>
        <Form.Control id="weight" type="text" placeholder="kg" />
        <Form.Text className="text-muted">
          Please provide weight in kg format
        </Form.Text>
      </Form.Group>
    </>
  );
};

export default BookForm;
