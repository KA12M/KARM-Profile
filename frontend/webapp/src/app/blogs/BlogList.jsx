import React from "react";
import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs && blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}
