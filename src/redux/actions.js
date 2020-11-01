import { ADD_POST, EDIT_POST, DELETE_POST, ADD_CATEGORY } from "./actionTypes";

export const addPost = (title, content, categories) => {
  return {
    type: ADD_POST,
    title,
    content,
    categories,
  };
};

export const editPost = (props) => {
  return {
    type: EDIT_POST,
    ...props,
  };
};

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id,
  };
};
export const addCatagories = (id) => {
  return {
    type: ADD_CATEGORY,
    id,
  };
};
