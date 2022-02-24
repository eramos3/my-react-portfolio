import React, { useState } from "react";
import Merual from "../../assets/meural.png";
import Book from "../../assets/book-search.png";
import Weather from "../../assets/weather-dashboard.png";
import Scheduler from "../../assets/scheduler.png";
import Budget from "../../assets/budget-tracker.png";
import Locals from "../../assets/la-locals.png";
import Pizza from "../../assets/pizza-hunt.png";
import Thoughts from "../../assets/thoughts.png";
import Calculator from "../../assets/calculator.png";

const Projects = () => {
  const [links] = useState([
    {
      href: "https://meural.herokuapp.com/",
      name: "Meural",
      image: Merual,
      git: "https://github.com/stepheff1994/second-group-project",
      tools:"JavaScript, DotEnv, Bootstrap, Express, Bcypt, Sequelize, MySQL"
    },
    {
      href: "https://arcane-brushlands-36937.herokuapp.com/",
      name: "Book Search Engine",
      image: Book,
      git: "https://github.com/eramos3/book-search-engine",
      tools:"MongoDB, React, Express.js, Node.js, GraphQL"
    }, 
    {
      href: "https://eramos3.github.io/Weather-Dashboard/",
      name: "Weather Dashboard",
      image: Weather,
      git: "https://github.com/eramos3/Weather-Dashboard",
      tools:"HTML, Javascript, Bootstrap, Open Weather API"
    },
    {
      href: "https://eramos3.github.io/work-day-scheduler/",
      name: "Day Scheduler",
      image: Scheduler,
      git: "https://github.com/eramos3/work-day-scheduler",
      tools:"HTML, CSS, Javascript, JQuery, Bootstrap, Momentjs"
    },
    {
      href: "https://bdget-traker.herokuapp.com/",
      name: "Budget Tracker",
      image: Budget,
      git: "https://github.com/eramos3/Budget-Tracker",
      tools:"MongoDB, Javascript, CSS, Expressjs"
    },
    {
      href: "http://la-locals.herokuapp.com/",
      name: "LA-LOCALS",
      image: Locals,
      git: "https://github.com/stepheff1994/la-locals-project",
      tools:"JavaScript, Socket.Io, DotEnv, React, GraphQL, Bootstrap, Material.ui, Express, Bcypt, JWT, Google Firebase, Stripe"
    },
    {
      href: "https://rocky-depths-37921.herokuapp.com/",
      name: "Pizza Hunt",
      image: Pizza,
      git: "https://github.com/eramos3/pizza-hunt",
      tools:"MongoDB, Javascript, CSS, Expressjs, Mongoose"
    },
    {
      href: "https://ancient-castle-37434.herokuapp.com/",
      name: "Deep Thoughts",
      image: Thoughts,
      git: "https://github.com/eramos3/deep-thoughts",
      tools:"MongoDB, Javascript, CSS, Expressjs, React, GraphQL"
    },
    {
      href: "https://eramos3.github.io/calculator/",
      name: "Calculator App",
      image: Calculator,
      git: "https://github.com/eramos3/calculator",
      tools:" Javascript, CSS, React"
    },
  ]);
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="grid-container">
        {links.map((link) => (
          <div key={link.name} className="w3-card-4">
            <img src={link.image} alt={link.name}></img>
            <div
              class="w3-container w3-center"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p>
                <a rel="noreferrer" target="_blank" href={link.href}>
                  {link.name}
                </a>{" "}
                /{" "}
                <a rel="noreferrer" target="_blank" href={link.git}>
                  Github Page
                </a>
              </p>
              <p> Made with {link.tools}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
