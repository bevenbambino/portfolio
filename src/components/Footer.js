import React from "react";
import "./css/portfolioContainer.css";
import "./css/footer.css";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-center pt-2">
      <a
        href="https://github.com/bevenbambino"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3"
      >
        <i className="fa-brands fa-github fa-2xl custom-icon"></i>
      </a>
      
    </div>
  );
}
