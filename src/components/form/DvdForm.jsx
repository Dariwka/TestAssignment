import React from "react";
import Form from "react-bootstrap/Form";

const DvdForm = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Size (MB) </Form.Label>
        <Form.Control id="size" type="text" placeholder="MB" />
        <Form.Text className="text-muted">Please provide in MB.</Form.Text>
      </Form.Group>
    </>
  );
};

export default DvdForm;
