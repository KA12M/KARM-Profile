import React from "react";
import HeaderIcon from "../../components/HeaderIcon";
import { useStore } from "../../store/store";

export default function AboutMe({}) {
  const {
    commonStore: { karmProfile },
  } = useStore();

  return (
    <div className="about-me">
      <div className="container">
        <h1 className="about-me-title">About Me</h1>
        <div className="d-about-me">
          {karmProfile && (
            <>
              <div className="about-left">
                <div className="info">
                  <h4>Full Name:</h4>
                  <span>{karmProfile.fullName}</span>
                </div>
                <div className="info">
                  <h4>Phone:</h4>
                  <span>{karmProfile.phone ?? ""}</span>
                </div>
                <div className="info">
                  <h4>Email:</h4>
                  <span>{karmProfile.email ?? ""}</span>
                </div>
                <div className="info">
                  <h4>Website:</h4>
                  <span>
                    <a href={karmProfile.website ?? "#"}>karm.profile</a>
                  </span>
                </div>
                <div className="info">
                  <h4>Address:</h4>
                  <span>{karmProfile.address ?? ""}</span>
                </div>
              </div>

              <div className="about-right">
                <h1>{karmProfile.aboutTitle ?? ""}</h1>
                {karmProfile.aboutMe &&
                  karmProfile.aboutMe.map((el, i) => <p key={i}>{el}</p>)}

                <HeaderIcon karm={karmProfile} bggray />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
