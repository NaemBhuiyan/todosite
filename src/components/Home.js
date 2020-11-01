import React, { useState } from "react";
import { Col, Row, Modal, ModalBody, Button, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux";
import PostForm from "./PostForm";
import AllPost from "./AllPost";

const Home = () => {
  const posts = useSelector((state) => state.postReducer.posts);

  const setAddPost = useDispatch();
  const [addPostModal, setAddPostModal] = useState(false);
  const handleDispatch = (id, title, content, categories) => {
    setAddPost(addPost(title, content, categories));
  };
  const toggleAddPost = () => setAddPostModal(!addPostModal);
  return (
    <section className="pb-5">
      <h2 className="text-center mt-5">All Post</h2>
      <Modal isOpen={addPostModal} toggle={toggleAddPost}>
        <ModalHeader toggle={toggleAddPost}>Create New Post</ModalHeader>
        <ModalBody>
          <PostForm
            handleDispatch={handleDispatch}
            btnText="Post"
            toggle={toggleAddPost}></PostForm>
        </ModalBody>
      </Modal>
      <Row className="justify-content-center">
        <Col xs="8">
          <Button size="lg" color="info" onClick={() => setAddPostModal(true)}>
            Create post
          </Button>
        </Col>
      </Row>
      <AllPost posts={posts}></AllPost>
    </section>
  );
};

export default Home;
