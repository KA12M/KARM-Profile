import React from "react";
import HeaderIcon from "../../components/HeaderIcon";

export default function AboutMe({ karm }) {
  return (
    <div className="about-me">
      <div className="container">
        <h1 className="about-me-title">About Me</h1>
        <div className="d-about-me">
          {karm && (
            <>
              <div className="about-left">
                <div className="info">
                  <h4>Full Name:</h4>
                  <span>{karm.fullName}</span>
                </div>
                <div className="info">
                  <h4>Phone:</h4>
                  <span>{karm.phone ?? ""}</span>
                </div>
                <div className="info">
                  <h4>Email:</h4>
                  <span>{karm.email ?? ""}</span>
                </div>
                <div className="info">
                  <h4>Website:</h4>
                  <span>
                    <a href={karm.website ?? "#"}>karm.profile</a>
                  </span>
                </div>
                <div className="info">
                  <h4>Address:</h4>
                  <span>{karm.address ?? ""}</span>
                </div>
              </div>

              <div className="about-right">
                <h1>{karm.aboutTitle ?? ""}</h1>
                {karm.aboutMe &&
                  karm.aboutMe.map((el, i) => <p key={i}>{el}</p>)}

                <HeaderIcon karm={karm} bggray/>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
