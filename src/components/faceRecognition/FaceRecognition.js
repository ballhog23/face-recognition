import React from "react";
import FaceBox from "../faceBox/FaceBox";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center-1 ma">
      <div className="center absolute mt2" style={{ width: "300px" }}>
        <img
          id="inputimage"
          src={imageUrl}
          alt="user submitted"
          width="auto"
          height="auto"
        />
        {
          box.map((b, i) => {
            return <FaceBox box={b} key={i} />
          })
        }
      </div>
    </div>
  );
};

export default FaceRecognition;
