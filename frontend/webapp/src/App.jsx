import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "./store/store";

const App = () => {
  const {
    commonStore: { loadKarmProfile, isLoading, karmProfile },
    technologyStore: { loadTechnologies },
  } = useStore();

  useEffect(() => {
    loadKarmProfile();
    loadTechnologies();
  }, []);

  if (isLoading || !karmProfile)
    return (
      <div className="animate-container ">
        <h2 className="animate">Loading...</h2>
      </div>
    );

  return <Outlet />;
};

export default observer(App);
