import React from "react";
import "./skeleton-loading.css";

export default function BlogCardSkeleton() {
  return (
    <div className="blog-card">
      <div className="skeleton-img" />
      <div className="skeleton-text w-50"></div>
      <div className="skeleton-text w-75"></div>
      <div className="skeleton-text w-70"></div>
      <div className="skeleton-text w-75"></div>
      <div className="skeleton-text w-70"></div>
    </div>
  );
}
