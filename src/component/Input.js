import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";

//These tags are react-bootstrap tags. Used to see React boot-strap

const Input = () => {
  return (
    <InputGroup
      data-testid="input"
      role="input-task"
      className="input mt-5 bg-info font-weight-bold border border-info rounded">
      <Form.Control />
      <Button
        data-testid="button"
        name="Add Todo"
        variant="outline-secondary"
        id="button-addon2"
        className="text-white">
        Add Todo
      </Button>
    </InputGroup>
  );
};

export default Input;
