import React from "react";
import HeaderIcon from "../../components/HeaderIcon";
import { useStore } from "../../store/store";
import { observer } from "mobx-react-lite";

const Header = function ({}) {
  const {
    commonStore: { karmProfile },
  } = useStore();

  return (
    <div className="page">
      <div className="header-container"></div>
      <div className="header-content">
        <div className="karm-avatar"></div>
        <img
          className="karm-avatar"
          src={karmProfile && karmProfile.profileImage}
          alt=""
        />
        <h1>{karmProfile && `~${karmProfile.fullName}~`}</h1>
        <span>
          {karmProfile && karmProfile.jobTitle && karmProfile.jobTitle.join(" / ")}
        </span>

        {karmProfile && <HeaderIcon karm={karmProfile} />}
      </div>
    </div>
  );
};

export default observer(Header);
