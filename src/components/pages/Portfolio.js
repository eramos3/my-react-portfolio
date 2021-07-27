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
      image: Merual
    },
    {
      href: "https://arcane-brushlands-36937.herokuapp.com/",
      name: "Book Search Engine",
      image: Book
    },
    {
      href: "https://eramos3.github.io/Weather-Dashboard/",
      name: "Weather Dashboard",
      image: Weather
    },
    {
      href: "https://eramos3.github.io/work-day-scheduler/",
      name: "Day Scheduler",
      image: Scheduler
    },
    {
      href: "https://bdget-traker.herokuapp.com/",
      name: "Budget Tracker",
      image: Budget
    },
    {
      href: "http://la-locals.herokuapp.com/",
      name: "LA-LOCALS",
      image: Locals
    },
    {
      href: "https://rocky-depths-37921.herokuapp.com/",
      name: "Pizza Hunt",
      image: Pizza
    },
    {
      href: "https://ancient-castle-37434.herokuapp.com/",
      name: "Deep Thoughts",
      image: Thoughts
    }
  ]);
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="grid-container">
        {links.map(link => (
          <div key={link.name} className="grid-item" style={{backgroundImage: `url(${link.image})`, backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat: 'no-repeat'}}>
            <div  className="w3-col l6"><a rel="noreferrer" target="_blank"
              href={link.href}>{link.name}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;