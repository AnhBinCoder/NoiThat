import React, { useState } from "react";

function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <div style={{ borderRadius: "10px", overflow: "hidden" }}>
        <video
          controls
          autoPlay
          muted
          style={{
            width: "100%",
            height: "calc(100% - 10px)",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        >
          <source
            src="https://coohom-biz-sg-s3.coohom.com/ins/static/homepage/video/p24s.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <button
        onClick={toggleDarkMode}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "5px 10px",
          borderRadius: "5px",
          backgroundColor: darkMode ? "#ffffff" : "#000000",
          color: darkMode ? "#000000" : "#ffffff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
export default Theme;
