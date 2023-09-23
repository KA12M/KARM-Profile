import React from "react";
import { formatDateThai } from "./../../utils/format-date";
import Modal from "react-modal"; 

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "768px",
  },
};

export default function BlogCard({ blog }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="blog-card">
      <img src={blog.images[0]} alt="" />
      <div className="blog-card-content">
        <span>{formatDateThai(blog.createdAt)}</span>
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <hr />
        <div className="blog-card-bottom">
          <button onClick={openModal}>Read More {"->"}</button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Blog"
      >
        <div className="blog-card-bottom">
          <button onClick={closeModal}>
            <h1>x</h1>
          </button>
        </div>
        <div className="modal-content">
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <div className="modal-images">
            {blog.images.length > 0 &&
              blog.images.map((img, i) => <img key={i} src={img} />)}
          </div>
        </div>
      </Modal>
    </div>
  );
}
