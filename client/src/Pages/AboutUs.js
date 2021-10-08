import React from "react";
import group from "../Images/group.jpeg";
import thea from "../Images/thea.jpg"
import mathijs from "../Images/mathijs.jpeg";
import jesse from "../Images/jesse.jpeg";
// TODO: Replace this once Cooper sends his photo
import cooper from "../Images/stain.png";

export default function AboutUs() {
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <h1 className="">
            About Us
          </h1>
          <img src={group} alt="group photo of founders"></img>
        </div>
      </section>
      <div className="columns">
        <div className="column is-8">
          <h1>
            Cooper Bjorkelund
          </h1>
        </div>
        <div className="column is-4">
          <img src={cooper} alt="cooper"></img>
        </div>
      </div>
      <div className="columns">
        <div className="column is-4">
          <img src={jesse} alt="jesse"></img>
        </div>
        <div className="column is-8">
          <h1>
            Jesse Vermeulen
          </h1>
        </div>
      </div>
      <div className="columns">
        <div className="column is-8">
          <h1>
            Mathijs van Ginneken
          </h1>
        </div>
        <div className="column is-4">
          <img src={mathijs} alt="mathijs"></img>
        </div>
      </div>
      <div className="columns">
        <div className="column is-4">
          <img src={thea} alt="thea"></img>
        </div>
        <div className="column is-8">
          <h1>
            Thea de Jong
          </h1>
        </div>
      </div>
    </div>
  );
}
