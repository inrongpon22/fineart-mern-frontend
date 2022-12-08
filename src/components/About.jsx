import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/3323619.jpg" alt="" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who<b>We</b>Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                assumenda quasi id inventore eaque, maiores in magnam,
                exercitationem ratione minus cupiditate libero voluptatem
                tenetur. Commodi, harum necessitatibus veniam, nostrum
                temporibus dolore sint, explicabo facilis corporis quis in
                placeat minima voluptatem quod! Hic vitae autem inventore ea
                iste voluptate nobis nisi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis illo quaerat quasi
                deleniti labore corporis neque fugit dolorem nulla? Nam nesciunt
                accusantium consectetur a quibusdam.
              </p>
              <NavLink
                to="/"
                className="btn btn-primary rounded-pill px-4 py-2"
              >
                Get Started
              </NavLink>
              <NavLink
                to="/contact"
                className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
