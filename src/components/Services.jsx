import React from "react";
//components
import Cards from "./Cards";

const Services = () => {
  return (
    <div>
      <section id="services">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our<b>Awesome</b>Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <Cards title={"Highly Customizable"} icon={"fa-cogs"} />
            <Cards title={"Fully Responsive Layout"} icon={"fa-mobile"} />
            <Cards title={"Users Experience"} icon={"fa-users"} />
            <Cards title={"Creative Web Design"} icon={"fa-laptop"} />
            <Cards title={"Unique and Clean"} icon={"fa-file-code-o"} />
            <Cards title={"Creative Ideas"} icon={"fa-star-half-o"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
