import React, { useState } from "react";

function ImageHover({ imageUrl, hoverText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "320px", // kích thước của artboard phone-1
        height: "568px", // kích thước của artboard phone-1
        overflow: "hidden", // ẩn phần văn bản hover khi không được hiển thị
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="image-container"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          cursor: "pointer",
          borderRadius: "15px",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: isHovered ? 1 : 0, // hiển thị overlay nếu đang hover
            transition: "opacity 0.3s ease-in-out", // hiệu ứng mờ dần khi hiển thị
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          {hoverText}
        </div>
      </div>
    </div>
  );
}

export default ImageHover;
