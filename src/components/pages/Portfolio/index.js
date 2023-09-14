import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./portfolio.css";

export default function Portfolio() {
  return (
<div>
<h2>Projects</h2>
        <div class="section-projects">

          <article class="blocks">
            <a href="#">
              <img
                src="http://placekitten.com/300/300"
                class="float-left"
                alt="First Horiseon Project"
            /></a>
            <h3>project 2</h3>
            <p>Place Holder text</p>
          </article>

          <article class="blocks">
            <a href="#">
              <img
                src="http://placekitten.com/200/300"
                class="float-left"
                alt="First Horiseon Project"
            /></a>
            <h3>project 3</h3>
            <p>Place Holder text</p>
          </article>

          <article class="blocks">
            <a href="#">
              <img
                src="http://placekitten.com/300/300"
                class="float-left"
                alt="First Horiseon Project"
            /></a>
            <h3>project 4</h3>
            <p>Place Holder text</p>
          </article>

          <article class="blocks">
            <a href="#">
              <img
                src="http://placekitten.com/200/300"
                class="float-left"
                alt="First Horiseon Project"
            /></a>
            <h3>project 5</h3>
            <p>Place Holder text</p>
          </article>
        </div>
</div>

  );
}
