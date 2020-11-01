import React from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import PostForm from "./PostForm";

const EditFormModal = ({ editModal, setEditModal, targetPost }) => {
  const setEditPost = useDispatch();
  const handleDispatch = (id, title, content, categories) => {
    setEditPost(editPost({ id, title, content, categories }));
  };

  const toggle = () => setEditModal(!editModal);
  return (
    <div>
      <Modal isOpen={editModal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Edit Post</ModalHeader>
        <ModalBody>
          <PostForm
            handleDispatch={handleDispatch}
            targetPost={targetPost}
            btnText="Save"
            toggle={toggle}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditFormModal;
