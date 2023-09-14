import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="about">
      <h2 className="mb-3">About Me</h2>
      <article className="row justify-content-around ">
        <img
          src=""
          alt="picture of Keven Benitez"
          className="col-md-5 col-sm-12"
        />
        <p className="col-md-5 col-sm-12 about-text">
          I'm a passionate front-end developer with a strong foundation in web
          development, having graduated from the prestigious UCLA Extensions
          Bootcamp. My journey into the world of coding has been driven by a
          relentless desire to craft mobile-responsive websites that not only
          look stunning but also deliver exceptional user experiences. With a
          keen eye for design and a knack for translating creative concepts into
          functional code, I am committed to pushing the boundaries of web
          development. As a diligent problem solver, I thrive on turning complex
          challenges into elegant solutions, ensuring that every project I
          undertake exceeds expectations.
        </p>
      </article>
    </section>
  );
}
