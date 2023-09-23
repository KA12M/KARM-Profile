import React from "react";
import HeaderIcon from "../components/HeaderIcon";

export default function Header({ karm }) {
  return (
    <div className="page">
      <div className="header-container"></div>
      <div className="header-content">
        <div className="karm-avatar"></div>
        <img
          className="karm-avatar "
          src="assets/images/KARM-Panda.jpg"
          alt=""
        />
        <h1>{karm && `~${karm.fullName}~`}</h1>
        <span>{karm && karm.jobTitle && karm.jobTitle.join(" / ")}</span>

        {karm && <HeaderIcon karm={karm} />}
      </div>
    </div>
  );
}
