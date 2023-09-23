import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function HeaderIcon({ karm, bggray }) {
  return (
    <div className="header-icons">
      <a href={karm.facebook ?? "#"} target="_blank">
        <FontAwesomeIcon
          className={`icon ${bggray && "icon-bg-gray"}`}
          icon={faFacebook}
        />
      </a>
      <a href={karm.instagram ?? "#"} target="_blank">
        <FontAwesomeIcon
          className={`icon ${bggray && "icon-bg-gray"}`}
          icon={faInstagram}
        />
      </a>
      <a href={karm.linkedin ?? "#"} target="_blank">
        <FontAwesomeIcon
          className={`icon ${bggray && "icon-bg-gray"}`}
          icon={faLinkedin}
        />
      </a>
      <a href={karm.github ?? "#"} target="_blank">
        <FontAwesomeIcon
          className={`icon ${bggray && "icon-bg-gray"}`}
          icon={faSquareGithub}
        />
      </a>
    </div>
  );
}
