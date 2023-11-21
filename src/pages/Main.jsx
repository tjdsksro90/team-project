import { app } from "firbase";
import React, { useEffect } from "react";

function Main() {
  useEffect(() => {
    console.log("app", app);
  }, []);
  return <div>Main</div>;
}

export default Main;
