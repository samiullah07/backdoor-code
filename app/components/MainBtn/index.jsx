import React from "react";

function Mainbtn({ classes, text }) {
  return (
    <button
      className={`main-btn border-rose-500 transition-colors duration-300 hover:bg-rose-500 ${classes}`}
    >
      <span className="ms-10">{text}</span>
      <svg
        width={40}
        height={40}
        className="ms-10"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
          fill="#F43F5E"
        />
        <mask
          id="mask0_2126_26961"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={8}
          y={8}
          width={24}
          height={24}
        >
          <rect x={8} y={8} width={24} height={24} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2126_26961)">
          <path
            d="M24.175 21H12V19H24.175L18.575 13.4L20 12L28 20L20 28L18.575 26.6L24.175 21Z"
            fill="white"
          />
        </g>
      </svg>
    </button>
  );
}

export default Mainbtn;
