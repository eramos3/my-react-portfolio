import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import resume from '../../assets/Eder F Ramos.pdf'
const Resume = () => (
  <div>
    <h1>Resume</h1>
    <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
      <a href= {resume} download="Eder's Resume"><FontAwesomeIcon icon={faDownload} size="3x"/> Download Resume</a>
    </button>
  </div>
);

export default Resume;
