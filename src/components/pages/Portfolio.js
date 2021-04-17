import React, { useState } from 'react';
import Merual from '../../assets/meural.png'
import Covid from '../../assets/covid-hub.png'
import Weather from '../../assets/weather-dashboard.png'
import Scheduler from '../../assets/scheduler.png'
import Budget from '../../assets/budget-tracker.png'
import Locals from '../../assets/la-locals.png'

const Portfolio = () => {
  const [links] = useState([
    {
      href: "https://meural.herokuapp.com/",
      name: "Meural",
      image: Merual
    },
    {
      href: "https://mooka0.github.io/covid19-info-hub/",
      name: "Covid-19 Info Hub",
      image: Covid
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