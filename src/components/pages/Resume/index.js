import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume text-center">
      <h1 >Resume</h1>

      <article className="row row-cols-1 row-cols-md-3 justify-content-center pt-4">
        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Frontend Skills</h5>
              <p className="card-text">
              JavaScript ES6+, HTML5, CSS3, JQuery, Bootstrap, React.js
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Backend Skills</h5>
              <p className="card-text">
                React, Node.js, Express, Sequelize, MySQL, MongoDB, NoSQL,
                Handlebars
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
