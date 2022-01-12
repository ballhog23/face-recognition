import React from "react";
import Logo from "../logo/Logo";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="pa3" style={{ display: "flex" }}>
        <Logo />
        <p
          className="f4 link dim black underline pa3 pointer"
          style={{ marginLeft: "auto" }}
          onClick={() => onRouteChange("signin")}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        className="pa3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Logo />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            onClick={() => onRouteChange("signin")}
            className="f4 link dim black underline pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f4 link dim black underline pointer"
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
