import React from "react";
import "./ImageGallery.css";

export default function ImageGallery({ gallery = [] }) {
  
  return (
    <div className="image-gallery" id="image-gallery">
      {gallery.map((el, i) => (
        <div key={i} className="gallery-item">
          <img src={el} alt="" />
        </div>
      ))}
    </div>
  );
}
