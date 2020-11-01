import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import CreatableSelect from "react-select/creatable";
import CreateNewCategoryModal from "./CreateNewCategoryModal";
import { useDispatch, useSelector } from "react-redux";

const PostForm = ({ handleDispatch, targetPost, btnText, toggle }) => {
  const catagories = useSelector((state) => state.catagoriesReducer.catagories);

  const [title, setTitle] = useState(targetPost?.title || "");
  const [content, setContent] = useState(targetPost?.content || "");
  const [newCatagoriesValue, setNewCatagoriesValue] = useState(
    targetPost?.categories || []
  );
  const [newCatagoriesModal, setNewCatagoriesModal] = useState(false);
  const [multiSelectOptions, setMultiSelectOptions] = useState(catagories);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDispatch(targetPost?.id, title, content, newCatagoriesValue);
    setTitle("");
    setContent("");
    setNewCatagoriesValue([]);
  };

  useEffect(() => {
    if (Array.isArray(newCatagoriesValue)) {
      const isDuplicate = multiSelectOptions.every((item) =>
        newCatagoriesValue.some((v) => v.value !== item.value)
      );
      isDuplicate &&
        setMultiSelectOptions((prev) => [...prev, ...newCatagoriesValue]);
    }
  }, [newCatagoriesModal, newCatagoriesValue]);
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            name="title"
            id="title"
            value={title}
            placeholder="Enter Title"
            onChange={({ target }) => {
              setTitle(target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Content</Label>
          <Input
            type="textarea"
            name="content"
            id="content"
            value={content}
            placeholder="Content"
            onChange={({ target }) => setContent(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Categories</Label>
          <CreatableSelect
            isClearable
            onCreateOption={() => {
              setNewCatagoriesModal(true);
            }}
            value={newCatagoriesValue}
            isMulti
            placeholder="Type to create new catagories"
            options={[...new Set(multiSelectOptions)]}
            onChange={(values) => {
              setNewCatagoriesValue(values);
            }}
          />
        </FormGroup>
        <Button
          color="primary"
          className="float-right mt-4"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
            toggle && toggle();
          }}>
          {btnText}
        </Button>
      </Form>
      <CreateNewCategoryModal
        newCatagoriesModal={newCatagoriesModal}
        setNewCatagoriesModal={setNewCatagoriesModal}
        setNewCatagoriesValue={setNewCatagoriesValue}
        newCatagoriesValue={newCatagoriesValue}
      />
    </>
  );
};

export default PostForm;
