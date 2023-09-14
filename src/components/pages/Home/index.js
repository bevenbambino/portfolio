import React from "react";
import "./home.css";

export default function Home() {
  return (
    <section className="home ">
      <article className="content-container row">
        <div className="col-sm-12 col-md-6 first-box">
          <div className="inner-first-box">
            
          </div>
        </div>

        <div className="col-sm-12 col-md-6 second-box">
          <div className="inner-second-box">
            <h2 className="pt-5">Hello!</h2>
            <p>
              I'm a <b>Full Stack Developer</b> from Los Angeles, CA with
              extensive experience in responsive web development.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
