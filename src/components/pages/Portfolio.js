import React, { useState } from 'react';
import Merual from '../../assets/meural.png'
import Book from '../../assets/book-search.png'
import Weather from '../../assets/weather-dashboard.png'
import Scheduler from '../../assets/scheduler.png'
import Budget from '../../assets/budget-tracker.png'
import Locals from '../../assets/la-locals.png'
import Pizza from '../../assets/pizza-hunt.png'
import Thoughts from '../../assets/thoughts.png'

const Portfolio = () => {
  const [links] = useState([
    {
      href: "https://meural.herokuapp.com/",
      name: "Meural",
      image: Merual,
      git:"https://github.com/stepheff1994/second-group-project"
    },
    {
      href: "https://arcane-brushlands-36937.herokuapp.com/",
      name: "Book Search Engine",
      image: Book,
      git:"https://github.com/eramos3/book-search-engine"
    },
    {
      href: "https://eramos3.github.io/Weather-Dashboard/",
      name: "Weather Dashboard",
      image: Weather,
      git:"https://github.com/eramos3/Weather-Dashboard"
    },
    {
      href: "https://eramos3.github.io/work-day-scheduler/",
      name: "Day Scheduler",
      image: Scheduler,
      git:"https://github.com/eramos3/work-day-scheduler"
    },
    {
      href: "https://bdget-traker.herokuapp.com/",
      name: "Budget Tracker",
      image: Budget,
      git:"https://github.com/eramos3/Budget-Tracker"
    },
    {
      href: "http://la-locals.herokuapp.com/",
      name: "LA-LOCALS",
      image: Locals,
      git:"https://github.com/stepheff1994/la-locals-project"
    },
    {
      href: "https://rocky-depths-37921.herokuapp.com/",
      name: "Pizza Hunt",
      image: Pizza,
      git:"https://github.com/eramos3/pizza-hunt"
    },
    {
      href: "https://ancient-castle-37434.herokuapp.com/",
      name: "Deep Thoughts",
      image: Thoughts,
      git:"https://github.com/eramos3/deep-thoughts"
    }
  ]);
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="grid-container">
        {links.map(link => (
          <div key={link.name} className="w3-card-4" >
            <img src={link.image} alt={link.name}></img>
            <div class="w3-container w3-center" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <p><a rel="noreferrer" target="_blank"
                href={link.href}>{link.name}</a> / <a rel="noreferrer" target="_blank"
                  href={link.git}>Github Page</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;