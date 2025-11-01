import React from "react";

const RadiantSphere = ({
  x = "50%",         // Default center X
  y = "50%",         // Default center Y
  size = 400,        // Default size in px
  blurRadius = 400,  // Default blur
  color = "rgba(255, 255, 255, 0.5)", // Default color
  animated = false,

}) => {
  const style = {
    position: "absolute",
    top: typeof y === "number" ? `${y}px` : y,
    left: typeof x === "number" ? `${x}px` : x,
    width: `${size}px`,
    height: `${size}px`,
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${color})`,
    filter: `blur(${blurRadius}px)`,
    pointerEvents: "none",
    zIndex: -1,
  };

  let css;

  if (animated) {
    css="radiantSphereAnim"
  }

  return <div style={style} className={css} />;
};

export default RadiantSphere;
