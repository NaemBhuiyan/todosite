import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCatagories } from "../redux";

const CreateCategory = () => {
  const catagories = useSelector((state) => {
    return state.catagoriesReducer.catagories;
  });
  const setCatagories = useDispatch();
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState("");

  // console.log(catagories);
  // const handleSaveClick = () => {
  //   if (Array.isArray(newCatagoriesValue)) {
  //     setNewCatagoriesValue([
  //       ...newCatagoriesValue,
  //       {
  //         value: newValue,
  //         label: newLabel,
  //       },
  //     ]);
  //   } else {
  //     setNewCatagoriesValue([
  //       {
  //         value: newValue,
  //         label: newLabel,
  //       },
  //     ]);
  //   }

  //   setNewLabel("");
  //   setNewValue("");

  //   toggle();
  // };

  return (
    <>
      <h3 className="text-center mt-5">Create Category</h3>
      <Row className="justify-content-center">
        <Col xs="7">
          <Form>
            <FormGroup>
              <Label>Label</Label>
              <Input
                name="label"
                placeholder="Give category Label"
                value={newLabel}
                onChange={({ target }) => {
                  setNewLabel(target.value);
                }}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Value</Label>
              <Input
                placeholder="Give category value"
                name="value"
                value={newValue}
                onChange={({ target }) => {
                  setNewValue(target.value);
                }}></Input>
            </FormGroup>
            {/* onClick={handleSaveClick} */}
            <Button
              color="primary"
              onClick={() => {
                setCatagories(
                  addCatagories({ value: newValue, label: newLabel })
                );
                setNewLabel("");
                setNewValue("");
              }}>
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default CreateCategory;
