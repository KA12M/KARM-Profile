import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { useStore } from "../../store/store";
import BlogCard from "./BlogCard";
import "./skeleton-loading.css";

const BlogSection = () => {
  const {
    blogStore: { blogs, loadBlogs, isLoading },
  } = useStore();

  useEffect(() => {
    loadBlogs();
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

        <div className="blog-list">
          {/* {isLoading && (
            <div className="blog-card">
              <div className="skeleton-img" />
              <div className="skeleton-text w-50"></div>
              <div className="skeleton-text w-75"></div>
              <div className="skeleton-text w-70"></div>
              <div className="skeleton-text w-75"></div>
              <div className="skeleton-text w-70"></div>
            </div>
          )} */}

          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(BlogSection);
