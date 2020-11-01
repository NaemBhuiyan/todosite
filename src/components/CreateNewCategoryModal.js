import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCatagories } from "../redux";
const CreateNewCategoryModal = ({
  newCatagoriesModal,
  setNewCatagoriesModal,
  setNewCatagoriesValue,
  newCatagoriesValue,
}) => {
  const toggle = () => setNewCatagoriesModal(!newCatagoriesModal);
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState("");
  const setCatagories = useDispatch();

  const handleSaveClick = () => {
    if (Array.isArray(newCatagoriesValue)) {
      setNewCatagoriesValue([
        ...newCatagoriesValue,
        {
          value: newValue,
          label: newLabel,
        },
      ]);
    } else {
      setNewCatagoriesValue([
        {
          value: newValue,
          label: newLabel,
        },
      ]);
    }

    setCatagories(addCatagories({ value: newValue, label: newLabel }));

    setNewLabel("");
    setNewValue("");
  };
  return (
    <Modal isOpen={newCatagoriesModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create New Category</ModalHeader>
      <ModalBody>
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
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            handleSaveClick();
            toggle();
          }}>
          Save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateNewCategoryModal;
