import React from "react";

const Portfolio = () => (
  <div>
    <h1>My Portfolio</h1>
    <div className="grid-container">
      <div className="grid-item item-1">
        <div className="w3-col l6"><a rel="noreferrer" target="_blank"
          href="https://meural.herokuapp.com/">Meural</a>
        </div>
      </div>
      <div className="grid-item item-2">
        <div className="w3-col l6"><a rel="noreferrer" target="_blank"
          href="https://mooka0.github.io/covid19-info-hub/">Covid-19 Info Hub</a>
        </div>
      </div>
      <div className="grid-item item-3">
        <div className="w3-col l6"><a rel="noreferrer" target="_blank"
          href="https://eramos3.github.io/Weather-Dashboard/">Weather Dashboard</a>
        </div>
      </div>
      <div className="grid-item item-4">
        <div className="w3-col l6"><a rel="noreferrer" target="_blank"
          href="https://eramos3.github.io/work-day-scheduler/">Day Scheduler</a>
        </div>
      </div>
      <div className="grid-item item-5">
        <div className="w3-col l6"> <a rel="noreferrer" target="_blank"
          href="https://bdget-traker.herokuapp.com/">Budget Tracker</a>
        </div>
      </div>
      <div className="grid-item item-6">
        <div className="w3-col l6"><a rel="noreferrer" target="_blank"
          href="http://la-locals.herokuapp.com/">LA-LOCALS</a>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;