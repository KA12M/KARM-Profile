import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p className="container">
        © 2023
        <a href={import.meta.env.VITE_LINKEDIN ?? "#"}>KARM KaranKhumthong.</a>
        All Rights Reserved.
      </p>
    </div>
  );
}
