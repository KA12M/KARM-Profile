import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { GetData } from "../../services/blogs";
 
export default function BlogSection() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    GetData().then(setBlogs);
  }, []); 

  return (
    <div className="blog-section">
      <div className="container">
        <div className="blog-title">
          <h1>Post on Medium</h1>
          <p>
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
          </p>
        </div>

        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}
