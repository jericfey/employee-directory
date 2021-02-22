import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="m-10 text-sm text-center text-gray-500">
      <p>
        Employee pictures provided by{" "}
        <a
          href="https://randomuser.me/"
          className="font-bold text-gray-600 hover:text-yellow-500"
        >
          Randomuser.Me
        </a>
      </p>
      <p>
        Built by{" "}
        <a
          href="https://github.com/jericfey"
          className="font-bold text-gray-600 hover:text-yellow-500"
        >
          Jeri Fey
        </a>
      </p>
    </div>
  );
}

export default Footer;
