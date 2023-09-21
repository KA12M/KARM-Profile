import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
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
        <h1>~Karan Khumthong~</h1>
        <span>Software Developer / Web Developer</span>
        <div className="header-icons">
          <a href={import.meta.env.VITE_FACEBOOK ?? ""} target="_blank">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
          <a href={import.meta.env.VITE_INSTAGRAM ?? ""} target="_blank">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
          <a href={import.meta.env.VITE_LINKEDIN ?? ""} target="_blank">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
          <a href={import.meta.env.VITE_GITHUB ?? ""} target="_blank">
            <FontAwesomeIcon className="icon" icon={faSquareGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}
