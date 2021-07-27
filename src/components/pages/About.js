import React from "react";

const About = () => (
  <div className="container">
    <h1>About Me</h1>
     <div className="flex-row">
          <img
            src={require('../../assets/me.jpeg').default}
            alt="eder"
            className="img-thumbnail mx-1"
           />
      </div>
    <p>Hello, welcome to my portfolio. I'm a big sports fan, actually more of a soccer
    fan overall but, I still like to be a super-fan when it comes to LA sports. I recently started learning
    how to code, and learned some new skills like, JavaScript, Web APIs, Node.js, Object Oriented Programing, SQL/NoSql,
    PWAs, and React. I hope to someday land a job where I can translate my skills into
    work. In the mean time, please feel free to check out some of my projects, I'll be adding more content
    as I improve. </p>
  </div>
);

export default About;
