import React from "react";
import { formatDateThai } from "./../../utils/format-date";

export default function BlogCard({ blog }) {
  function onClick() {
    alert("Read More is coming soon...");
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
          <button onClick={onClick}>Read More {"->"}</button>
        </div>
      </div>
    </div>
  );
}
