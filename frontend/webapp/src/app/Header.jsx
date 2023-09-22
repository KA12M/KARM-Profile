import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
        <h1>{karm.fullName}</h1>
        <span>{karm.jobTitle && karm.jobTitle.join(" / ")}</span>
        <div className="header-icons">
          <a href={karm.facebook ?? "#"} target="_blank">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
          <a href={karm.instagram ?? "#"} target="_blank">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
          <a href={karm.linkedin ?? "#"} target="_blank">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
          <a href={karm.github ?? "#"} target="_blank">
            <FontAwesomeIcon className="icon" icon={faSquareGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}
