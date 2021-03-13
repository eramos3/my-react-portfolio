import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div>
      <footer>
        <a alt="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eder-r-224074127"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
        <a alt="github" target="_blank" rel='noreferrer' href="https://github.com/eramos3"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
      </footer>
    </div>
  );
}
export default Footer;